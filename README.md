# Sharmaine Rioveros — Portfolio

Personal portfolio site built with React and Vite. No UI libraries, no templates — all layout, animations, and styling handwritten from scratch.

**Live:** https://sharmaine.vercel.app

## Stack

- React 18, Vite
- Framer Motion
- Plain CSS custom properties
- AI chat via Groq (serverless API route on Vercel)

## Local dev

```bash
npm install
npm run dev       # Vite dev server + local /api/chat route
```

Requires a `.env.local` file with:

```
GROQ_API_KEY=your_key_here
```

## Deploy

Auto-deploys to Vercel on every push to `main`.
