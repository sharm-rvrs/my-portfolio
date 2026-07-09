import { motion } from "framer-motion";
import { Cloud, Code2, Terminal, Server, Ruler } from "lucide-react";
import { certifications } from "../data";

const iconMap = { Cloud, Code2, Terminal, Server, Ruler };

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <motion.p className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Certifications</motion.p>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Credentials
        </motion.h2>
        <p className="section-sub">
          Verified credentials across cloud computing, AI foundations, systems programming, and cybersecurity.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 14 }}>
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon];
            return (
            <motion.div key={cert.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{
                background: "var(--surface)", borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)", padding: "24px",
                position: "relative", overflow: "hidden",
                transition: "border-color 0.22s, transform 0.22s", cursor: "default",
              }}
              whileHover={{ y: -3, borderColor: "rgba(200,149,90,0.25)" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: cert.color, opacity: 0.7 }} />
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--surface2)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>{Icon && <Icon size={19} strokeWidth={1.6} color="var(--accent)" />}</div>
              <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 8, lineHeight: 1.35 }}>
                {cert.name}
              </h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>{cert.issuer}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted2)" }}>{cert.date}</span>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
