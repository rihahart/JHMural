// Resolves an API path to either the shared FastAPI backend or the built-in
// Next.js /api/* routes.
//
// When NEXT_PUBLIC_API_BASE_URL is set (e.g. http://localhost:8000), requests
// go straight to the backend at `${base}${path}` — backend routes have no
// `/api` prefix. When it is unset, requests fall back to the same-origin
// Next.js route at `/api${path}`.
const BASE = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");

export function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return BASE ? `${BASE}${normalized}` : `/api${normalized}`;
}
