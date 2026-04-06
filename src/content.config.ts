import type { SiteContent } from '@/types';

export const content: SiteContent = {
  identity: {
    name: 'Shuga',
    label: 'Product Leader & Builder',
  },

  work: [
    {
      id: 'remote',
      label: 'Remote · 2026–present',
      company: 'Remote',
      abbreviation: 'RMT',
      logo: '/logos/remote_logo.png',
      color: '#4f46e5',
      role: 'Product Lead, Cards',
      dates: 'Jan 2026 – present',
      bullets: [
        'Joined Remote as part of the Atlas acquisition to lead the development of the Cards product',
        'Working with Design, Engineering, and other Product teams',
        'Owning product strategy and execution end-to-end from discovery to launch',
      ],
      backContent:
        "Joined Remote through the Atlas acquisition. Cards is now a core product within Remote's ecosystem — owning it end-to-end at global scale.",
    },
    {
      id: 'atlas',
      label: 'Atlas · 2023–2026',
      company: 'Atlas (acq. by Remote)',
      abbreviation: 'ATL',
      logo: '/logos/atlas_logo.png',
      color: '#1e3a8a',
      role: 'Head of Product',
      dates: 'Apr 2023 – Feb 2026',
      bullets: [
        "Led the company's transition to a product-driven organization and a new business model centered around the corporate card",
        'Led cross-functional teams across Engineering, Sales, and CX',
        'Hands-on with product design and vibe coding throughout',
        'Atlas was acquired for its Cards product — the entire team joined Remote to integrate it as a core product',
        'Previously Product Designer: built and scaled the benefits & perks marketplace, taking on PM responsibilities alongside design',
      ],
      backContent:
        "Nearly 3 years at Atlas — from Product Designer to Head of Product. The card-led pivot led to the acquisition by Remote, with the full team and product carrying over.",
    },
    {
      id: 'lemon',
      label: 'Lemon Cash · 2022',
      company: 'Lemon Cash',
      abbreviation: 'LMN',
      logo: '/logos/lemon_logo.png',
      color: '#b45309',
      role: 'Senior Product Designer',
      dates: 'Feb 2022 – Nov 2022',
      bullets: [
        'Designed FIAT/Crypto bridging experiences for the Argentine market',
        'Owned UX for the ARS wallet and payment flows',
        'Contributed to new investment product development',
      ],
      backContent:
        "In Argentina, the stakes for financial products are real. Designing a crypto wallet when inflation is running at 70%+ is not an abstract exercise.",
    },
    {
      id: 'aivo',
      label: 'Aivo · 2020–2022',
      company: 'Aivo',
      abbreviation: 'AIV',
      logo: '/logos/aivo_logo.png',
      color: '#6d28d9',
      role: 'Senior Product Designer',
      dates: 'Nov 2020 – Feb 2022',
      bullets: [
        'Led the redesign of the chatbot window, admin dashboard and new AI products',
        'Built the company Design System from scratch',
        'Scaled and structured the Design Team',
        'Explored generative AI for customer responses before it was mainstream',
      ],
      backContent:
        "Rebuilding the full product suite while also building the team. The generative AI exploration felt early and uncertain at the time — turns out it was just early.",
    },
    {
      id: 'acamica',
      label: 'Acámica · 2019–2020',
      company: 'Acámica',
      abbreviation: 'ACA',
      logo: '/logos/acamica_logo.png',
      color: '#0f766e',
      role: 'Product Manager & UX Designer',
      dates: 'Aug 2019 – Nov 2020',
      bullets: [
        'Led Growth initiatives in the engineering team',
        'Coordinated execution across Marketing and Learning departments',
        'Defined product and experience specs for technical careers',
        'Acámica was acquired by Digital House in 2021',
      ],
      backContent:
        "Growth PM at an edtech that got acquired. Learned to work at the intersection of product, engineering and business — and how acquisitions change everything overnight.",
    },
    {
      id: 'naranja',
      label: 'Naranja · 2018–2019',
      company: 'Naranja',
      abbreviation: 'NAR',
      logo: '/logos/naranja_logo.png',
      color: '#c2410c',
      role: 'Senior Product Designer',
      dates: 'Mar 2018 – Jul 2019',
      bullets: [
        'Product Designer for the Payments unit',
        'Researched Argentine user profiles and their payment contexts',
        'Contributed to an omnichannel digital payments strategy',
      ],
      backContent:
        "Naranja is one of Argentina's biggest fintechs. Working on payments there meant understanding a huge range of users — many of whom had never used a digital product before.",
    },
    {
      id: 'mercadolibre',
      label: 'MercadoLibre · 2016–2018',
      company: 'MercadoLibre',
      abbreviation: 'MLC',
      logo: '/logos/mercadlibre_logo.png',
      color: '#d97706',
      role: 'User Experience Designer',
      dates: 'Jan 2016 – Aug 2018',
      bullets: [
        'Worked on Mercado Crédito and Mercado Pago',
        'Built solutions for financial inclusion across LatAm',
        'Designed credit access for users outside the banking system',
      ],
      backContent:
        "MercadoLibre at scale is a different kind of design challenge. The goal wasn't beautiful interfaces — it was getting credit to people who had never had a bank account.",
    },
  ],

  ideas: [
    {
      id: 'placeholder-1',
      title: 'Coming soon',
      description: 'Writing in progress',
      url: 'https://linkedin.com/in/alvarezquiros',
    },
  ],

  misc: [
    {
      id: 'aleph',
      text: 'Speaker at AI Day at Aleph',
      icon: '★',
      url: 'https://x.com/shuga_vibes/status/2034720873278492890',
    },
    {
      id: 'agent-template',
      text: 'Built an AI assistant template for Product Managers that runs on autopilot — open-sourced for anyone to install and customize',
      icon: '★',
      url: 'https://x.com/shuga_vibes/status/2038741088110887201',
    },
    {
      id: 'atlas-keynote',
      text: 'At Atlas, we hosted a keynote to introduce our new product, the Atlas Card, and I shared how the Atlas product ecosystem works.',
      icon: '♦',
      url: 'https://www.youtube.com/watch?v=Nz91We6koEQ',
    },
    {
      id: 'book-of-design',
      text: "Featured in 'The Book Of Design' by The Network & Framer, which highlighted profiles and works of 100 designers from Argentina.",
      icon: '♦',
      url: 'https://www.linkedin.com/posts/alvarezquiros_ayer-fue-el-lanzamiento-de-the-book-of-design-activity-7138276509231878146-Ijvu',
    },
    {
      id: 'mercado-credito',
      text: 'Part of the initial team and first designer of Mercado Crédito at Mercado Libre',
      icon: '★',
      url: 'https://www.mercadopago.com.ar/creditos/comprar-cuotas-sin-tarjeta',
    },
    {
      id: 'gaid',
      text: 'Part of the Founding team behind GAID at the ShipBA hackathon',
      icon: '♦',
      url: 'https://www.linkedin.com/posts/alvarezquiros_gaid-encuentra-tu-experiencia-perfecta-activity-7304954848699990016-rEY4',
    },
    {
      id: 'olga',
      text: 'Featured appearance on the Olga streaming channel as Cupid on Valentine\'s Day',
      icon: '●',
      url: 'https://www.youtube.com/watch?v=DSeO9Bgu3OQ&t=2398s',
    },
    {
      id: 'medium',
      text: 'Featured as a Top Writer in Leadership by Medium',
      icon: '♦',
      url: 'https://www.linkedin.com/posts/alvarezquiros_estoy-muy-feliz-de-que-después-de-publicar-activity-6692088301165281280-fc1o/',
    },
    {
      id: 'lavoz',
      text: 'Interviewed by La Voz del Interior as a leading voice in UX Design in Argentina',
      icon: '♦',
      url: 'https://www.lavoz.com.ar/espacio-de-marca/disenar-experiencias-una-habilidad-cada-vez-mas-valorada/',
    },
    {
      id: 'tedx',
      text: 'Part of the founding team of TEDxUniversidadCatolica in Córdoba',
      icon: '●',
      url: 'https://www.ted.com/tedx/events/16368',
    },
    {
      id: 'oajnu',
      text: '10 years as a volunteer at the Argentine Youth Organization for the United Nations',
      icon: '●',
      url: 'https://oajnu.org',
    },
    {
      id: 'startup-weekend',
      text: 'Second place at Startup Weekend Córdoba',
      icon: '●',
      url: 'https://www.cadena3.com/noticia/tecnologia/mas-inclusion-gano-el-startup-weekend-cordoba_154535',
    },
  ],

  connect: [
    { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/alvarezquiros' },
    { id: 'x', label: 'X / Twitter', url: 'https://x.com/shuga_vibes' },
    { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/shuga.vibes' },
    { id: 'github', label: 'GitHub', url: 'https://github.com/shugavibes' },
  ],
};
