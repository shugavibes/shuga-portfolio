import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { AudioProvider } from '@/providers/AudioProvider';
import './ps2.css';

export const metadata: Metadata = {
  title: 'Shuga — PS2 Portfolio',
  description: 'Personal portfolio of Shuga. PS2 system menu aesthetic.',
};

export default function PS2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={GeistMono.variable}
      style={{
        fontFamily: GeistMono.style.fontFamily,
        height: '100dvh',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#000008',
        color: '#dce8f8',
      }}
    >
      <AudioProvider>{children}</AudioProvider>
    </div>
  );
}
