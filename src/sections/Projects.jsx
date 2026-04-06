import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";

const badgeMap = {
  cyan: "badge-cyan",
  green: "badge-green",
  indigo: "badge-indigo",
  amber: "badge-amber",
};

function ProjectVisual({ project }) {
  const palettes = {
    1: {
      bg: "#050d14",
      lines: ["#22d3ee", "#0ea5e9", "#6366f1"],
      accent: "#22d3ee",
      // label: "AI Pipeline",
    },
    2: {
      bg: "#051209",
      lines: ["#4ade80", "#22c55e", "#86efac"],
      accent: "#4ade80",
      // label: "Corp Site",
    },
    3: {
      bg: "#08061e",
      lines: ["#a5b4fc", "#818cf8", "#c4b5fd"],
      accent: "#a5b4fc",
      // label: "3D Game",
    },
    4: {
      bg: "#140d02",
      lines: ["#fbbf24", "#f59e0b", "#fde68a"],
      accent: "#fbbf24",
      label: "Finance App",
    },
    5: {
      bg: "#160510",
      lines: ["#f472b6", "#ec4899", "#fda4af"],
      accent: "#f472b6",
      label: "Portfolio",
    },
  };
  const p = palettes[project.id] || palettes[1];

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/10",
        borderRadius: "var(--radius-lg)",
        background: p.bg,
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "9px 12px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: c,
              opacity: 0.8,
            }}
          />
        ))}
        <div
          style={{
            flex: 1,
            height: 16,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 4,
            marginLeft: 8,
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
          }}
        >
          <div
            style={{
              width: 72,
              height: 5,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 3,
            }}
          />
        </div>
      </div>

      {project.image ? (
        <div style={{ flex: 1, display: "flex" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            padding: "16px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 9,
            flex: 1,
          }}
        >
          <div
            style={{
              height: 26,
              background: `linear-gradient(90deg, ${p.accent}1a 0%, transparent 80%)`,
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              paddingLeft: 9,
              gap: 7,
            }}
          >
            <div
              style={{
                width: 4,
                height: 12,
                background: p.accent,
                borderRadius: 2,
              }}
            />
            <div
              style={{
                width: 80,
                height: 6,
                background: `${p.accent}44`,
                borderRadius: 3,
              }}
            />
          </div>
          {[100, 72, 84, 58].map((w, i) => (
            <div
              key={i}
              style={{
                height: 5,
                width: `${w}%`,
                background: "rgba(255,255,255,0.07)",
                borderRadius: 3,
              }}
            />
          ))}
          <div style={{ display: "flex", gap: 7, marginTop: 4 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 48,
                  borderRadius: 7,
                  background: `${p.lines[i]}10`,
                  border: `1px solid ${p.lines[i]}25`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 9px",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 3,
                    background: p.lines[i],
                    borderRadius: 2,
                    opacity: 0.8,
                  }}
                />
                <div
                  style={{
                    width: 32,
                    height: 3,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 2,
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
            <div
              style={{
                width: 56,
                height: 18,
                background: p.accent,
                borderRadius: 9,
                opacity: 0.85,
              }}
            />
            <div
              style={{
                width: 44,
                height: 18,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 9,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: 38,
          right: 12,
          background: `${p.accent}15`,
          border: `1px solid ${p.accent}30`,
          borderRadius: 5,
          padding: "2px 7px",
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          color: p.accent,
          letterSpacing: "0.08em",
        }}
      >
        {p.label}
      </div>

      <div style={{ position: "absolute", top: 38, left: 12, fontSize: 14 }}>
        {project.emoji}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 36,
          background: `radial-gradient(ellipse, ${p.accent}15 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

function ProjectCard({ project, i }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = i % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      style={{
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 1.05fr" : "1.05fr 1fr",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      whileHover={{
        borderColor: "rgba(200,149,90,0.25)",
        boxShadow: "0 16px 56px rgba(0,0,0,0.4)",
      }}
      className="project-card"
    >
      {isEven && (
        <div
          style={{
            padding: 22,
            background: "var(--bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProjectVisual project={project} />
        </div>
      )}

      <div
        style={{
          padding: "30px 30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 16,
          }}
        >
          {project.badge ? (
            <span
              className={`badge ${badgeMap[project.badgeColor] || "badge-amber"}`}
            >
              {project.badge}
            </span>
          ) : (
            <span />
          )}
          <div style={{ display: "flex", gap: 14 }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted2)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted2)")
                }
              >
                GitHub ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted2)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted2)")
                }
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-head)",
            fontWeight: 700,
            fontSize: 20,
            color: "var(--text)",
            marginBottom: 4,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.05em",
            marginBottom: 14,
          }}
        >
          {project.role}
        </p>
        <p
          style={{
            fontSize: 14,
            color: "var(--muted)",
            lineHeight: 1.82,
            marginBottom: 18,
            flex: 1,
            fontWeight: 300,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: 7,
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 10px",
                borderRadius: "var(--radius-pill)",
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 14,
            borderTop: "1px solid var(--border2)",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--muted2)",
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: "color 0.2s",
            background: "transparent",
            textAlign: "left",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
        >
          <span>{expanded ? "HIDE HIGHLIGHTS" : "SHOW HIGHLIGHTS"}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▾
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              style={{ overflow: "hidden", listStyle: "none", marginTop: 12 }}
            >
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    padding: "5px 0",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    →
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.72,
                      fontWeight: 300,
                    }}
                  >
                    {h}
                  </span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {!isEven && (
        <div
          style={{
            padding: 22,
            background: "var(--bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProjectVisual project={project} />
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg2)" }}
    >
      <div className="container">
        <motion.p
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Selected work
        </motion.h2>
        <p className="section-sub">
          Selected projects showcasing independent and freelance work. Some
          professional projects are proprietary.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-card > div:last-child:not(:first-child) { display: none; }
          .project-card > div:first-child:not(:last-child) { display: none; }
        }
      `}</style>
    </section>
  );
}
