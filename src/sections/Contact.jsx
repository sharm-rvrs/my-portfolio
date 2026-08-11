import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "../data";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg2)", padding: "108px 5%" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "var(--accent-light)", color: "var(--accent)",
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.16em", textTransform: "uppercase",
            padding: "6px 14px", borderRadius: "var(--radius-pill)", marginBottom: 28,
            border: "1px solid rgba(200,149,90,0.2)",
          }}>Contact</span>

          <h2 style={{
            fontFamily: "var(--font-head)", fontWeight: 700,
            fontSize: "clamp(27px, 5vw, 50px)", color: "var(--text)",
            lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 20,
          }}>
            Let's build something<br />
            <em style={{ color: "var(--accent)" }}>worth remembering.</em>
          </h2>

          <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 400, margin: "0 auto 40px", lineHeight: 1.8, fontWeight: 300 }}>
            I'm actively looking for my next opportunity, whether it's a full-time role, a freelance project, or something in between.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
            <a href={`mailto:${personal.email}`} className="btn-primary">Send a Message</a>
            <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>View Resume <ArrowUpRight size={15} /></a>
          </div>

          <div style={{ display: "flex", gap: 0, borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", overflow: "hidden" }}>
            {[
              { label: "GitHub",    href: personal.github,            sub: "github.com/sharm-rvrs" },
              { label: "Email",     href: `mailto:${personal.email}`, sub: personal.email },
              { label: "Portfolio", href: personal.portfolio,         sub: "Live site" },
            ].map((l, i) => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                style={{
                  flex: 1, padding: "20px 16px", textAlign: "center",
                  borderRight: i < 2 ? "1px solid var(--border)" : "none",
                  background: "var(--surface)", transition: "background 0.2s",
                  display: "block",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--surface2)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--surface)"}
              >
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{l.label}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)", overflowWrap: "break-word" }}>{l.sub}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
