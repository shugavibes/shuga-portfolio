'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function PS2LaunchButton() {
  const [showIntro, setShowIntro] = useState(false);
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showIntro) return;

    const initPlayer = () => {
      if (!containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: 'y9Ln-qyvX_I',
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          fs: 0,
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (e: any) => {
            if (e.data === 0) router.push('/ps2'); // 0 = ended
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(script);
      }
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
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
        <div style={{ position: 'fixed', inset: 0, background: '#000008', zIndex: 9999 }}>
          <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
    </>
  );
}
