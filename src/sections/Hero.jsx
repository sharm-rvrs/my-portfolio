import { motion } from "framer-motion";
import { personal } from "../data";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay: d, ease: [0.4, 0, 0.2, 1] },
});

const stats = [
  { value: "6+", label: "Projects Shipped" },
  { value: "3", label: "Years Experience" },
  { value: "6", label: "Certifications" },
];

const coreSkills = ["TypeScript", "React", "ASP.NET Core", "Node.js", "PostgreSQL", "n8n", "Docker"];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 0 64px",
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

      {/* Oversized ghost glyph — subtle counterweight, right third */}
      <div
        aria-hidden="true"
        className="hero-ghost"
        style={{
          position: "absolute",
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-head)",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: 460,
          lineHeight: 1,
          color: "var(--accent)",
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        S.
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="container"
      >
        <motion.div {...fade(0.1)} style={{ marginBottom: 30 }}>
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
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.2)}
          style={{
            fontFamily: "var(--font-head)",
            fontWeight: 700,
            fontSize: "clamp(42px, 7vw, 84px)",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            marginBottom: 26,
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
              fontSize: "0.5em",
            }}
          >
            Software Developer.
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.3)}
          style={{
            fontSize: 15,
            color: "var(--muted)",
            lineHeight: 1.85,
            maxWidth: 760,
            marginBottom: 20,
            fontWeight: 300,
          }}
        >
          {personal.tagline.replace(/ (\S+)$/, " $1")}
        </motion.p>

        <motion.p
          {...fade(0.38)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--muted2)",
            letterSpacing: "0.02em",
            maxWidth: 540,
            marginBottom: 36,
          }}
        >
          {coreSkills.join(" · ")}
        </motion.p>

        <motion.div
          {...fade(0.46)}
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
            flexWrap: "wrap",
            gap: 40,
            rowGap: 20,
            paddingTop: 28,
            borderTop: "1px solid var(--border)",
          }}
          className="hero-stats"
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

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @media (max-width: 640px) {
          .hero-stats { gap: 26px !important; }
        }
        @media (max-width: 768px) {
          .hero-ghost { display: none !important; }
        }
      `}</style>
    </section>
  );
}
