import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { personal } from "../data";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "About",    href: "#about" },
  { label: "Stack",    href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Certs",    href: "#certifications" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.4,0,0.2,1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 5%", height: 62,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "var(--nav-scrolled)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.35s var(--ease)",
        }}
      >
        <a href="#home" style={{
          fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 19,
          color: "var(--text)", letterSpacing: "-0.02em",
        }}>
          Sharmaine<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", fontWeight: 400, letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--text)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{l.label}</a>
          ))}
          <a href={personal.resume} target="_blank" rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border)", color: "var(--muted)",
              padding: "7px 18px", borderRadius: "var(--radius-pill)",
              fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 400,
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
          >resume ↗</a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: 34, height: 34, borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--muted)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="ham-btn"
          style={{ display: "none", flexDirection: "column", gap: 5, padding: 6 }} aria-label="Menu">
          {[0,1,2].map(i => (
            <motion.span key={i}
              animate={open ? (i===1?{opacity:0}:{rotate:i===0?45:-45,y:i===0?7:-7}) : {rotate:0,y:0,opacity:1}}
              style={{ width: 20, height: 1.5, background: "var(--muted)", display: "block" }}
            />
          ))}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
            style={{
              position:"fixed", top:62, left:0, right:0, zIndex:99,
              background:"var(--bg2)", borderBottom:"1px solid var(--border)",
              padding:"20px 24px", display:"flex", flexDirection:"column", gap:2,
            }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={()=>setOpen(false)}
                style={{ padding:"11px 0", color:"var(--muted)", fontSize:14, borderBottom:"1px solid var(--border2)" }}>
                {l.label}
              </a>
            ))}
            <a href={personal.resume} target="_blank" rel="noopener noreferrer"
              style={{ marginTop:14, padding:"11px 0", color:"var(--accent)", fontSize:14 }}>
              resume ↗
            </a>
            <button
              onClick={toggleTheme}
              style={{
                marginTop: 8, padding: "11px 0", color: "var(--muted)",
                fontSize: 13, fontFamily: "var(--font-mono)",
                display: "flex", alignItems: "center", gap: 8,
                background: "none", border: "none", cursor: "pointer",
              }}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .nav-links{display:none!important;} .ham-btn{display:flex!important;} }
      `}</style>
    </>
  );
}
