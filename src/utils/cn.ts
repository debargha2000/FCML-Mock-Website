export function cn(...inputs: (string | undefined | null | false)[]) {
  // ponytail: Simplified className merge without clsx/tailwind-merge. YAGNI.
  return inputs.filter(Boolean).join(" ");
}
