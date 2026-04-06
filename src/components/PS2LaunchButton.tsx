'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function PS2LaunchButton() {
  const [showIntro, setShowIntro] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!showIntro) return;

    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'string') return;
      try {
        const data = JSON.parse(e.data);
        if (data.event === 'infoDelivery' && data.info?.playerState === 0) {
          router.push('/ps2');
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [showIntro, router]);

  return (
    <>
      <button
        onClick={() => setShowIntro(true)}
        className="ps2-fab"
        title="PS2 Portfolio"
        aria-label="Open PS2 Portfolio"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/crash-icon.png"
          alt="PS2 Portfolio"
          style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'pixelated' }}
        />
      </button>

      {showIntro && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000008',
            zIndex: 9999,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/y9Ln-qyvX_I?autoplay=1&controls=0&enablejsapi=1&rel=0&modestbranding=1"
            allow="autoplay; fullscreen"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            title="PS2 Startup"
          />
        </div>
      )}
    </>
  );
}
