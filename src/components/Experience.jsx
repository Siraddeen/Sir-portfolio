import { experience } from "../data";

export default function Experience() {
  return (
    <section className="section-base" id="experience">
      <div className="section-label">03 — Experience</div>
      <h2 className="section-title fade-in">Work History</h2>

      <div className="exp-timeline">
        {experience.map((e, i) => (
          <div key={i} className={`exp-item fade-in delay-${i + 1}`}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "var(--amber)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              {e.date}
            </div>
            <div style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.2rem" }}>{e.title}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--cyan)", marginBottom: "0.8rem", fontFamily: "'Space Mono', monospace" }}>
              {e.company}
            </div>
            <ul style={{ listStyle: "none" }}>
              {e.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: "0.9rem", color: "#9ca3af", padding: "0.3rem 0", paddingLeft: "1rem", position: "relative", lineHeight: 1.6 }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--cyan)", fontSize: "0.7rem", top: "0.35rem" }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
