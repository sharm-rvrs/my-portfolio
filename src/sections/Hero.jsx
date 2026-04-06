import { motion } from "framer-motion";
import { personal } from "../data";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: d, ease: [0.4, 0, 0.2, 1] },
});

const stats = [
  { value: "5+", label: "Projects Shipped" },
  { value: "2+", label: "Years of Practice" },
  { value: "6", label: "Certifications" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 5% 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Warm amber glow behind */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 300,
          background:
            "radial-gradient(ellipse, rgba(200,149,90,0.07) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
          width: "100%",
          maxWidth: 1060,
        }}
        className="hero-inner"
      >
        {/* ── LEFT ── */}
        <div>
          <motion.div {...fade(0.1)} style={{ marginBottom: 26 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "var(--accent-light)",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "var(--radius-pill)",
                border: "1px solid rgba(200,149,90,0.2)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.2)}
            style={{
              fontFamily: "var(--font-head)",
              fontWeight: 700,
              fontSize: "clamp(38px, 5vw, 62px)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "var(--text)",
              marginBottom: 20,
            }}
          >
            Hi, I'm
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Sharmaine.
            </em>
            <br />
            <span
              style={{
                color: "var(--muted)",
                fontWeight: 400,
                fontSize: "0.68em",
              }}
            >
              Software Developer.
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.35)}
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.85,
              maxWidth: 420,
              marginBottom: 36,
              fontWeight: 300,
            }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            {...fade(0.45)}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 52,
            }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href={`mailto:${personal.email}`} className="btn-outline">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            {...fade(0.55)}
            style={{
              display: "flex",
              gap: 40,
              paddingTop: 28,
              borderTop: "1px solid var(--border)",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted2)",
                    marginTop: 5,
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Profile card ── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 22,
              padding: "36px 32px",
              width: "100%",
              maxWidth: 380,
              border: "1px solid var(--border)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 86,
                height: 86,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(200,149,90,0.3)",
              }}
            >
              <img
                src="/me.jpg"
                alt="Sharmaine Rioveros"
                style={{
                  width: "130%",
                  height: "130%",
                  objectFit: "cover",
                  objectPosition: "center 25%",
                  display: "block",
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: "var(--font-head)",
                fontSize: 21,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 3,
              }}
            >
              Sharmaine Rioveros
            </h3>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--accent)",
                marginBottom: 18,
                letterSpacing: "0.04em",
              }}
            >
              Software Developer · Taguig, PH
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(34,197,94,0.1)",
                color: "#4ade80",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                padding: "5px 12px",
                borderRadius: "var(--radius-pill)",
                marginBottom: 24,
                border: "1px solid rgba(34,197,94,0.18)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              Open to opportunities
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 20,
                marginBottom: 22,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--muted2)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Core Skills
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "C#",
                  "AI/LLM",
                  "SQL",
                  "Python",
                ].map((s) => (
                  <span
                    key={s}
                    style={{
                      background: "var(--surface2)",
                      color: "var(--muted)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      padding: "4px 11px",
                      borderRadius: "var(--radius-pill)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px 0",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--muted)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                GitHub ↗
              </a>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px 0",
                  borderRadius: "var(--radius)",
                  background: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--bg)",
                  fontWeight: 600,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Email Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
