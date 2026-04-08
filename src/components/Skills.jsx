import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section-base" id="skills" style={{ background: "var(--bg2)" }}>
      <div className="section-label">02 — Skills</div>
      <h2 className="section-title fade-in">Tech Stack</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {skills.map((s, i) => (
          <div key={i} className={`skill-card fade-in delay-${(i % 3) + 1}`}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{s.icon}</div>
            <div style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>{s.name}</div>
            <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "0.8rem" }}>
              {s.desc}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {s.tags.map((tag, j) => (
                <span key={j} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
