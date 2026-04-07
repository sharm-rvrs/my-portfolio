export const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const personal = {
  name: "Sharmaine Rioveros",
  role: "Software Developer",
  tagline:
    "I build fast, intuitive web applications — from clean frontends to scalable backends, with practical AI integrations.",
  bio: "I’m a software developer based in Taguig, Philippines, focused on building fast, maintainable, and purposeful full-stack web applications. I work across the stack — from designing intuitive user interfaces to engineering backend systems, and integrating AI where it adds real value.",
  location: "Taguig, Philippines",
  email: "sharmainerioveros@gmail.com",
  github: "https://github.com/sharm-rvrs",
  portfolio: "https://sharm-rvrs.github.io/my-portfolio/",
  resume: "my-portfolio/resume.pdf",
};

export const techCategories = [
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: `${DEV}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEV}/nextjs/nextjs-original.svg` },
      {
        name: "ASP.NET Core",
        icon: `${DEV}/dotnetcore/dotnetcore-original.svg`,
      },
      {
        name: "Tailwind CSS",
        icon: `${DEV}/tailwindcss/tailwindcss-original.svg`,
      },
      { name: "Framer Motion", emoji: "🌊" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      {
        name: "ASP.NET Core",
        icon: `${DEV}/dotnetcore/dotnetcore-original.svg`,
      },
      { name: "Node.js", icon: `${DEV}/nodejs/nodejs-original.svg` },
      { name: "Bun", emoji: "🍞" },
      { name: "RESTful APIs", emoji: "⚡" },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "SQL Server",
        icon: `${DEV}/microsoftsqlserver/microsoftsqlserver-original.svg`,
      },
      {
        name: "PostgreSQL",
        icon: `${DEV}/postgresql/postgresql-original.svg`,
      },
      { name: "MySQL", icon: `${DEV}/mysql/mysql-original.svg` },
    ],
  },
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
    category: "AI & Cloud",
    items: [
      { name: "Azure AI", icon: `${DEV}/azure/azure-original.svg` },
      { name: "OpenAI", emoji: "🤖" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: `${DEV}/git/git-original.svg` },
      { name: "Figma", icon: `${DEV}/figma/figma-original.svg` },
      { name: "Unity", icon: `${DEV}/unity/unity-original.svg` },
      { name: "Vite", icon: `${DEV}/vitejs/vitejs-original.svg` },
      { name: "Playwright", icon: `${DEV}/playwright/playwright-original.svg` },
      { name: "Vercel", emoji: "▲" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "PDF Inmate Matching System",
    role: "Full-Stack Developer · Solo Project",
    description:
      "An end-to-end document automation system that extracts inmate names from uploaded PDFs and matches them against live jail roster data. Built to solve a real operational limitation — standard HTTP scraping couldn't access JavaScript-rendered pages, so I combined browser automation with LLM-based classification to complete the workflow.",
    tech: [
      "Next.js",
      "TypeScript",
      "Playwright",
      "OpenAI API",
      "Nodemailer",
      "pdf-parse",
    ],
    image: "/my-portfolio/matching.png",
    github: "https://github.com/sharm-rvrs/jail-matching-app-2",
    badge: "AI + LLM",
    badgeColor: "cyan",
    color: "#0e7490",
    highlights: [
      "Used Playwright to scrape JavaScript-rendered jail roster data",
      "Integrated LLM (Groq/OpenAI) for document classification and fallback handling",
      "Built full pipeline: scraping → PDF upload → extraction → matching → automated email notifications",
    ],
  },
  {
    id: 2,
    title: "DNGJ Corporation Website",
    role: "Frontend Developer · Freelance",
    description:
      "A production-ready marketing website for a Philippine engineering and construction firm. Delivered end-to-end, from design direction and component architecture to deployment, resulting in a professional, high-performance site aligned with the client’s brand.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/my-portfolio/dngj.png",
    live: "https://dngj-corporation.vercel.app/",
    badge: "Live",
    badgeColor: "green",
    color: "#15803d",
    highlights: [
      "Five-page site delivered independently — from design to production deployment",
      "Scroll-triggered animations on hero, services, and featured project sections",
      "Navy-gold brand palette with Barlow Condensed typography for industry credibility",
    ],
  },
  {
    id: 3,
    title: "Treasure Juniors",
    role: "Game Developer · Thesis Project",
    description:
      "A 3D puzzle-adventure game developed in Unity for Android as a thesis project. Designed gameplay mechanics, implemented core systems in C#, and built dynamic NPC navigation using NavMesh. Successfully published on the Google Play Store.",
    tech: ["Unity", "C#", "3D Game Design", "NavMesh AI", "Android"],
    github: "https://github.com/sharm-rvrs/treasure-juniors",
    live: "https://play.google.com/store/apps/details?id=treasure.juniors",
    image: "/my-portfolio/treasure.png",
    badge: "Published",
    badgeColor: "indigo",
    color: "#4338ca",
    highlights: [
      "Published on Google Play — completed full submission and release workflow",
      "NavMesh AI system for real-time NPC pathfinding and dynamic navigation",
      "Owned the full scope: game design, C# scripting, scene setup, and mobile build",
    ],
  },
  {
    id: 4,
    title: "Expense Tracker",
    role: "Frontend & Backend Developer · Personal Project",
    description:
      "A personal project focused on building clean, scalable full-stack architecture using React, TypeScript, Node.js, and Mantine UI. Emphasized strong typing, reusable components, and a simple, intuitive UI for tracking daily expenses.",
    tech: ["React", "TypeScript", "Node.js", "Mantine UI", "Vite"],
    github: "https://github.com/sharm-rvrs/expense-tracker-2",
    badge: null,
    color: "#b45309",
    highlights: [
      "Strict TypeScript throughout — treating it as production-grade practice",
      "Component architecture designed for scalability and reuse across larger apps",
      "Categorized expense breakdowns with clear visual spending summaries",
    ],
  },
  {
    id: 5,
    title: "Portfolio Website",
    role: "Frontend Developer · Personal Project",
    description:
      "A fully custom portfolio built from scratch without UI libraries or templates. Focused on clean design, smooth interactions, and maintainable code, with automated deployment via GitHub Pages on every push.",
    tech: ["React", "Vite", "CSS", "Framer Motion", "GitHub Pages"],
    github: "https://github.com/sharm-rvrs/my-portfolio",
    live: "https://sharm-rvrs.github.io/my-portfolio/",
    badge: null,
    color: "#be185d",
    highlights: [
      "Zero component libraries — all layout and animations handwritten from scratch",
      "Automated GitHub Pages deployment triggered on every commit via gh-pages",
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
  {
    id: 6,
    name: "Cybersecurity Webinar",
    issuer: "Black Bears Securities",
    date: "October 2021",
    icon: "🔐",
  },
];
