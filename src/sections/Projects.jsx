import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";

const badgeMap = {
  cyan: "badge-cyan",
  green: "badge-green",
  indigo: "badge-indigo",
  amber: "badge-amber",
};

const palettes = {
  7: { bg: "#020c1b", lines: ["#3b82f6", "#60a5fa", "#93c5fd"], accent: "#3b82f6", label: "Enterprise" },
  1: { bg: "#051209", lines: ["#4ade80", "#22c55e", "#86efac"], accent: "#4ade80" },
  2: { bg: "#050d14", lines: ["#22d3ee", "#0ea5e9", "#6366f1"], accent: "#22d3ee" },
  3: { bg: "#031a16", lines: ["#2dd4bf", "#14b8a6", "#5eead4"], accent: "#2dd4bf", label: "Fitness + AI" },
  4: { bg: "#140d02", lines: ["#fbbf24", "#f59e0b", "#fde68a"], accent: "#fbbf24", label: "Finance" },
  5: { bg: "#08061e", lines: ["#a5b4fc", "#818cf8", "#c4b5fd"], accent: "#a5b4fc" },
  6: { bg: "#160510", lines: ["#f472b6", "#ec4899", "#fda4af"], accent: "#f472b6", label: "Portfolio" },
};

function PlaceholderVisual({ project }) {
  const p = palettes[project.id] || palettes[1];
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "var(--radius)",
        background: p.bg,
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 5 }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c, opacity: 0.8 }} />
        ))}
        <div style={{ flex: 1, height: 14, background: "rgba(255,255,255,0.05)", borderRadius: 4, marginLeft: 8 }} />
      </div>
      <div style={{ padding: "14px 14px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <div style={{ height: 22, background: `linear-gradient(90deg, ${p.accent}1a 0%, transparent 80%)`, borderRadius: 4, display: "flex", alignItems: "center", paddingLeft: 8, gap: 6 }}>
          <div style={{ width: 3, height: 10, background: p.accent, borderRadius: 2 }} />
          <div style={{ width: 70, height: 5, background: `${p.accent}44`, borderRadius: 3 }} />
        </div>
        {[100, 72, 84, 55].map((w, i) => (
          <div key={i} style={{ height: 4, width: `${w}%`, background: "rgba(255,255,255,0.07)", borderRadius: 3 }} />
        ))}
        <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ flex: 1, height: 40, borderRadius: 6, background: `${p.lines[i]}10`, border: `1px solid ${p.lines[i]}25` }} />
          ))}
        </div>
      </div>
      {p.label && (
        <div style={{ position: "absolute", top: 34, right: 10, background: `${p.accent}15`, border: `1px solid ${p.accent}30`, borderRadius: 4, padding: "2px 6px", fontFamily: "var(--font-mono)", fontSize: 9, color: p.accent, letterSpacing: "0.08em" }}>
          {p.label}
        </div>
      )}
    </div>
  );
}

function PhoneMockup({ src, alt }) {
  return (
    <div
      style={{
        position: "relative",
        width: 200,
        flexShrink: 0,
        borderRadius: 44,
        background: "linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 100%)",
        border: "1.5px solid rgba(255,255,255,0.13)",
        padding: "12px 10px",
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07), 0 40px 80px rgba(0,0,0,0.65)",
      }}
    >
      {/* Silent switch */}
      <div style={{ position: "absolute", left: -3.5, top: 88, width: 3, height: 18, background: "#3a3a3c", borderRadius: "3px 0 0 3px" }} />
      {/* Volume up */}
      <div style={{ position: "absolute", left: -3.5, top: 120, width: 3, height: 36, background: "#3a3a3c", borderRadius: "3px 0 0 3px" }} />
      {/* Volume down */}
      <div style={{ position: "absolute", left: -3.5, top: 168, width: 3, height: 36, background: "#3a3a3c", borderRadius: "3px 0 0 3px" }} />
      {/* Power */}
      <div style={{ position: "absolute", right: -3.5, top: 132, width: 3, height: 52, background: "#3a3a3c", borderRadius: "0 3px 3px 0" }} />

      {/* Screen */}
      <div style={{ borderRadius: 34, overflow: "hidden", background: "#000", position: "relative", lineHeight: 0 }}>
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)",
            width: 80, height: 24, background: "#000", borderRadius: 18, zIndex: 10,
            boxShadow: "0 0 0 1.5px #1e1e1e",
          }}
        />
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
        {/* Home indicator */}
        <div style={{ height: 26, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 90, height: 4, background: "rgba(255,255,255,0.22)", borderRadius: 3 }} />
        </div>
      </div>
    </div>
  );
}

function NavBtn({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 34, height: 34, borderRadius: "50%",
        background: disabled ? "transparent" : "var(--surface2)",
        border: `1px solid ${disabled ? "var(--border2)" : "var(--border)"}`,
        color: disabled ? "var(--border)" : "var(--muted)",
        cursor: disabled ? "default" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 15, flexShrink: 0, transition: "all 0.2s",
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.color = "var(--accent)"; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.color = "var(--muted)"; }}
    >
      {children}
    </button>
  );
}

function Gallery({ project }) {
  const [active, setActive] = useState(0);
  const images = project.gallery || [];

  if (images.length === 0) {
    if (project.noVisual) return null;
    return (
      <div style={{ padding: "20px 24px 0" }}>
        <PlaceholderVisual project={project} />
      </div>
    );
  }

  if (project.mobile) {
    return (
      <div style={{ padding: "24px 24px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <NavBtn onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}>←</NavBtn>
          <PhoneMockup src={images[active]} alt={project.title} />
          <NavBtn onClick={() => setActive((a) => Math.min(images.length - 1, a + 1))} disabled={active === images.length - 1}>→</NavBtn>
        </div>
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 20 : 6, height: 6, borderRadius: 3,
                background: i === active ? "var(--accent)" : "var(--surface2)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.25s",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 24px 0" }}>
      <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--border)" }}>
        <img src={images[active]} alt={project.title} style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 340 }} />
      </div>
      {images.length > 1 && (
        <div style={{ display: "flex", gap: 8, marginTop: 10, overflowX: "auto", paddingBottom: 2 }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0, width: 72, height: 48, borderRadius: 7,
                overflow: "hidden", border: `2px solid ${i === active ? "var(--accent)" : "var(--border)"}`,
                cursor: "pointer", padding: 0, background: "none",
                transition: "border-color 0.2s", opacity: i === active ? 1 : 0.55,
              }}
            >
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 300,
        background: "rgba(0,0,0,0.78)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          width: "100%",
          maxWidth: 680,
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {/* Colored top bar */}
        <div style={{ height: 3, background: `linear-gradient(90deg, ${project.color} 0%, transparent 60%)`, borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 18, right: 18, zIndex: 1,
            width: 32, height: 32, borderRadius: "50%",
            background: "var(--surface2)", border: "1px solid var(--border)",
            color: "var(--muted)", fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
        >
          ✕
        </button>

        {/* Gallery */}
        <Gallery project={project} />

        {/* Content */}
        <div style={{ padding: "22px 24px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
            {project.badge && (
              <span className={`badge ${badgeMap[project.badgeColor] || "badge-amber"}`}>{project.badge}</span>
            )}
            <div style={{ display: "flex", gap: 14, marginLeft: "auto" }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
                >GitHub ↗</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
                >Live ↗</a>
              )}
            </div>
          </div>

          <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 22, color: "var(--text)", marginBottom: 4, letterSpacing: "-0.01em" }}>
            {project.title}
          </h3>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", marginBottom: 16 }}>
            {project.role}
          </p>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.85, marginBottom: 22, fontWeight: 300 }}>
            {project.description}
          </p>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted2)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
            Highlights
          </p>
          <ul style={{ listStyle: "none", marginBottom: 22, display: "flex", flexDirection: "column", gap: 1 }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "5px 0" }}>
                <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}>→</span>
                <span style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.72, fontWeight: 300 }}>{h}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: 7, flexWrap: "wrap", paddingTop: 18, borderTop: "1px solid var(--border2)" }}>
            {project.tech.map((t) => (
              <span key={t} style={{ padding: "4px 10px", borderRadius: "var(--radius-pill)", background: "var(--surface2)", border: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, i, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "24px 26px",
      }}
      whileHover={{
        borderColor: `${project.color}55`,
        boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
      }}
    >
      {/* Colored top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${project.color} 0%, transparent 60%)` }} />

      {/* Badge + links */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        {project.badge ? (
          <span className={`badge ${badgeMap[project.badgeColor] || "badge-amber"}`}>{project.badge}</span>
        ) : <span />}
        <div style={{ display: "flex", gap: 14 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
            >GitHub ↗</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
            >Live ↗</a>
          )}
        </div>
      </div>

      <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 19, color: "var(--text)", marginBottom: 4, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
        {project.title}
      </h3>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", marginBottom: 12 }}>
        {project.role}
      </p>
      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, marginBottom: 18, flex: 1, fontWeight: 300, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {project.description}
      </p>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
        {project.tech.map((t) => (
          <span key={t} style={{ padding: "3px 9px", borderRadius: "var(--radius-pill)", background: "var(--surface2)", border: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)" }}>
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => onOpen(project)}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border2)", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted2)", letterSpacing: "0.1em", cursor: "pointer", transition: "color 0.2s", background: "transparent", textAlign: "left" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
      >
        <span>VIEW DETAILS</span>
        <span>↗</span>
      </button>
    </motion.article>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <section id="projects" className="section" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <motion.p className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Projects
        </motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Selected work
        </motion.h2>
        <p className="section-sub">
          Selected projects showcasing independent and freelance work. Some professional projects are proprietary.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={closeModal} />}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
