// Proxy the ROM from GitHub releases through our domain.
// Manually follows the GitHub redirect to get the signed CDN URL,
// then streams from there — edge handles the redirect chain more reliably this way.
export const runtime = 'edge';

const GITHUB_URL =
  'https://github.com/shugavibes/portfolio-2026-ps2/releases/download/v1.0-assets/Crash.Bandicoot.USA.bin';

async function resolveDownloadUrl(): Promise<string> {
  // GitHub redirects to a signed CDN URL — fetch it manually
  const r = await fetch(GITHUB_URL, { redirect: 'manual' });
  const location = r.headers.get('location');
  if (location) return location;
  return GITHUB_URL; // fallback: no redirect
}

export async function HEAD() {
  try {
    const url = await resolveDownloadUrl();
    const r = await fetch(url, { method: 'HEAD' });
    const headers: Record<string, string> = {
      'Content-Type': 'application/octet-stream',
      'Accept-Ranges': 'bytes',
    };
    const cl = r.headers.get('Content-Length');
    if (cl) headers['Content-Length'] = cl;
    return new Response(null, { status: 200, headers });
  } catch (e: unknown) {
    return new Response(`HEAD error: ${e}`, { status: 500 });
  }
}

export async function GET() {
  try {
    const url = await resolveDownloadUrl();
    const upstream = await fetch(url);

    if (!upstream.ok) {
      return new Response(`upstream ${upstream.status} ${upstream.statusText}`, { status: 502 });
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/octet-stream',
      'Cache-Control': 'public, max-age=86400',
    };
    const cl = upstream.headers.get('Content-Length');
    if (cl) headers['Content-Length'] = cl;

    return new Response(upstream.body, { status: 200, headers });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(`GET error: ${msg}`, { status: 500 });
  }
}
