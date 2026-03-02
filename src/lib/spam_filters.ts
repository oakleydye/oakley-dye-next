const SPAM_KEYWORDS = [
  "casino", "viagra", "cialis", "crypto", "bitcoin", "nft", "seo service",
  "buy followers", "make money fast", "work from home", "click here", "limited offer",
];

export function isSpam(name: string, email: string, message: string): boolean {
  const combined = `${name} ${email} ${message}`.toLowerCase();

  // Too many URLs
  const urlCount = (combined.match(/https?:\/\//gi) ?? []).length;
  if (urlCount > 3) return true;

  // Spam keyword match
  if (SPAM_KEYWORDS.some((kw) => combined.includes(kw))) return true;

  // Excessive repetition (same char repeated 10+ times)
  if (/(.)\1{9,}/.test(message)) return true;

  return false;
}