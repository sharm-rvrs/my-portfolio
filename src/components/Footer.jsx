import { personal } from "../data";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg)", borderTop: "1px solid var(--border)",
      color: "var(--muted2)", padding: "24px 5%",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12,
    }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.03em" }}>
        © {new Date().getFullYear()} <span style={{ color: "var(--accent)" }}>Sharmaine Rioveros</span>
      </p>
      <div style={{ display: "flex", gap: 28 }}>
        {[
          { label: "GitHub",    href: personal.github },
          { label: "Email",     href: `mailto:${personal.email}` },
          { label: "Portfolio", href: personal.portfolio },
        ].map(l => (
          <a key={l.label} href={l.href}
            target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted2)", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"}
            onMouseLeave={e => e.target.style.color = "var(--muted2)"}
          >{l.label}</a>
        ))}
      </div>
    </footer>
  );
}
