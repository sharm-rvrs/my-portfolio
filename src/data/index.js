export const personal = {
  name: "Sharmaine Rioveros",
  role: "Software Developer",
  tagline:
    "Solid frontends, scalable backends, and automation systems that run in production.",
  bio: "Software developer in Taguig, PH, with 3+ years shipping full-stack features in production enterprise systems: React and TypeScript frontends, ASP.NET Core APIs, and relational databases. Outside my day job I build my own products, most recently an AI-powered lead automation system on self-hosted n8n, deployed on Railway and Vercel.",
  location: "Taguig, Philippines",
  email: "sharmainerioveros@gmail.com",
  github: "https://github.com/sharm-rvrs",
  portfolio: "https://sharmaine.vercel.app/",
  resume: `${import.meta.env.BASE_URL}images/resume.pdf`,
};

export const techCategories = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zod"],
  },
  {
    category: "Backend & APIs",
    items: ["ASP.NET Core", "C#", "Node.js", "Entity Framework Core", "REST API design"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQL Server", "Redis", "Supabase"],
  },
  {
    category: "Automation & Integration",
    items: ["n8n (self-hosted)", "webhooks", "OAuth2", "LLM APIs", "Airtable API"],
  },
  {
    category: "DevOps & Deployment",
    items: ["Docker", "GitHub Actions", "Railway", "Vercel", "Git"],
  },
];

export const projects = [
  {
    id: 7,
    title: "eData Services Philippines, Inc.",
    role: "Full-Stack Developer · 2023–Present",
    description:
      "Full-stack developer on internal enterprise systems at a BPO company: five production applications spanning operational workflows, clinical data processing, finance routing, request management, and QA. I own features end to end within an agile scrum team. Systems are proprietary, so the highlights describe scope rather than linking out.",
    blurb: "Enterprise systems at a BPO company: clinical data, finance, and ops workflows.",
    tech: ["C#", "ASP.NET Core", "React", "TypeScript", ".NET Aspire", "MediatR", "Redis", "SignalR", "SQL Server", "PostgreSQL", "Prisma ORM", "Node.js"],
    gallery: [],
    noVisual: true,
    color: "#1e40af",
    highlights: [
      "Built a clinical job management workspace solo, covering patient, job, appointment, and interview data with compliance-grade audit logging on every edit",
      "Shipped a cross-department monitoring dashboard for Finance and IT Admin, replacing manual status follow-ups with one real-time view",
      "Designed an AI prompt configuration module governing per-entity prompt settings tied to transcription template structure",
      "Resolved production incidents, including a critical slowdown on operations cutoff day and an AI worker outage fixed over SSH across multiple servers",
    ],
  },
  {
    id: 8,
    title: "AI Lead Intake & Follow-Up Automation",
    role: "Automation Developer · Solo Project",
    description:
      "End-to-end lead automation for a fictional studio client. A Next.js form feeds a self-hosted n8n pipeline that validates, dedupes, classifies each inquiry with an LLM, replies by email, notifies Discord, and follows up automatically if a lead goes quiet.",
    blurb: "n8n lead automation that validates, classifies with an LLM, and follows up automatically.",
    tech: ["n8n (self-hosted)", "Next.js", "TypeScript", "LLM API", "Airtable API", "Gmail OAuth2", "Docker", "Railway"],
    gallery: ["/images/lead-intake.png"],
    github: "https://github.com/sharm-rvrs/lead-intake-automation",
    live: "https://bloomstudio-leads.vercel.app/",
    color: "#d4a054",
    highlights: [
      "Two-layer validation: Zod on the client plus independent secret-header and format checks inside n8n, since the webhook is a public endpoint anyone can call directly",
      "LLM classification and reply drafting in one call with strict JSON output, safe parsing, and an unclassified fallback so no lead is ever lost to a bad AI response",
      "Scheduled follow-up workflow with status-based idempotency: a lead flips to Follow-up Sent on first send and is naturally excluded from every future run",
      "Deployed to production on Railway and Vercel, including volume permission and OAuth-per-environment fixes documented in the repo",
    ],
  },
  {
    id: 1,
    title: "DNGJ Corporation Website",
    role: "Frontend Developer · Freelance",
    description:
      "Marketing website for a Philippine engineering and construction firm. Handled everything from design direction to deployment. Clean, fast, and built to match the client's brand.",
    blurb: "Marketing site for a Philippine engineering firm, from design to deployment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    gallery: ["/images/dngj.png"],
    live: "https://dngj-corporation.vercel.app/",
    color: "#15803d",
    highlights: [
      "Five-page site delivered solo, from design to production deployment",
      "Scroll-triggered animations on hero, services, and featured project sections",
      "Navy-gold brand palette with Barlow Condensed typography for industry credibility",
    ],
  },
  {
    id: 2,
    title: "PDF Matching System",
    role: "Full-Stack Developer · Solo Project",
    description:
      "Document automation tool that pulls inmate names from uploaded PDFs and checks them against a live jail roster. Standard scraping couldn't reach the JavaScript-rendered pages, so I used Playwright paired with LLM classification to get it working.",
    blurb: "Matches inmate names from PDFs against a live jail roster using Playwright and an LLM.",
    tech: ["Next.js", "TypeScript", "Playwright", "LLM API", "Nodemailer", "pdf-parse"],
    gallery: ["/images/matching.png"],
    github: "https://github.com/sharm-rvrs/jail-matching-app-2",
    color: "#0e7490",
    highlights: [
      "Playwright scraper to reach JavaScript-rendered jail roster pages",
      "LLM classification for name matching and fallback handling",
      "Full pipeline: PDF upload, name extraction, roster match, automated email notification",
    ],
  },
  {
    id: 3,
    title: "GainLog",
    role: "Full-Stack Developer · Personal Project",
    description:
      "Full-stack fitness tracker with AI coaching, workout logging, and progress analytics. Built with Next.js and Supabase, with a multi-step onboarding flow, weekly program builder, and streak tracking.",
    blurb: "Fitness tracker with AI coaching, workout logging, and progress analytics.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "LLM API", "Vitest"],
    mobile: true,
    gallery: [
      "/images/gain-log/fitness-goals.png",
      "/images/gain-log/welcome.png",
      "/images/gain-log/ai-chat.png",
      "/images/gain-log/log-workout.png",
      "/images/gain-log/signin.png",
    ],
    github: "https://github.com/sharm-rvrs/workout-app",
    live: "https://my-gainlog.vercel.app/",
    color: "#0d9488",
    highlights: [
      "AI coaching powered by an LLM API, aware of the user's profile, workout history, and weekly program",
      "Workout logging with sets, reps, weight, rest timers, and localStorage persistence",
      "Progress analytics with calendar view, streak tracking, and personal bests",
      "Supabase SSR auth with email verification and role-based navigation gating",
    ],
  },
  {
    id: 4,
    title: "Gastos",
    role: "Full-Stack Developer · Personal Project",
    description:
      "Personal finance app built for solo living in Manila. Tracks daily expenses, budgets, savings goals, and wallets across GCash, Maya, and bank accounts, with an AI assistant tuned to local pricing.",
    blurb: "Personal finance app for Manila: expenses, budgets, wallets, and an AI assistant.",
    tech: ["Next.js", "TypeScript", "Mantine UI", "PostgreSQL", "Prisma", "NextAuth.js", "LLM API"],
    gallery: [],
    github: "https://github.com/sharm-rvrs/gastos",
    color: "#d97706",
    highlights: [
      "Peso Buddy AI assistant powered by an LLM API, built around Manila pricing and local spending patterns",
      "Multi-wallet tracking across GCash, Maya, Cash, Credit Card, and Bank accounts",
      "Budget alerts and Petsa de Peligro mode when funds run critically low",
      "Decimal types on all monetary fields to avoid floating-point rounding issues",
    ],
  },
  {
    id: 5,
    title: "Treasure Juniors",
    role: "Game Developer · Thesis Project",
    description:
      "3D puzzle-adventure game built in Unity for Android as a thesis project. Designed the gameplay, wrote all the C# systems, and set up NavMesh AI for NPC navigation. Published on the Google Play Store.",
    blurb: "3D puzzle-adventure game built in Unity, published on the Google Play Store.",
    tech: ["Unity", "C#", "3D Game Design", "NavMesh AI", "Android"],
    gallery: ["/images/treasure.png"],
    github: "https://github.com/sharm-rvrs/treasure-juniors",
    live: "https://play.google.com/store/apps/details?id=treasure.juniors",
    color: "#4338ca",
    highlights: [
      "Published on the Google Play Store, went through the full submission and release process",
      "NavMesh AI for real-time NPC pathfinding and dynamic navigation",
      "Owned the full scope: game design, C# scripting, scene setup, and mobile build",
    ],
  },
  {
    id: 6,
    title: "Portfolio Website",
    role: "Frontend Developer · Personal Project",
    description:
      "This portfolio, built from scratch with no UI libraries or templates. Clean design, smooth animations, and an AI chat agent powered by an LLM API so visitors can ask questions about me directly.",
    blurb: "This portfolio, built from scratch with no UI libraries, plus an AI chat agent.",
    tech: ["React", "Vite", "CSS", "Framer Motion", "LLM API", "Vercel"],
    gallery: [],
    github: "https://github.com/sharm-rvrs/my-portfolio",
    live: "https://sharmaine.vercel.app/",
    color: "#be185d",
    highlights: [
      "Zero component libraries: all layout and animations handwritten from scratch",
      "AI chat agent powered by an LLM API, visitors can ask questions about my background, projects, and skills directly",
      "Serverless API route on Vercel keeps the API key server-side and out of the bundle",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "August 2025",
    icon: "Cloud",
  },
  {
    id: 2,
    name: "Foundational C# with Microsoft",
    issuer: "Microsoft",
    date: "September 2024",
    icon: "Code2",
  },
  {
    id: 3,
    name: "Python Essentials",
    issuer: "Python Institute",
    date: "August 2022",
    icon: "Terminal",
  },
  {
    id: 4,
    name: "HCIA-Cloud Service",
    issuer: "Huawei Talent Online",
    date: "August 2022",
    icon: "Server",
  },
  {
    id: 5,
    name: "Math Basics",
    issuer: "Huawei Talent Online",
    date: "July 2022",
    icon: "Ruler",
  },
];
