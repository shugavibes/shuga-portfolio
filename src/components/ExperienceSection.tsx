'use client';

import { useState } from 'react';
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

const details: Record<string, { dates: string; bullets: string[]; description: string }> = {
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
      'Led cross-functional teams across Engineering, Sales, and CX',
      'Hands-on with product design and vibe coding throughout',
      'Atlas was acquired for its Cards product — the entire team joined Remote',
      'Previously Product Designer: built and scaled the benefits & perks marketplace',
    ],
    description:
      'Nearly 3 years at Atlas — from Product Designer to Head of Product. The card-led pivot led to the acquisition by Remote, with the full team and product carrying over.',
  },
  'Lemon': {
    dates: 'Feb 2022 – Nov 2022',
    bullets: [
      'Designed FIAT/Crypto bridging experiences for the Argentine market',
      'Owned UX for the ARS wallet and payment flows',
      'Contributed to new investment product development',
    ],
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
    ],
    description:
      'Rebuilding the full product suite while also building the team. The generative AI exploration felt early and uncertain at the time — turns out it was just early.',
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
      'Product Designer for the Payments unit',
      'Researched Argentine user profiles and their payment contexts',
      'Contributed to an omnichannel digital payments strategy',
    ],
    description:
      "Naranja is one of Argentina's biggest fintechs. Working on payments there meant understanding a huge range of users — many of whom had never used a digital product before.",
  },
  'Mercado Libre & Mercado Pago': {
    dates: 'Jan 2016 – Aug 2018',
    bullets: [
      'Worked on Mercado Crédito and Mercado Pago',
      'Built solutions for financial inclusion across LatAm',
      'Designed credit access for users outside the banking system',
    ],
    description:
      "MercadoLibre at scale is a different kind of design challenge. The goal wasn't beautiful interfaces — it was getting credit to people who had never had a bank account.",
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

export function ExperienceSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = (company: string) =>
    setSelected((prev) => (prev === company ? null : company));

  const detail = selected ? details[selected] : null;

  return (
    <div
      className="mx-auto px-8"
      style={{
        maxWidth: selected ? '64rem' : '42rem',
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
                className={`w-full text-left group block py-8 ${index === 0 ? 'border-t border-gray-100' : ''} transition-all -mx-8 px-8 ${
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
                    {exp.company === 'Atlas (acq. by Remote)' && (
                      <p className="text-gray-400 text-base italic">Previously: Product Designer & Manager</p>
                    )}
                    {exp.company === 'Remote' && (
                      <p className="text-gray-400 text-base italic">Joined via Atlas acquisition</p>
                    )}
                  </div>
                  <span className="text-gray-400 text-base">{exp.period}</span>
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
              className="flex-1 pt-8 min-w-0"
            >
              <AnimatePresence mode="wait">
                {detail && (
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
                          {b}
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-400 text-base italic leading-relaxed border-t border-gray-100 pt-6">
                      {detail.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
