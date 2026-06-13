-- Waitlist signups: one row per normalized email.
create table public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  created_at timestamptz not null default now(),
  constraint waitlist_signups_email_unique unique (email),
  constraint waitlist_signups_email_format check (
    email ~ '^[^@]+@[^@]+\.[^@]+$'
    and length(email) <= 320
  )
);

create index waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

alter table public.waitlist_signups enable row level security;

-- Rate-limit request log (IP + email attempt tracking).
create table public.waitlist_request_log (
  id bigserial primary key,
  ip_hash text not null,
  email_hash text,
  created_at timestamptz not null default now()
);

create index waitlist_request_log_ip_created_idx
  on public.waitlist_request_log (ip_hash, created_at desc);

create index waitlist_request_log_email_created_idx
  on public.waitlist_request_log (email_hash, created_at desc)
  where email_hash is not null;

alter table public.waitlist_request_log enable row level security;

-- Atomic rate-limit check + log. Callable only via service role (edge function).
create or replace function public.check_waitlist_rate_limit(
  p_ip_hash text,
  p_email_hash text,
  p_ip_max int default 8,
  p_ip_window_seconds int default 900,
  p_email_max int default 3,
  p_email_window_seconds int default 3600
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  ip_count int;
  email_count int;
begin
  delete from public.waitlist_request_log
  where created_at < now() - interval '48 hours';

  select count(*) into ip_count
  from public.waitlist_request_log
  where ip_hash = p_ip_hash
    and created_at > now() - make_interval(secs => p_ip_window_seconds);

  if ip_count >= p_ip_max then
    return false;
  end if;

  if p_email_hash is not null then
    select count(*) into email_count
    from public.waitlist_request_log
    where email_hash = p_email_hash
      and created_at > now() - make_interval(secs => p_email_window_seconds);

    if email_count >= p_email_max then
      return false;
    end if;
  end if;

  insert into public.waitlist_request_log (ip_hash, email_hash)
  values (p_ip_hash, p_email_hash);

  return true;
end;
$$;

revoke all on function public.check_waitlist_rate_limit(text, text, int, int, int, int)
  from public, anon, authenticated;

-- Insert waitlist email; returns whether a new row was created.
create or replace function public.register_waitlist_email(
  p_email text,
  p_source text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_email text;
  new_id uuid;
begin
  normalized_email := lower(trim(p_email));

  if normalized_email = '' then
    return jsonb_build_object('ok', false, 'error', 'invalid_email');
  end if;

  insert into public.waitlist_signups (email, source)
  values (normalized_email, nullif(trim(p_source), ''))
  on conflict (email) do nothing
  returning id into new_id;

  return jsonb_build_object(
    'ok', true,
    'created', new_id is not null
  );
end;
$$;

revoke all on function public.register_waitlist_email(text, text)
  from public, anon, authenticated;
