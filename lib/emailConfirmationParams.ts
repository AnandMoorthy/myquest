export type EmailConfirmationParams = {
  error?: string;
  errorCode?: string;
  errorDescription?: string;
};

const ERROR_MESSAGES: Record<string, string> = {
  otp_expired:
    "This confirmation link has expired. Open the MyQuest app and request a new confirmation email.",
  otp_disabled:
    "Email confirmation is not available for this link. Try signing in from the app or request a new confirmation email.",
  access_denied:
    "We could not confirm your email. The link may be invalid or already used.",
};

function mergeParams(search?: string, hash?: string): URLSearchParams {
  const merged = new URLSearchParams();

  for (const raw of [search, hash]) {
    if (!raw) continue;
    const normalized = raw.replace(/^[#?]/, "");
    if (!normalized) continue;

    const params = new URLSearchParams(normalized);
    params.forEach((value, key) => merged.set(key, value));
  }

  return merged;
}

export function parseEmailConfirmationParams(
  search?: string,
  hash?: string
): EmailConfirmationParams {
  const params = mergeParams(search, hash);

  return {
    error: params.get("error") ?? undefined,
    errorCode: params.get("error_code") ?? undefined,
    errorDescription: params.get("error_description") ?? undefined,
  };
}

export function hasEmailConfirmationError(
  params: EmailConfirmationParams
): boolean {
  return Boolean(params.error || params.errorCode);
}

export function getEmailConfirmationErrorMessage(
  params: EmailConfirmationParams
): string {
  if (params.errorCode && ERROR_MESSAGES[params.errorCode]) {
    return ERROR_MESSAGES[params.errorCode];
  }

  if (params.errorDescription) {
    return decodeURIComponent(params.errorDescription.replace(/\+/g, " "));
  }

  if (params.error) {
    return ERROR_MESSAGES[params.error] ?? "Something went wrong confirming your email.";
  }

  return "Something went wrong confirming your email.";
}

export function getEmailConfirmationParamsFromWindow(): EmailConfirmationParams {
  if (typeof window === "undefined") return {};
  return parseEmailConfirmationParams(
    window.location.search,
    window.location.hash
  );
}
