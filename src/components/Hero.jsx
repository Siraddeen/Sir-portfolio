import { personal } from "../data";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
        {/* Status tag */}
        <div className="hero-tag">
          <div className="dot" />
          Available for work · Immediate joiner
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          R.<br />
          <span style={{ color: "var(--cyan)" }}>Siraddeen</span>
        </h1>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            color: "var(--muted)",
            marginBottom: "1.5rem",
            letterSpacing: "0.05em",
          }}
        >
          Full Stack Developer &nbsp;/&nbsp;{" "}
          <span style={{ color: "var(--amber)" }}>{personal.tagline}</span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#9ca3af",
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            fontWeight: 400,
          }}
        >
          Building production-ready web applications — from clean APIs to
          responsive frontends. Based in Tirupati, open to remote globally.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary">View Projects ↓</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        Scroll
        <div className="scroll-line" />
      </div>
    </section>
  );
}
