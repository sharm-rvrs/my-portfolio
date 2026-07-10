import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "../data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const anim = (d = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay: d, ease: [0.4, 0, 0.2, 1] },
  });

  return (
    <section
      id="about"
      className="section"
      ref={ref}
      style={{ background: "var(--bg2)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* LEFT visual */}
          <motion.div {...anim(0.1)} style={{ position: "relative" }}>
            <div
              style={{
                background: "var(--surface)",
                borderRadius: 22,
                padding: "52px 36px",
                textAlign: "center",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                  overflow: "hidden",
                  boxShadow: "0 12px 32px rgba(200,149,90,0.25)",
                }}
              >
                <img
                  src="/images/me.jpg"
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
                  marginBottom: 4,
                }}
              >
                Sharmaine Rioveros
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--accent)",
                  marginBottom: 28,
                  letterSpacing: "0.04em",
                }}
              >
                Software Developer
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {[
                  ["6+", "Projects"],
                  ["3", "Years"],
                  ["6", "Certs"],
                  ["1", "Game"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    style={{
                      background: "var(--surface2)",
                      borderRadius: 12,
                      padding: "14px 16px",
                      minWidth: 76,
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-head)",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "var(--text)",
                        lineHeight: 1,
                      }}
                    >
                      {v}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--muted2)",
                        marginTop: 5,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT text */}
          <div>
            <motion.p className="section-tag" {...anim(0.1)}>
              About Me
            </motion.p>
            <motion.h2 className="section-title" {...anim(0.18)}>
              Building software
              <br />
              <em style={{ color: "var(--accent)" }}>that actually ships.</em>
            </motion.h2>
            <motion.p
              {...anim(0.26)}
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.85,
                marginBottom: 18,
                fontWeight: 300,
              }}
            >
              {personal.bio}
            </motion.p>
            <motion.p
              {...anim(0.32)}
              style={{
                fontFamily: "var(--font-head)",
                fontStyle: "italic",
                fontSize: 14,
                color: "var(--muted2)",
                lineHeight: 1.6,
                marginBottom: 32,
              }}
            >
              I like reading the error, reproducing it, and understanding
              why before reaching for a fix.
            </motion.p>

            <motion.div
              {...anim(0.38)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 11,
                paddingTop: 24,
                borderTop: "1px solid var(--border)",
                marginBottom: 32,
              }}
            >
              {[
                ["Focus", "Full-Stack Development & Automation"],
                ["Education", "Bachelor's in Computer Science"],
                ["Location", personal.location],
                ["Status", "Open to full-time roles & freelance"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{ display: "flex", gap: 16, alignItems: "baseline" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      fontWeight: 500,
                      minWidth: 76,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--muted)",
                      fontWeight: 300,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...anim(0.44)}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
    </section>
  );
}
