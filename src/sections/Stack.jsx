import { motion } from "framer-motion";
import { techCategories } from "../data";

function TechItem({ name, icon, emoji }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "7px 0",
      }}
    >
      {icon ? (
        <img
          src={icon}
          alt={name}
          width={15}
          height={15}
          style={{ flexShrink: 0, opacity: 0.8 }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      ) : (
        <span style={{ fontSize: 13, lineHeight: 1, width: 15, textAlign: "center", flexShrink: 0 }}>
          {emoji}
        </span>
      )}
      <span
        style={{
          fontSize: 13,
          color: "var(--muted)",
          fontFamily: "var(--font-mono)",
          fontWeight: 400,
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </div>
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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 12,
          }}
        >
          {cat.items.map((item) => (
            <TechItem key={item.name} {...item} />
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
          A practical toolkit across the full stack — focused on building and
          supporting real-world production systems.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
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
        @media (max-width: 900px) { .stack-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .stack-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
