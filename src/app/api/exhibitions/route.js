// Same-origin fallback for deployments that configure the backend at runtime.
export async function GET() {
  const base = (process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/, "");
  if (!base) {
    return Response.json({ error: "Exhibitions service is not configured." }, { status: 503 });
  }

  try {
    const response = await fetch(`${base}/exhibitions`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      return Response.json({ error: "Unable to load exhibitions." }, { status: 502 });
    }
    const exhibitions = await response.json();
    if (!Array.isArray(exhibitions)) {
      return Response.json({ error: "Invalid exhibitions response." }, { status: 502 });
    }
    return Response.json(exhibitions);
  } catch {
    return Response.json({ error: "Exhibitions service is unavailable." }, { status: 502 });
  }
}
