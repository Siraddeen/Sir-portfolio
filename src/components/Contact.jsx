import { personal } from "../data";

const links = [
  { icon: "✉️", label: "Email", value: "siraddeen15@gmail.com", href: `mailto:${personal.email}` },
  { icon: "⌥",  label: "GitHub", value: "github.com/Siraddeen", href: personal.github },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/siraddeen", href: personal.linkedin },
];

export default function Contact() {
  return (
    <section className="section-base" id="contact" style={{ background: "var(--bg2)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>
          06 — Contact
        </div>

        <h2 className="fade-in" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
          Let's Build<br />
          <span style={{ color: "var(--cyan)" }}>Something.</span>
        </h2>

        <p className="fade-in delay-1" style={{ fontSize: "1.05rem", color: "#6b7280", marginBottom: "3rem", lineHeight: 1.7 }}>
          Open to full-time roles, remote opportunities, and internships with PPO.
          Immediate joiner. No notice period.
        </p>

        <div className="fade-in delay-2" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          {links.map((l, i) => (
            <a key={i} href={l.href} target={l.href.startsWith("mailto") ? "_self" : "_blank"} rel="noreferrer" className="contact-card">
              <div style={{ fontSize: "1.3rem" }}>{l.icon}</div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {l.label}
                </div>
                <div style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: 600 }}>{l.value}</div>
              </div>
            </a>
          ))}
        </div>

        <a href={`mailto:${personal.email}`} className="btn-primary" style={{ fontSize: "0.9rem", padding: "1rem 2.5rem" }}>
          Say Hello →
        </a>
      </div>
    </section>
  );
}
