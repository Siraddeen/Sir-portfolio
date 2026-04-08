import { stats } from "../data";

export default function About() {
  return (
    <section className="section-base" id="about">
      <div className="section-label">01 — About</div>
      <h2 className="section-title fade-in">Who I Am</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="about-grid-responsive"
      >
        {/* Text side */}
        <div className="fade-in delay-1">
          {[
            <>I'm a <span style={{ color: "var(--cyan)", fontWeight: 600 }}>Full Stack Developer</span> based in Tirupati, India — a Mechanical Engineering graduate who made a deliberate pivot into software development through self-driven learning and real-world project delivery.</>,
            <>My core stack is <span style={{ color: "var(--cyan)", fontWeight: 600 }}>React, Node.js, TypeScript, and MongoDB</span>. I've built and deployed a production-grade social media platform with JWT auth, REST APIs, and Cloudinary media integration — live on Render.</>,
            <>I think in systems. I care about clean code, honest engineering, and shipping things that actually work. I'm an <span style={{ color: "var(--cyan)", fontWeight: 600 }}>immediate joiner</span>, comfortable working remotely, and open to relocation.</>,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: "1.05rem", color: "#9ca3af", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              {text}
            </p>
          ))}

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "2rem" }}>
            {stats.map((s, i) => (
              <div key={i} className={`stat-card fade-in delay-${(i % 2) + 2}`}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--cyan)", lineHeight: 1, marginBottom: "0.3rem" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)", fontFamily: "'Space Mono', monospace" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code block side */}
        <div className="fade-in delay-2">
          <div className="code-block">
            <div className="code-glow" />
            <div className="dots">● ● ●</div>
            <div>
              <span className="cm">// siraddeen.config.js</span>
            </div>
            <br />
            <div>
              <span className="kw">const </span>
              <span className="prop">developer</span> = {"{"}
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">name</span>: <span className="str">"R. Siraddeen"</span>,
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">role</span>: <span className="str">"Full Stack Developer"</span>,
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">location</span>: <span className="str">"Tirupati, India"</span>,
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">stack</span>: [
            </div>
            <div style={{ paddingLeft: "2.4rem" }}>
              <span className="str">"React"</span>, <span className="str">"TypeScript"</span>,
            </div>
            <div style={{ paddingLeft: "2.4rem" }}>
              <span className="str">"Node.js"</span>, <span className="str">"MongoDB"</span>
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>],</div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">deployed</span>: <span className="val">true</span>,
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">openToWork</span>: <span className="val">true</span>,
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">noticePeriod</span>: <span className="num">0</span>,
            </div>
            <div style={{ paddingLeft: "1.2rem" }}>
              <span className="prop">remote</span>: <span className="val">true</span>,
            </div>
            <div>{"}"}</div>
            <br />
            <div>
              <span className="kw">export default </span>developer;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
