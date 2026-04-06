// Proxy the ROM from GitHub releases through our domain.
// Browser can't fetch it directly (CORS), but server-side fetch has no CORS restrictions.
// Must use nodejs runtime — edge has a ~4 MB body limit, the ROM is ~500 MB.
export const runtime = 'nodejs';
export const maxDuration = 60;

export async function GET() {
  const upstream = await fetch(
    'https://github.com/shugavibes/portfolio-2026-ps2/releases/download/v1.0-assets/Crash.Bandicoot.USA.bin',
    { redirect: 'follow' },
  );

  if (!upstream.ok) {
    return new Response(`ROM fetch failed: ${upstream.status}`, { status: 502 });
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/octet-stream',
    'Cache-Control': 'public, max-age=86400',
  };
  const contentLength = upstream.headers.get('Content-Length');
  if (contentLength) headers['Content-Length'] = contentLength;

  return new Response(upstream.body, { status: 200, headers });
}
