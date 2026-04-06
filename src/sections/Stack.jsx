import { useState } from "react";
import { motion } from "framer-motion";
import { techCategories, DEV } from "../data";

function TechChip({ name, icon, emoji }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "9px 16px",
        borderRadius: "var(--radius-pill)",
        border: `1px solid ${
          hovered ? "rgba(200,149,90,0.4)" : "var(--border)"
        }`,
        background: hovered ? "var(--surface)" : "transparent",
        cursor: "default",
        transition: "all 0.22s",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {icon ? (
        <img
          src={icon}
          alt={name}
          width={17}
          height={17}
          style={{
            flexShrink: 0,
            opacity: hovered ? 1 : 0.75,
            transition: "opacity 0.2s",
          }}
        />
      ) : (
        <span style={{ fontSize: 15, lineHeight: 1 }}>{emoji}</span>
      )}

      <span
        style={{
          fontSize: 13,
          fontWeight: 400,
          color: hovered ? "var(--text)" : "var(--muted)",
          transition: "color 0.2s",
          whiteSpace: "nowrap",
          fontFamily: "var(--font-mono)",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        {/* Header */}
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

        {/* 🔥 Core Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          style={{
            marginBottom: 40,
            padding: "20px 24px",
            borderRadius: "var(--radius-lg)",
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 12,
              fontFamily: "var(--font-mono)",
            }}
          >
            Core Stack
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <TechChip name="React" icon={`${DEV}/react/react-original.svg`} />
            <TechChip
              name="TypeScript"
              icon={`${DEV}/typescript/typescript-original.svg`}
            />
            <TechChip name="C#" icon={`${DEV}/csharp/csharp-original.svg`} />
            <TechChip
              name="ASP.NET Core"
              icon={`${DEV}/dotnetcore/dotnetcore-original.svg`}
            />
            <TechChip
              name="SQL Server"
              icon={`${DEV}/microsoftsqlserver/microsoftsqlserver-original.svg`}
            />
          </div>
        </motion.div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 500,
                    color: "var(--accent)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat.category}
                </p>
                <div
                  style={{ flex: 1, height: 1, background: "var(--border)" }}
                />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {cat.items.map((item) => (
                  <TechChip key={item.name} {...item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: 56,
            padding: "28px 32px",
            borderRadius: "var(--radius-lg)",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            display: "flex",
            gap: 22,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "var(--accent-light)",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              flexShrink: 0,
              border: "1px solid rgba(200,149,90,0.2)",
            }}
          >
            🤖
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-head)",
                fontWeight: 700,
                fontSize: 18,
                color: "var(--text)",
                marginBottom: 7,
              }}
            >
              AI & LLM Integration
            </p>

            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Exposed to integrating large language models at work and in
              personal projects. Familiar with OpenAI and Azure AI Services,
              prompt engineering, and AI-assisted workflows like document
              processing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
