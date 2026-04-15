'use client';

import { useEffect, useRef } from 'react';

// 0 = transparent, 1 = black outline, 2 = white fill
const CURSOR: number[][] = [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 2, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 2, 2, 1],
  [1, 2, 2, 1, 0, 1, 2, 2, 1],
  [1, 2, 1, 0, 0, 0, 1, 2, 2, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 2, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

const PX = 2; // pixel size in screen pixels

export function PixelCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    x: -200,
    y: -200,
    trail: [] as { x: number; y: number; a: number }[],
  });
  const rafRef = useRef(0);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      stateRef.current.x = e.clientX;
      stateRef.current.y = e.clientY;
      stateRef.current.trail.push({ x: e.clientX, y: e.clientY, a: 1 });
    };
    window.addEventListener('mousemove', onMove);
    document.documentElement.style.cursor = 'none';

    const drawCursor = (x: number, y: number) => {
      for (let row = 0; row < CURSOR.length; row++) {
        for (let col = 0; col < CURSOR[row].length; col++) {
          const v = CURSOR[row][col];
          if (!v) continue;
          ctx.fillStyle = v === 1 ? '#111' : '#fff';
          ctx.fillRect(Math.round(x + col * PX), Math.round(y + row * PX), PX, PX);
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const s = stateRef.current;

      // Decay trail
      s.trail = s.trail.map(p => ({ ...p, a: p.a - 0.07 })).filter(p => p.a > 0);

      // Draw trail dots as snapped 2px squares for a pixelated feel
      for (const p of s.trail) {
        const size = Math.round(p.a * 3) * 2;
        if (size < 2) continue;
        ctx.fillStyle = `rgba(99,102,241,${(p.a * 0.55).toFixed(2)})`;
        ctx.fillRect(
          Math.round((p.x - size / 2) / 2) * 2,
          Math.round((p.y - size / 2) / 2) * 2,
          size,
          size
        );
      }

      drawCursor(s.x, s.y);
      rafRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
