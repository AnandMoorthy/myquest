import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 320;
const MAX_SOURCE_LENGTH = 64;

type WaitlistPayload = {
  email?: unknown;
  source?: unknown;
  company?: unknown;
};

function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  if (!normalized || normalized.length > MAX_EMAIL_LENGTH) return null;
  if (!EMAIL_PATTERN.test(normalized)) return null;
  return normalized;
}

function normalizeSource(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, MAX_SOURCE_LENGTH);
  return trimmed || null;
}

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

Deno.serve(async (req) => {
  const origin = req.headers.get("Origin");

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders(origin) });
  }

  if (req.method !== "POST") {
    return jsonResponse({ ok: false, error: "method_not_allowed" }, 405, origin);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing Supabase environment variables");
    return jsonResponse({ ok: false, error: "server_error" }, 500, origin);
  }

  let payload: WaitlistPayload;

  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ ok: false, error: "invalid_json" }, 400, origin);
  }

  // Honeypot: bots fill hidden fields; return success without recording.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return jsonResponse({ ok: true }, 200, origin);
  }

  const email = normalizeEmail(payload.email);
  if (!email) {
    return jsonResponse({ ok: false, error: "invalid_email" }, 400, origin);
  }

  const source = normalizeSource(payload.source);
  const ip = getClientIp(req);
  const ipHash = await sha256(`waitlist-ip:${ip}`);
  const emailHash = await sha256(`waitlist-email:${email}`);

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: allowed, error: rateLimitError } = await supabase.rpc(
    "check_waitlist_rate_limit",
    {
      p_ip_hash: ipHash,
      p_email_hash: emailHash,
    }
  );

  if (rateLimitError) {
    console.error("Rate limit check failed:", rateLimitError.message);
    return jsonResponse({ ok: false, error: "server_error" }, 500, origin);
  }

  if (!allowed) {
    return jsonResponse({ ok: false, error: "rate_limited" }, 429, origin);
  }

  const { data: result, error: registerError } = await supabase.rpc(
    "register_waitlist_email",
    {
      p_email: email,
      p_source: source,
    }
  );

  if (registerError) {
    console.error("Waitlist registration failed:", registerError.message);
    return jsonResponse({ ok: false, error: "server_error" }, 500, origin);
  }

  const created =
    typeof result === "object" &&
    result !== null &&
    "created" in result &&
    Boolean((result as { created?: boolean }).created);

  if (created) {
    console.log("Waitlist signup created");
  } else {
    console.log("Duplicate waitlist signup ignored");
  }

  // Same response for new and duplicate signups to avoid email enumeration.
  return jsonResponse({ ok: true }, 200, origin);
});
