/** Prefix `/public` paths for GitHub Pages basePath. */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/") || path.startsWith("//") || /^(https?:)/.test(path)) {
    return path;
  }
  return `${base}${path}`;
}
