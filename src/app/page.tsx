import React from 'react';
import Image from 'next/image';
import { PS2LaunchButton } from '@/components/PS2LaunchButton';
import { ExperienceSection } from '@/components/ExperienceSection';

const PortfolioItem = ({
  title,
  href,
  imageUrl,
  isFirst
}: {
  title: string;
  href?: string;
  imageUrl: string;
  isFirst?: boolean;
}) => {
  const Content = () => (
    <div className={`group ${isFirst ? 'flex flex-col gap-6' : 'flex items-center gap-6'} p-8 border border-gray-200 rounded-lg hover:border-blue-100 hover:shadow-sm transition-all mb-4`}>
      <div className={`${isFirst ? 'w-full h-64' : 'w-12 h-12'} relative rounded-lg overflow-hidden flex-shrink-0 bg-gray-100`}>
        <Image
          src={imageUrl}
          alt=""
          fill
          className={`object-cover ${isFirst ? 'object-center' : ''}`}
        />
      </div>
      <h3 className={`${isFirst ? 'text-xl' : 'text-l'} text-gray-500 group-hover:text-gray-900 flex-1`}>{title}</h3>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Content />
      </a>
    );
  }

  return <Content />;
};

export default function Home() {

  const portfolioItems = [
    {
      title: "Speaker at AI Day at Aleph",
      href: "https://x.com/shuga_vibes/status/2034720873278492890",
      imageUrl: "/images/aleph.jpg"
    },
    {
      title: "Built an AI assistant template for Product Managers that runs on autopilot — open-sourced for anyone to install and customize",
      href: "https://x.com/shuga_vibes/status/2038741088110887201",
      imageUrl: "/images/agent-dashboard.png"
    },
    {
      title: "At Atlas, we hosted a keynote to introduce our new product, the Atlas Card, and I shared how the Atlas product ecosystem works.",
      href: "https://www.youtube.com/watch?v=Nz91We6koEQ",
      imageUrl: "/images/keynote.png"
    },
    {
      title: "Featured in 'The Book Of Design' by The Network & Framer, which highlighted profiles and works of 100 designers from Argentina.",
      href: "https://www.linkedin.com/posts/alvarezquiros_ayer-fue-el-lanzamiento-de-the-book-of-design-activity-7138276509231878146-Ijvu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAeE3s0BJCA-k7VHUf1MDR3ic2_YYrTOntg",
      imageUrl: "/images/book.jpg"
    },
    {
      title: "Part of the initial team and first designer of Mercado Crédito at Mercado Libre",
      href: "https://www.mercadopago.com.ar/creditos/comprar-cuotas-sin-tarjeta",
      imageUrl: "/images/mc.png"
    },
    {
      title: "Part of the Founding team behind GAID at the ShipBA hackathon",
      href: "https://www.linkedin.com/posts/alvarezquiros_gaid-encuentra-tu-experiencia-perfecta-activity-7304954848699990016-rEY4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAeE3s0BJCA-k7VHUf1MDR3ic2_YYrTOntg",
      imageUrl: "/images/gaid.jpg"
    },
    {
      title: "Featured appearance on the Olga streaming channel as Cupid on Valentine's Day",
      href: "https://www.youtube.com/watch?v=DSeO9Bgu3OQ&t=2398s",
      imageUrl: "/images/olga.jpg"
    },
    {
      title: "Featured as a Top Writer in Leadership by Medium",
      href: "https://www.linkedin.com/posts/alvarezquiros_estoy-muy-feliz-de-que-después-de-publicar-activity-6692088301165281280-fc1o/",
      imageUrl: "/images/medium.png"
    },
    {
      title: "Interviewed by La Voz del Interior as a leading voice in UX Design in Argentina",
      href: "https://www.lavoz.com.ar/espacio-de-marca/disenar-experiencias-una-habilidad-cada-vez-mas-valorada/?utm_source=twitter&utm_medium=article&utm_campaign=social-network",
      imageUrl: "/images/lavoz.png"
    },
    {
      title: "Part of the founding team of TEDxUniversidadCatolica in Córdoba",
      href: "https://www.ted.com/tedx/events/16368",
      imageUrl: "/images/tedx.png"
    },
    {
      title: "10 years as a volunteer at the Argentine Youth Organization for the United Nations",
      href: "https://oajnu.org",
      imageUrl: "/images/oajnu.jpg"
    },
    {
      title: "Second place at Startup Weekend Córdoba",
      href: "https://www.cadena3.com/noticia/tecnologia/mas-inclusion-gano-el-startup-weekend-cordoba_154535",
      imageUrl: "/images/sw.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 py-12">
      <div className="max-w-2xl mx-auto px-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/pixel-avatar.jpeg"
                  alt="Pixel art avatar"
                  width={64}
                  height={64}
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-5xl">Shuga</h1>
            </div>
            
            <div className="flex space-x-4 items-center">
              <a 
                href="https://x.com/shuga_vibes" 
                className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors" 
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/alvarezquiros/" 
                className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors" 
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com/shuga.vibes"
                className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://github.com/shugavibes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Intro text */}
        <div className="mb-12">
          <p className="text-2xl text-gray-900">Product leader from Argentina.</p>
          <p className="text-2xl text-gray-400">10 years building technology products for humans. Now also for agents.</p>
        </div>
      </div>

      {/* Experience — breaks out of max-w-2xl to expand on selection */}
      <ExperienceSection />

      <div className="max-w-2xl mx-auto px-8">
        {/* Portfolio Categories */}
        <section className="mb-24">
          <h2 className="text-3xl mb-6">Random cool things</h2>
          <div className="space-y-4">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                title={item.title}
                href={item.href}
                imageUrl={item.imageUrl}
                isFirst={index === 0 || index === 1 || index === 2}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8">
          <p className="text-gray-500 mb-4">Hey, let's get in touch and grab a coffee</p>
          <div className="flex space-x-4 items-center">
            <a 
              href="https://x.com/shuga_vibes" 
              className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors" 
              aria-label="X (Twitter)"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/alvarezquiros/" 
              className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors" 
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://instagram.com/shuga.vibes"
              className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://github.com/shugavibes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 bg-gray-50 p-2 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      {/* Floating PS2 portfolio button */}
      <PS2LaunchButton />
    </main>
  );
} 