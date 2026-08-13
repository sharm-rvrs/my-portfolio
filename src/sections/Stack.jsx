import { motion } from "framer-motion";
import { techCategories } from "../data";

function TechItem({ name }) {
  return (
    <span
      style={{
        background: "var(--surface2)",
        color: "var(--muted)",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid var(--border)",
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </span>
  );
}

function CategoryCard({ cat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      style={{
        background: "var(--surface)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        flex: "0 1 calc(33.333% - 9.333px)",
      }}
    >
      <div
        style={{
          height: 2,
          background: "linear-gradient(90deg, var(--accent) 0%, transparent 70%)",
        }}
      />
      <div style={{ padding: "20px 22px", flex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--accent)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: 14,
          }}
        >
          {cat.category}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {cat.items.map((item) => (
            <TechItem key={item} name={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <motion.p
          className="section-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Tools I build with
        </motion.h2>

        <p className="section-sub">
          A practical toolkit across the full stack, focused on building and
          supporting real-world production systems.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
          }}
          className="stack-grid"
        >
          {techCategories.map((cat, i) => (
            <CategoryCard key={cat.category} cat={cat} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .stack-grid > * { flex-basis: calc(50% - 7px) !important; } }
        @media (max-width: 540px) { .stack-grid > * { flex-basis: 100% !important; } }
      `}</style>
    </section>
  );
}
