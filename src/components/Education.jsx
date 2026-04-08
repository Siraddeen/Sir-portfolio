import { education, certifications } from "../data";

export default function Education() {
  return (
    <section className="section-base" id="education">
      <div className="section-label">05 — Education</div>
      <h2 className="section-title fade-in">Background</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {/* Degree card */}
        <div className="edu-card fade-in">
          <div className="edu-badge">{education.grade}</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.3rem" }}>{education.degree}</div>
          <div style={{ fontSize: "0.85rem", color: "var(--cyan)", marginBottom: "0.4rem", fontFamily: "'Space Mono', monospace" }}>
            {education.institution}
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.8rem" }}>{education.year}</div>
          <div style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{education.note}</div>
        </div>

        {/* Certifications card */}
        <div className="edu-card fade-in delay-1">
          <div className="edu-badge">Certifications</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.8rem" }}>Training & Simulations</div>
          <div>
            {certifications.map((c, i) => (
              <div key={i} className="cert-item">
                <div style={{ width: 6, height: 6, background: "var(--cyan)", borderRadius: "50%", flexShrink: 0 }} />
                <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                  <strong style={{ color: "var(--text)", fontWeight: 600 }}>{c.title}</strong>
                  {" — "}{c.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
