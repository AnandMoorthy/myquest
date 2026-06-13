export type WaitlistError =
  | "invalid_email"
  | "rate_limited"
  | "server_error"
  | "network_error"
  | "not_configured";

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: WaitlistError };

const WAITLIST_FUNCTION = "waitlist-signup";

export function getWaitlistErrorMessage(error: WaitlistError): string {
  switch (error) {
    case "invalid_email":
      return "Please enter a valid email address.";
    case "rate_limited":
      return "Too many attempts. Please wait a few minutes and try again.";
    case "not_configured":
      return "Waitlist signup is not configured yet. Please try again later.";
    case "network_error":
    case "server_error":
    default:
      return "Something went wrong. Please try again.";
  }
}

export async function joinWaitlist(
  email: string,
  source = "landing_modal"
): Promise<WaitlistResult> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return { ok: false, error: "not_configured" };
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/${WAITLIST_FUNCTION}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${anonKey}`,
          apikey: anonKey,
        },
        body: JSON.stringify({
          email,
          source,
          company: "",
        }),
      }
    );

    let payload: { ok?: boolean; error?: string } | null = null;

    try {
      payload = await response.json();
    } catch {
      payload = null;
    }

    if (response.status === 429) {
      return { ok: false, error: "rate_limited" };
    }

    if (!response.ok) {
      if (payload?.error === "invalid_email") {
        return { ok: false, error: "invalid_email" };
      }
      return { ok: false, error: "server_error" };
    }

    if (!payload?.ok) {
      return { ok: false, error: "server_error" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "network_error" };
  }
}
