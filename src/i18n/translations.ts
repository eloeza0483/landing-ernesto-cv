export type Lang = 'es' | 'en'

export interface StackGroup {
  label: string
  items: { name: string; icon?: string }[]
}

export interface Project {
  metaTop: string
  metaBottom: string
  title: string
  description: string
  icons: string[]
  accentMeta?: boolean
  repoUrl?: string
}

export interface AICard {
  icon: string
  title: string
  description: string
}

export interface Content {
  nav: { stack: string; projects: string; ai: string; contact: string }
  role: string
  hero: {
    titleLead: string
    titleAccent: string
    titleTail: string
    body: string
    ctaPrimary: string
    ctaSecondary: string
  }
  info: {
    location: { label: string; value: string }
    languages: { label: string; value: string }
    workSetup: { label: string; value: string }
    impact: { label: string; value: string }
    status: { label: string; value: string }
  }
  stackTitle: string
  stack: StackGroup[]
  projectsTitle: string
  projectsRepoLabel: string
  projects: Project[]
  ai: {
    kickerLine1: string
    kickerLine2: string
    statement: string
    cards: AICard[]
  }
  contactTitle: string
  location: string
}

export const content: Record<Lang, Content> = {
  es: {
    nav: { stack: 'Stack', projects: 'Proyectos', ai: 'IA', contact: 'Contacto' },
    role: 'Desarrollador Full Stack',
    hero: {
      titleLead: 'Hola, soy Ernesto y me encanta ',
      titleAccent: 'crear software',
      titleTail: ' de principio a fin.',
      body:
        'Disfruto igual armar un backend sólido que cuidar cada detalle de una interfaz. Lo que más me ' +
        'gusta es sentarme a entender cómo trabaja un negocio y convertirlo en un sistema que de verdad ' +
        'le ahorre tiempo. Si un proyecto pide un stack que no conozco, lo aprendo; me gusta estar al día con ' +
        'lo nuevo. Busco un equipo donde pueda aportar eso y seguir creciendo. Abajo está lo que he hecho.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Descargar CV',
    },
    info: {
      location: { label: 'Ubicación', value: 'Mérida, Yucatán, MX' },
      languages: { label: 'Idiomas', value: 'Español nativo · Inglés B1–B2' },
      workSetup: { label: 'Modalidad', value: 'Remoto · Híbrido' },
      impact: { label: 'Impacto', value: '150+ usuarios simultáneos' },
      status: { label: 'Estado', value: 'Disponible' },
    },
    stackTitle: 'Stack técnico',
    stack: [
      {
        label: 'Frontend',
        items: [
          { name: 'React', icon: 'react' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'JavaScript', icon: 'javascript' },
          { name: 'Tailwind CSS', icon: 'tailwindcss' },
          { name: 'HTML5', icon: 'html5' },
          { name: 'CSS3', icon: 'css' },
        ],
      },
      {
        label: 'Backend & APIs',
        items: [
          { name: 'Node.js', icon: 'nodedotjs' },
          { name: 'NestJS', icon: 'nestjs' },
          { name: 'Laravel', icon: 'laravel' },
          { name: 'PHP', icon: 'php' },
          { name: 'Socket.io', icon: 'socketdotio' },
          { name: 'REST APIs' },
        ],
      },
      {
        label: 'Bases de datos',
        items: [
          { name: 'PostgreSQL', icon: 'postgresql' },
          { name: 'MySQL', icon: 'mysql' },
          { name: 'Firebird (legacy)' },
        ],
      },
      {
        label: 'Infra & CI/CD',
        items: [
          { name: 'Docker', icon: 'docker' },
          { name: 'Nginx', icon: 'nginx' },
          { name: 'Rocky Linux', icon: 'linux' },
          { name: 'GitHub Actions', icon: 'githubactions' },
          { name: 'Git', icon: 'git' },
          { name: 'Vercel', icon: 'vercel' },
          { name: 'Railway', icon: 'railway' },
        ],
      },
      {
        label: 'Pruebas',
        items: [
          { name: 'Jest', icon: 'jest' },
          { name: 'Vitest', icon: 'vitest' },
          { name: 'PHPUnit' },
        ],
      },
      {
        label: 'Móvil',
        items: [
          { name: 'React Native', icon: 'react' },
          { name: 'Expo', icon: 'expo' },
        ],
      },
    ],
    projectsTitle: 'Proyectos',
    projectsRepoLabel: 'Ver código en GitHub',
    projects: [
      {
        metaTop: '+150 usuarios activos',
        metaBottom: 'Grupo GM · 2024',
        accentMeta: true,
        title: 'Sistema Integral de Siniestros',
        description:
          'Centraliza la operación de 2 talleres y 1 refaccionaria: presupuestos, vales, entradas y albaranes. ' +
          'Incluye consultas en tiempo real contra una base Firebird heredada para precios de refacciones, ' +
          'con la lógica de negocio unificada y control de acceso por roles.',
        icons: ['laravel', 'react', 'mysql', 'docker'],
        repoUrl: 'https://github.com/eloeza0483/Gestion-Siniestros',
      },
      {
        metaTop: 'En producción',
        metaBottom: 'Railway · 2025',
        accentMeta: true,
        title: 'Agente de IA para pedidos y cotizaciones',
        description:
          'Agente conversacional que automatiza cotizaciones y pedidos de una distribuidora real por Telegram. ' +
          'Arquitectura híbrida — backend determinista más agente de IA — para evitar respuestas inventadas, ' +
          'con generación de comprobantes en PDF.',
        icons: ['googlegemini', 'n8n', 'postgresql', 'railway'],
      },
      {
        metaTop: '2 puntos de venta',
        metaBottom: '2025',
        title: 'Distribuidora García — POS e inventario',
        description:
          'Sistema de mostrador con ventas, inventario en tiempo real, categorías y clientes. CI/CD en ' +
          'GitHub Actions para automatizar el despliegue y un flujo n8n que emite las notas de remisión en PDF.',
        icons: ['react', 'nodedotjs', 'postgresql', 'githubactions'],
        repoUrl: 'https://github.com/eloeza0483/pos-distribuidora-garcia',
      },
      {
        metaTop: 'App móvil',
        metaBottom: '2025',
        title: 'Gym Progression Tracker',
        description:
          'App offline-first para que los entrenadores asignen rutinas y los alumnos registren entrenamientos ' +
          'sin señal. Caché local síncrono en MMKV, sistema de diseño propio y pruebas Jest en cada push.',
        icons: ['react', 'expo', 'typescript', 'jest'],
        repoUrl: 'https://github.com/eloeza0483/gym-app',
      },
      {
        metaTop: 'Interdepartamental',
        metaBottom: '2024',
        title: 'Gestión de empleados y equipos de TI',
        description:
          'Onboarding y offboarding que conecta Talento Humano, RRHH y Sistemas: solicitudes de empleados, ' +
          'asignación de equipos y chat en tiempo real con WebSockets.',
        icons: ['laravel', 'react', 'socketdotio', 'mysql'],
      },
    ],
    ai: {
      kickerLine1: 'Desarrollo',
      kickerLine2: 'asistido por IA',
      statement: 'No solo uso IA. La construyo dentro del flujo de trabajo.',
      cards: [
        {
          icon: 'claude',
          title: 'Claude Code extendido',
          description:
            'MCP, skills propias, subagentes y hooks. Reparto el trabajo entre agentes que corren en paralelo ' +
            'y yo me quedo revisando y decidiendo. Así entrego más rápido sin bajar la calidad.',
        },
        {
          icon: 'sparkles',
          title: 'IA dentro de mis sistemas',
          description:
            'Conecto por API el modelo que mejor le quede al proyecto, sin casarme con un proveedor. La lógica ' +
            'de negocio vive en el código y el modelo solo conversa, así un agente nunca inventa un precio.',
        },
        {
          icon: 'n8n',
          title: 'Flujos automatizados',
          description:
            'Conecto sistemas, apps de mensajería, correo y bases de datos para que los documentos, avisos y ' +
            'tareas repetitivas salgan solos, sin que nadie tenga que acordarse.',
        },
      ],
    },
    contactTitle: 'Contacto',
    location: 'Mérida, Yucatán, México',
  },
  en: {
    nav: { stack: 'Stack', projects: 'Work', ai: 'AI', contact: 'Contact' },
    role: 'Full Stack Developer',
    hero: {
      titleLead: "Hi, I'm Ernesto and I love ",
      titleAccent: 'building software',
      titleTail: ' end to end.',
      body:
        'I enjoy building a solid backend just as much as polishing every detail of an interface. What I like ' +
        'most is sitting down to understand how a business runs and turning that into a system that actually ' +
        "saves it time. If a project calls for a stack I don't know yet, I learn it; I like keeping up with " +
        "what's new. I'm looking for a team where I can bring that and keep growing. My work is right below.",
      ctaPrimary: 'View work',
      ctaSecondary: 'Download CV',
    },
    info: {
      location: { label: 'Location', value: 'Mérida, Yucatán, MX' },
      languages: { label: 'Languages', value: 'Spanish (native) · English B1–B2' },
      workSetup: { label: 'Work setup', value: 'Remote · Hybrid' },
      impact: { label: 'Impact', value: '150+ concurrent users' },
      status: { label: 'Status', value: 'Available' },
    },
    stackTitle: 'Tech stack',
    stack: [
      {
        label: 'Frontend',
        items: [
          { name: 'React', icon: 'react' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'JavaScript', icon: 'javascript' },
          { name: 'Tailwind CSS', icon: 'tailwindcss' },
          { name: 'HTML5', icon: 'html5' },
          { name: 'CSS3', icon: 'css' },
        ],
      },
      {
        label: 'Backend & APIs',
        items: [
          { name: 'Node.js', icon: 'nodedotjs' },
          { name: 'NestJS', icon: 'nestjs' },
          { name: 'Laravel', icon: 'laravel' },
          { name: 'PHP', icon: 'php' },
          { name: 'Socket.io', icon: 'socketdotio' },
          { name: 'REST APIs' },
        ],
      },
      {
        label: 'Databases',
        items: [
          { name: 'PostgreSQL', icon: 'postgresql' },
          { name: 'MySQL', icon: 'mysql' },
          { name: 'Firebird (legacy)' },
        ],
      },
      {
        label: 'Infra & CI/CD',
        items: [
          { name: 'Docker', icon: 'docker' },
          { name: 'Nginx', icon: 'nginx' },
          { name: 'Rocky Linux', icon: 'linux' },
          { name: 'GitHub Actions', icon: 'githubactions' },
          { name: 'Git', icon: 'git' },
          { name: 'Vercel', icon: 'vercel' },
          { name: 'Railway', icon: 'railway' },
        ],
      },
      {
        label: 'Testing',
        items: [
          { name: 'Jest', icon: 'jest' },
          { name: 'Vitest', icon: 'vitest' },
          { name: 'PHPUnit' },
        ],
      },
      {
        label: 'Mobile',
        items: [
          { name: 'React Native', icon: 'react' },
          { name: 'Expo', icon: 'expo' },
        ],
      },
    ],
    projectsTitle: 'Selected work',
    projectsRepoLabel: 'View code on GitHub',
    projects: [
      {
        metaTop: '150+ active users',
        metaBottom: 'Grupo GM · 2024',
        accentMeta: true,
        title: 'Claims Management Platform',
        description:
          'Unifies operations across 2 repair shops and 1 auto parts store: quotes, inventory vouchers, ' +
          'intakes and delivery receipts. Includes real-time queries against a legacy Firebird database for ' +
          'parts pricing, with unified business logic and role-based authorization.',
        icons: ['laravel', 'react', 'mysql', 'docker'],
        repoUrl: 'https://github.com/eloeza0483/Gestion-Siniestros',
      },
      {
        metaTop: 'In production',
        metaBottom: 'Railway · 2025',
        accentMeta: true,
        title: 'AI Agent for Orders & Quotes',
        description:
          'Conversational agent automating quotes and orders for a real distributor over Telegram. A hybrid ' +
          'architecture — deterministic backend plus AI agent — prevents hallucinated answers, with PDF ' +
          'receipt generation.',
        icons: ['googlegemini', 'n8n', 'postgresql', 'railway'],
      },
      {
        metaTop: '2 store locations',
        metaBottom: '2025',
        title: 'Distribuidora García — POS & Inventory',
        description:
          'Counter-sales system with real-time inventory, categories and customer management. GitHub Actions ' +
          'CI/CD automates deployment, plus an n8n flow that issues PDF delivery notes.',
        icons: ['react', 'nodedotjs', 'postgresql', 'githubactions'],
        repoUrl: 'https://github.com/eloeza0483/pos-distribuidora-garcia',
      },
      {
        metaTop: 'Mobile app',
        metaBottom: '2025',
        title: 'Gym Progression Tracker',
        description:
          'Offline-first app so coaches can assign routines and athletes log workouts with no signal. ' +
          'Synchronous local cache (MMKV), a custom design system and Jest tests on every push.',
        icons: ['react', 'expo', 'typescript', 'jest'],
        repoUrl: 'https://github.com/eloeza0483/gym-app',
      },
      {
        metaTop: 'Cross-departmental',
        metaBottom: '2024',
        title: 'Employee Onboarding & IT Assets',
        description:
          'Cross-departmental onboarding and offboarding connecting Human Talent, HR and IT: new hire ' +
          'intake, hardware provisioning and real-time chat over WebSockets.',
        icons: ['laravel', 'react', 'socketdotio', 'mysql'],
      },
    ],
    ai: {
      kickerLine1: 'AI-assisted',
      kickerLine2: 'development',
      statement: "I don't just use AI. I build it into the workflow.",
      cards: [
        {
          icon: 'claude',
          title: 'Claude Code, extended',
          description:
            'MCP, my own skills, subagents and hooks. I split the work across agents running in parallel while ' +
            'I review and make the calls. That lets me ship faster without lowering the bar.',
        },
        {
          icon: 'sparkles',
          title: 'AI inside my systems',
          description:
            'I plug in whichever model fits the project through its API, with no vendor lock-in. Business logic ' +
            'lives in code and the model only talks, so an agent never makes up a price.',
        },
        {
          icon: 'n8n',
          title: 'Automated workflows',
          description:
            'I connect systems, messaging apps, email and databases so documents, alerts and repetitive tasks ' +
            'happen on their own, without anyone having to remember them.',
        },
      ],
    },
    contactTitle: 'Contact',
    location: 'Mérida, Yucatán, Mexico',
  },
}
