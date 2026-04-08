import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section-base" id="projects" style={{ background: "var(--bg2)" }}>
      <div className="section-label">04 — Projects</div>
      <h2 className="section-title fade-in">What I've Built</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
        {projects.map((p, i) => (
          <div key={i} className={`project-card fade-in delay-${i + 1}`}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.15em", marginBottom: "0.8rem" }}>
              {p.num}
            </div>
            <div style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.8rem" }}>{p.title}</div>
            <div style={{ fontSize: "0.88rem", color: "#9ca3af", lineHeight: 1.7, marginBottom: "1.2rem", flex: 1 }}>
              {p.desc}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {p.stack.map((tag, j) => (
                <span key={j} className="project-tag">{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                  Live Demo →
                </a>
              )}
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                  GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
