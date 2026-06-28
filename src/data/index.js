export const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const personal = {
  name: "Sharmaine Rioveros",
  role: "Software Developer",
  tagline:
    "I build fast, clean web apps. Solid frontends, scalable backends, and AI integrations that solve real problems.",
  bio: "I'm a software developer based in Taguig, Philippines. I build full-stack web applications that are fast, maintainable, and built to last. Frontend, backend, APIs, databases, and AI where it actually makes sense.",
  location: "Taguig, Philippines",
  email: "sharmainerioveros@gmail.com",
  github: "https://github.com/sharm-rvrs",
  portfolio: "https://sharmaine.vercel.app/",
  resume: `${import.meta.env.BASE_URL}images/resume.pdf`,
};

export const techCategories = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: `${DEV}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DEV}/typescript/typescript-original.svg` },
      { name: "C#", icon: `${DEV}/csharp/csharp-original.svg` },
      { name: "Python", icon: `${DEV}/python/python-original.svg` },
      { name: "PHP", icon: `${DEV}/php/php-original.svg` },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: `${DEV}/react/react-original.svg` },
      { name: "Vite", icon: `${DEV}/vitejs/vitejs-original.svg` },
      { name: "Material UI", icon: `${DEV}/materialui/materialui-original.svg` },
      { name: "TanStack Query", emoji: "🔄" },
      { name: "Mantine", emoji: "🎨" },
      { name: "Zustand", emoji: "🐻" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "ASP.NET Core", icon: `${DEV}/dotnetcore/dotnetcore-original.svg` },
      { name: "Entity Framework", icon: `${DEV}/dotnetcore/dotnetcore-original.svg` },
      { name: "SignalR", emoji: "📡" },
      { name: "Node.js", icon: `${DEV}/nodejs/nodejs-original.svg` },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: `${DEV}/postgresql/postgresql-original.svg` },
      { name: "SQL Server", icon: `${DEV}/microsoftsqlserver/microsoftsqlserver-original.svg` },
      { name: "MySQL", icon: `${DEV}/mysql/mysql-original.svg` },
      { name: "Redis", icon: `${DEV}/redis/redis-original.svg` },
    ],
  },
  {
    category: "Auth & Security",
    items: [
      { name: "Keycloak", emoji: "🔐" },
      { name: "JWT Bearer", emoji: "🎫" },
      { name: "OAuth2 / OIDC", emoji: "🔑" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Docker", icon: `${DEV}/docker/docker-original.svg` },
      { name: "GitHub Actions", icon: `${DEV}/githubactions/githubactions-original.svg` },
      { name: ".NET Aspire", emoji: "☁️" },
      { name: "Git", icon: `${DEV}/git/git-original.svg` },
      { name: "Figma", icon: `${DEV}/figma/figma-original.svg` },
      { name: "Unity", icon: `${DEV}/unity/unity-original.svg` },
    ],
  },
];

export const projects = [
  {
    id: 7,
    title: "eData Services Philippines, Inc.",
    role: "Full-Stack Developer · 2023–Present",
    description:
      "Full-stack developer on internal enterprise systems at a BPO company. Worked across five production applications covering operational workflows, clinical data processing, finance routing, request management, and QA. Owned features end-to-end within an agile scrum team. Systems are proprietary and cannot be publicly shared.",
    tech: ["C#", "ASP.NET Core", "React", "TypeScript", ".NET Aspire", "MediatR", "Redis", "SignalR", "SQL Server", "PostgreSQL", "Prisma ORM", "Node.js"],
    gallery: [],
    noVisual: true,
    badge: "Proprietary",
    badgeColor: "indigo",
    color: "#1e40af",
    highlights: [
      "Built a clinical job management workspace solo from scratch — four data panels covering patient, job, appointment, and interview details, with compliance-grade audit logging on every edit",
      "Built a cross-department monitoring dashboard for Finance and IT Admin, replacing manual status follow-ups with a single real-time operational view",
      "Designed an AI prompt configuration module end-to-end, governing prompt settings per business entity tied to transcription template structure",
      "Rebuilt an AI worker monitoring view with live state indicators and connection counts, giving operations staff visibility that didn't exist before",
      "Responded to production incidents including a critical system slowdown on operations cutoff day and an AI worker outage resolved via SSH across multiple servers",
    ],
  },
  {
    id: 1,
    title: "DNGJ Corporation Website",
    role: "Frontend Developer · Freelance",
    description:
      "Marketing website for a Philippine engineering and construction firm. Handled everything from design direction to deployment. Clean, fast, and built to match the client's brand.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    gallery: ["/images/dngj.png"],
    live: "https://dngj-corporation.vercel.app/",
    badge: "Live",
    badgeColor: "green",
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
    tech: ["Next.js", "TypeScript", "Playwright", "OpenAI API", "Nodemailer", "pdf-parse"],
    gallery: ["/images/matching.png"],
    github: "https://github.com/sharm-rvrs/jail-matching-app-2",
    badge: "AI + LLM",
    badgeColor: "cyan",
    color: "#0e7490",
    highlights: [
      "Playwright scraper to reach JavaScript-rendered jail roster pages",
      "LLM classification via Groq/OpenAI for name matching and fallback handling",
      "Full pipeline: PDF upload, name extraction, roster match, automated email notification",
    ],
  },
  {
    id: 3,
    title: "GainLog",
    role: "Full-Stack Developer · Personal Project",
    description:
      "Full-stack fitness tracker with AI coaching, workout logging, and progress analytics. Built with Next.js and Supabase, with a multi-step onboarding flow, weekly program builder, and streak tracking.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Groq AI", "Vitest"],
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
    badge: "AI + LLM",
    badgeColor: "cyan",
    color: "#0d9488",
    highlights: [
      "AI coaching via Groq, aware of the user's profile, workout history, and weekly program",
      "Workout logging with sets, reps, weight, rest timers, and localStorage persistence",
      "Progress analytics with calendar view, streak tracking, and personal bests",
      "Supabase SSR auth with email verification and role-based navigation gating",
      "Weekly program builder with AI-assisted exercise recommendations on onboarding",
    ],
  },
  {
    id: 4,
    title: "Gastos",
    role: "Full-Stack Developer · Personal Project",
    description:
      "Personal finance app built for solo living in Manila. Tracks daily expenses, monthly budgets, savings goals, and wallet balances across GCash, Maya, and bank accounts. Has an AI assistant that knows local pricing and Filipino spending habits.",
    tech: ["Next.js", "TypeScript", "Mantine UI", "PostgreSQL", "Prisma", "NextAuth.js", "Groq AI"],
    gallery: [],
    github: "https://github.com/sharm-rvrs/gastos",
    badge: "AI + LLM",
    badgeColor: "cyan",
    color: "#d97706",
    highlights: [
      "Peso Buddy AI assistant via Groq, built around Manila pricing and local spending patterns",
      "Multi-wallet tracking across GCash, Maya, Cash, Credit Card, and Bank accounts",
      "Budget alerts and Petsa de Peligro mode when funds run critically low",
      "Savings goals with deadline tracking and direct expense linking",
      "Decimal types on all monetary fields to avoid floating-point rounding issues",
    ],
  },
  {
    id: 5,
    title: "Treasure Juniors",
    role: "Game Developer · Thesis Project",
    description:
      "3D puzzle-adventure game built in Unity for Android as a thesis project. Designed the gameplay, wrote all the C# systems, and set up NavMesh AI for NPC navigation. Published on the Google Play Store.",
    tech: ["Unity", "C#", "3D Game Design", "NavMesh AI", "Android"],
    gallery: ["/images/treasure.png"],
    github: "https://github.com/sharm-rvrs/treasure-juniors",
    live: "https://play.google.com/store/apps/details?id=treasure.juniors",
    badge: "Published",
    badgeColor: "indigo",
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
      "This portfolio, built from scratch with no UI libraries or templates. Clean design, smooth animations, and an AI chat agent powered by Groq so visitors can ask questions about me directly.",
    tech: ["React", "Vite", "CSS", "Framer Motion", "Groq AI", "Vercel"],
    gallery: [],
    github: "https://github.com/sharm-rvrs/my-portfolio",
    live: "https://sharmaine.vercel.app/",
    badge: "AI + LLM",
    badgeColor: "cyan",
    color: "#be185d",
    highlights: [
      "Zero component libraries — all layout and animations handwritten from scratch",
      "AI chat agent powered by Groq (llama-3.3-70b), knows my full background, projects, and stack",
      "Serverless API route on Vercel keeps the API key server-side and out of the bundle",
      "Fully responsive with semantic, accessible markup throughout",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "August 2025",
    icon: "☁️",
    badge: "Most Recent",
    badgeColor: "cyan",
  },
  {
    id: 2,
    name: "Foundational C# with Microsoft",
    issuer: "Microsoft",
    date: "September 2024",
    icon: "⚙️",
    badge: "Core Stack",
    badgeColor: "indigo",
  },
  {
    id: 3,
    name: "Python Essentials",
    issuer: "Python Institute",
    date: "August 2022",
    icon: "🐍",
  },
  {
    id: 4,
    name: "HCIA-Cloud Service",
    issuer: "Huawei Talent Online",
    date: "August 2022",
    icon: "🏗️",
  },
  {
    id: 5,
    name: "Math Basics",
    issuer: "Huawei Talent Online",
    date: "July 2022",
    icon: "📐",
  },
];
