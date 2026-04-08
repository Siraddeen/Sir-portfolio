export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem clamp(1.5rem, 8vw, 8rem)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "var(--muted)" }}>
        Designed & built by{" "}
        <span style={{ color: "var(--cyan)" }}>R. Siraddeen</span> · 2025
      </div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "var(--muted)" }}>
        Stack: <span style={{ color: "var(--cyan)" }}>React · Vite · Tailwind CSS</span>
      </div>
    </footer>
  );
}
