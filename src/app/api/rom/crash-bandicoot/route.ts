// Proxy the ROM from GitHub releases through our domain.
// Browser can't fetch it directly (CORS), but server-side fetch has no CORS restrictions.
// Edge runtime has a 30s timeout vs nodejs hobby's 10s — better for large file proxying.
export const runtime = 'edge';

export async function GET() {
  let upstream: Response;
  try {
    upstream = await fetch(
      'https://github.com/shugavibes/portfolio-2026-ps2/releases/download/v1.0-assets/Crash.Bandicoot.USA.bin',
      { redirect: 'follow' },
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(`fetch threw: ${msg}`, { status: 500 });
  }

  if (!upstream.ok) {
    return new Response(`ROM fetch failed: ${upstream.status} ${upstream.statusText}`, { status: 502 });
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/octet-stream',
    'Cache-Control': 'public, max-age=86400',
  };
  const contentLength = upstream.headers.get('Content-Length');
  if (contentLength) headers['Content-Length'] = contentLength;

  return new Response(upstream.body, { status: 200, headers });
}
