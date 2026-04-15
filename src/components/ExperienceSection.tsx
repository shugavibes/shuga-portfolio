'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const companyUrls: Record<string, string> = {
  'Remote': 'https://remote.com',
  'Atlas (acq. by Remote)': 'http://heyatlas.com/',
  'Lemon': 'https://lemon.me',
  'Aivo': 'https://aivo.co',
  'Digital House (ex Acamica)': 'https://www.digitalhouse.com/ar',
  'Naranja': 'https://www.naranja.com',
  'Mercado Libre & Mercado Pago': 'https://www.mercadolibre.com',
};

type Bullet = string | { text: string; url: string };
const details: Record<string, { dates: string; bullets: Bullet[]; description: string; images?: string[]; videoUrl?: string }> = {
  'Remote': {
    dates: 'Jan 2026 – present',
    bullets: [
      'Joined Remote as part of the Atlas acquisition to lead the development of the Cards product',
      'Working with Design, Engineering, and other Product teams',
      'Owning product strategy and execution end-to-end from discovery to launch',
    ],
    description:
      "Joined Remote through the Atlas acquisition. Cards is now a core product within Remote's ecosystem — owning it end-to-end at global scale.",
  },
  'Atlas (acq. by Remote)': {
    dates: 'Apr 2023 – Feb 2026',
    bullets: [
      "Led the company's transition to a product-driven organization centered around the corporate card",
      'Led cross-functional teams across Engineering, Sales, and CX for the Card product.',
      'Led the launch of the Card product in just 4 months',
      'Hands-on with product design and vibe coding throughout',
      'Atlas was acquired for its Cards product — the entire team joined Remote',
      'Previously Product Designer: built and scaled the benefits & perks marketplace',
    ],
    images: ['/images/atlas-cardsweb.png', '/images/atlas-cardsapp.png'],
    description:
      'Nearly 3 years at Atlas — from Product Designer to Head of Product. The card-led pivot led to the acquisition by Remote, with the full team and product carrying over.',
  },
  'Lemon': {
    dates: 'Feb 2022 – Nov 2022',
    bullets: [
      'I was in charge of designing the product experience and strategy that bridged the fiat and crypto worlds in Argentina.',
      'Developed the money market investment product, enabling users to invest pesos and earn bitcoin on a daily basis.',
      'Owned UX for the ARS wallet and payment flows.',
    ],
    images: ['/images/lemon-app.png'],
    description:
      'In Argentina, the stakes for financial products are real. Designing a crypto wallet when inflation is running at 70%+ is not an abstract exercise.',
  },
  'Aivo': {
    dates: 'Nov 2020 – Feb 2022',
    bullets: [
      'Led the redesign of the chatbot window, admin dashboard and new AI products',
      'Built the company Design System from scratch',
      'Scaled and structured the Design Team',
      'Explored generative AI for customer responses before it was mainstream',
      'CSAT increased by 35% in the first week after implementing the chat window redesigns',
      { text: 'See full case: Chatbot Window Redesign — High Impact at a Low Cost', url: 'https://shuga.medium.com/case-study-chatbot-window-redesign-high-impact-at-a-low-cost-5645eaf5dac7' },
    ],
    description:
      'Rebuilding the full product suite while also building the team. The generative AI exploration felt early and uncertain at the time — turns out it was just early.',
    videoUrl: 'https://www.youtube.com/watch?v=rK2ZOZEvH2o&t=31s',
  },
  'Digital House (ex Acamica)': {
    dates: 'Aug 2019 – Nov 2020',
    bullets: [
      'Led Growth initiatives in the engineering team',
      'Coordinated execution across Marketing and Learning departments',
      'Defined product and experience specs for technical careers',
      'Acámica was acquired by Digital House in 2021',
    ],
    description:
      'Growth PM at an edtech that got acquired. Learned to work at the intersection of product, engineering and business — and how acquisitions change everything overnight.',
  },
  'Naranja': {
    dates: 'Mar 2018 – Jul 2019',
    bullets: [
      'Researched Argentinian user profiles across the country, their needs, and contexts around credit card usage and financial behaviors.',
      'These insights and tests enabled us to design new card payment flows that increased online channel usage and reduced delinquency from incomplete payments.',
      'Worked on features to migrate clients from Naranja\'s offline channels to new digital payment tools, helping build an omnichannel strategy with consistent offers and experiences for customers.',
      { text: 'Naranja Credit Card: Partial Payments', url: 'https://shuga.medium.com/case-study-partial-payments-naranja-7b2b928ec854' },
    ],
    description:
      "Naranja is one of Argentina's biggest fintechs. Working on payments there meant understanding a huge range of users — many of whom had never used a digital product before.",
  },
  'Mercado Libre & Mercado Pago': {
    dates: 'Jan 2016 – Aug 2018',
    bullets: [
      'Worked on Mercado Crédito and Mercado Pago.',
      'Built solutions for financial inclusion across LatAm.',
      'First designer on the Mercado Crédito team, shaping the experience of providing access to credit for thousands of people who didn\'t have it outside the platform.',
      'Worked as a Product Designer on Merchant Credits and Consumer Credits, from MVP to scaling the product through growth strategies and continuous improvements.',
      { text: 'Mercado Crédito: from MVP to Full-Scale Product', url: 'https://shuga.medium.com/case-of-study-creating-a-better-experience-consumer-credits-mercado-libre-eb20f025e64c' },
      { text: 'Mercado Crédito: Increase conversion rates', url: 'https://shuga.medium.com/case-of-study-increase-conversion-rates-consumer-credits-mercado-libre-976d07d0ef78' },
    ],
    description:
      "MercadoLibre at scale is a different kind of design challenge. The goal wasn't beautiful interfaces — it was getting credit to people who had never had a bank account.",
    images: ['/images/ml-mpmerchant.png', '/images/ml-mpuser.png'],
  },
};

const experiences = [
  { company: 'Remote', role: 'Product Lead, Cards', period: '2026 — Present' },
  { company: 'Atlas (acq. by Remote)', role: 'Head of Product', period: '2023 — 2026' },
  { company: 'Lemon', role: 'Product Designer', period: '2022' },
  { company: 'Aivo', role: 'Product Designer', period: '2021' },
  { company: 'Digital House (ex Acamica)', role: 'Product Manager & Designer', period: '2019–2021' },
  { company: 'Naranja', role: 'Product Designer & Researcher', period: '2018–2019' },
  { company: 'Mercado Libre & Mercado Pago', role: 'Product Designer', period: '2016–2018' },
];

function DetailContent({ selected, detail, setLightbox }: { selected: string; detail: NonNullable<ReturnType<typeof getDetail>>; setLightbox: (src: string) => void }) {
  return (
    <motion.div
      key={selected}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex items-start justify-between mb-1">
        <h2 className="text-2xl text-gray-900">{selected}</h2>
        <a
          href={companyUrls[selected]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-500 transition-colors ml-4 mt-1 flex-shrink-0"
          aria-label={`Visit ${selected}`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-base mb-6">{detail.dates}</p>

      <ul className="space-y-3 mb-8">
        {detail.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-gray-600 text-base leading-relaxed">
            <span className="text-gray-300 mt-1 flex-shrink-0">—</span>
            {typeof b === 'string' ? b : (
              <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline underline-offset-2">
                {b.text}
              </a>
            )}
          </li>
        ))}
      </ul>

      <p className="text-gray-400 text-base italic leading-relaxed border-t border-gray-100 pt-6 mb-8">
        {detail.description}
      </p>

      {detail.images && (
        <div className="flex flex-col gap-4">
          {detail.images.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-gray-50 cursor-zoom-in"
              onClick={() => setLightbox(src)}
            >
              <img src={src} alt="" className="w-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {detail.videoUrl && (() => {
        const videoId = detail.videoUrl.match(/v=([^&]+)/)?.[1];
        return videoId ? (
          <a
            href={detail.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-2xl overflow-hidden group mt-4"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polygon points="9,7 19,12 9,17" fill="#111" />
                </svg>
              </div>
            </div>
          </a>
        ) : null;
      })()}
    </motion.div>
  );
}

function getDetail(selected: string | null) {
  return selected ? details[selected] : null;
}

export function ExperienceSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const toggle = (company: string) =>
    setSelected((prev) => (prev === company ? null : company));

  const detail = getDetail(selected);

  return (
    <>
    <AnimatePresence>
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out p-8"
        >
          <motion.img
            src={lightbox}
            alt=""
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>

    {/* Mobile layout */}
    {isMobile && (
      <div className="w-full">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-b border-gray-100"
            >
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => toggle(exp.company)}
                  className={`w-full text-left group block py-6 px-6 ${index === 0 ? 'border-t border-gray-100' : ''} transition-all hover:bg-blue-50 hover:rounded-3xl`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl mb-1 group-hover:text-gray-900">{exp.company}</h3>
                      <p className="text-lg text-gray-500 group-hover:text-gray-600">{exp.role}</p>
                    </div>
                    <span className="text-gray-400 text-base ml-4 flex-shrink-0">{exp.period}</span>
                  </div>
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.25 }}
              className="px-6 pt-4 pb-24"
            >
              <button
                onClick={() => setSelected(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-gray-600 mb-6 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <span className="text-base">Experience</span>
              </button>
              {detail && (
                <AnimatePresence mode="wait">
                  <DetailContent key={selected} selected={selected} detail={detail} setLightbox={setLightbox} />
                </AnimatePresence>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )}

    {/* Desktop layout */}
    {!isMobile && (
    <div
      className="max-w-2xl mx-auto"
      style={{
        maxWidth: selected ? '64rem' : undefined,
        transition: 'max-width 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div className="flex gap-12 items-start">
        {/* Left: experience list */}
        <div className="flex-shrink-0 border-b border-gray-100 mb-24" style={{ width: selected ? '42%' : '100%', transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
          {experiences.map((exp, index) => {
            const isSelected = selected === exp.company;
            return (
              <button
                key={exp.company}
                onClick={() => toggle(exp.company)}
                className={`w-full text-left group block py-8 ${index === 0 ? 'border-t border-gray-100' : ''} transition-all px-8 ${
                  isSelected
                    ? 'bg-blue-50 rounded-3xl'
                    : 'hover:bg-blue-50 hover:rounded-3xl'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-xl mb-1 ${isSelected ? 'text-gray-900' : 'group-hover:text-gray-900'}`}>
                      {exp.company}
                    </h3>
                    <p className={`text-lg ${isSelected ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'}`}>
                      {exp.role}
                    </p>
                    {!selected && exp.company === 'Atlas (acq. by Remote)' && (
                      <p className="text-gray-400 text-base italic">Previously: Product Designer & Manager</p>
                    )}
                    {!selected && exp.company === 'Remote' && (
                      <p className="text-gray-400 text-base italic">Joined via Atlas acquisition</p>
                    )}
                  </div>
                  {!selected && <span className="text-gray-400 text-base">{exp.period}</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: detail panel — no key, stays mounted; only content fades on switch */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex-1 pt-8 pr-8 pb-24 min-w-0"
            >
              <AnimatePresence mode="wait">
                {detail && (
                  <DetailContent key={selected} selected={selected} detail={detail} setLightbox={setLightbox} />
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    )}
    </>
  );
}
