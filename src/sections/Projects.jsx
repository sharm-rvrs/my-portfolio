import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data";

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
      className="gallery-navbtn"
      style={{
        width: 40, height: 40, borderRadius: "50%",
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
      <div className="gallery-mobile-wrap" style={{ padding: "24px 24px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div className="gallery-mobile-row" style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <NavBtn onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}><ChevronLeft size={18} /></NavBtn>
          <PhoneMockup src={images[active]} alt={project.title} />
          <NavBtn onClick={() => setActive((a) => Math.min(images.length - 1, a + 1))} disabled={active === images.length - 1}><ChevronRight size={18} /></NavBtn>
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
            position: "absolute", top: 14, right: 14, zIndex: 1,
            width: 40, height: 40, borderRadius: "50%",
            background: "var(--surface2)", border: "1px solid var(--border)",
            color: "var(--muted)", fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
        >
          <X size={16} />
        </button>

        {/* Gallery */}
        <Gallery project={project} />

        {/* Content */}
        <div style={{ padding: "22px 24px 28px" }}>
          {(project.github || project.live) && (
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 14, marginBottom: 14 }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
                >GitHub <ArrowUpRight size={12} /></a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
                >Live <ArrowUpRight size={12} /></a>
              )}
            </div>
          )}

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

function ProjectRow({ project, index, onOpen, featured = false }) {
  const hasThumb = project.gallery && project.gallery.length > 0;
  const cappedTech = project.tech.slice(0, 5);
  const extraTech = project.tech.length - cappedTech.length;
  const thumbWidth = project.mobile ? 112 : 220;

  return (
    <motion.article
      className="project-row"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => onOpen(project)}
      style={{
        position: "relative",
        borderBottom: "1px solid var(--border2)",
        padding: featured ? "34px 0" : "28px 0",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {hasThumb && (
        <div
          className="row-thumb"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: thumbWidth,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            opacity: 0,
            transform: "translateX(10px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <img
            src={project.gallery[0]}
            alt={project.title}
            style={{
              width: thumbWidth,
              aspectRatio: project.mobile ? "9/19.5" : "16/9",
              objectFit: "cover",
              borderRadius: project.mobile ? 14 : "var(--radius)",
              border: "1px solid var(--border)",
              display: "block",
            }}
          />
        </div>
      )}

      <div className="row-body" style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted2)", minWidth: 30, paddingTop: 6, flexShrink: 0 }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div style={{ flex: 1, minWidth: 0 }}>
          {featured && (
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>
              Professional
            </p>
          )}
          <h3
            className="row-title"
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 700,
              fontSize: featured ? 30 : 26,
              color: "var(--text)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              marginBottom: 6,
              transition: "color 0.25s",
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em", marginBottom: 8 }}>
            {project.role}
          </p>
          <p
            className="row-blurb"
            style={{
              fontSize: 13,
              color: "var(--muted)",
              lineHeight: 1.6,
              marginBottom: 10,
              fontWeight: 300,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.blurb}
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)" }}>
            {cappedTech.join(", ")}
            {extraTech > 0 ? `, +${extraTech}` : ""}
          </p>
        </div>

        {(project.github || project.live) && (
          <div style={{ display: "flex", gap: 14, flexShrink: 0, paddingTop: 6 }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
              >GitHub <ArrowUpRight size={12} /></a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
              >Live <ArrowUpRight size={12} /></a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  const featured = projects.find((p) => p.id === 7);
  const rest = projects.filter((p) => p.id !== 7);
  const ordered = featured ? [featured, ...rest] : rest;

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

        <div style={{ marginTop: 8, borderTop: "1px solid var(--border2)" }}>
          {ordered.map((p, i) => (
            <ProjectRow
              key={p.id}
              project={p}
              index={i}
              onOpen={setActiveProject}
              featured={p.id === 7}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={closeModal} />}
      </AnimatePresence>

      <style>{`
        .project-row:hover .row-title { color: var(--accent) !important; }
        .project-row:hover .row-thumb { opacity: 1 !important; transform: translateX(0) !important; }
        @media (max-width: 768px) {
          .project-row .row-body { flex-direction: column; gap: 10px; }
          .row-thumb { display: none !important; }
          .row-blurb {
            white-space: normal !important;
            overflow: visible !important;
            text-overflow: clip !important;
          }
        }
        @media (max-width: 430px) {
          .gallery-mobile-wrap { padding-left: 12px !important; padding-right: 12px !important; }
          .gallery-mobile-row { gap: 10px !important; }
        }
      `}</style>
    </section>
  );
}
