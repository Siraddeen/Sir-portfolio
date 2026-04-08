import { stats } from "../data";

export default function About() {
  return (
    <section
      className="px-[clamp(1.5rem,8vw,8rem)] py-[clamp(4rem,10vw,8rem)] relative z-10"
      id="about"
    >
      <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
        <div className="w-[30px] h-px bg-cyan"></div>
        01 — About
      </div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-12 fade-in">
        Who I Am
      </h2>

      <div className="grid grid-cols-2 gap-20 items-center about-grid-responsive">
        {/* Text side */}
        <div className="fade-in delay-1">
          {[
            <>
              I'm a{" "}
              <span className="text-cyan font-semibold">
                Full Stack Developer
              </span>{" "}
              based in Tirupati, India — a Mechanical Engineering graduate who
              made a deliberate pivot into software development through
              self-driven learning and real-world project delivery.
            </>,
            <>
              My core stack is{" "}
              <span className="text-cyan font-semibold">
                React, Node.js, TypeScript, and MongoDB
              </span>
              . I've built and deployed a production-grade social media platform
              with JWT auth, REST APIs, and Cloudinary media integration — live
              on Render.
            </>,
            <>
              I think in systems. I care about clean code, honest engineering,
              and shipping things that actually work. I'm an{" "}
              <span className="text-cyan font-semibold">immediate joiner</span>,
              comfortable working remotely, and open to relocation.
            </>,
          ].map((text, i) => (
            <p key={i} className="text-xl text-gray-400 leading-relaxed mb-5">
              {text}
            </p>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`bg-card border border-border rounded-lg p-5 transition-colors duration-300 hover:border-cyan fade-in delay-${(i % 2) + 2}`}
              >
                <div className="text-3xl font-extrabold text-cyan leading-none mb-1">
                  {s.num}
                </div>
                <div className="text-sm text-muted font-mono">{s.label}</div>
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
            <div className="pl-5">
              <span className="prop">name</span>:{" "}
              <span className="str">"R. Siraddeen"</span>,
            </div>
            <div className="pl-5">
              <span className="prop">role</span>:{" "}
              <span className="str">"Full Stack Developer"</span>,
            </div>
            <div className="pl-5">
              <span className="prop">location</span>:{" "}
              <span className="str">"Tirupati, India"</span>,
            </div>
            <div className="pl-5">
              <span className="prop">stack</span>: [
            </div>
            <div className="pl-10">
              <span className="str">"React"</span>,{" "}
              <span className="str">"TypeScript"</span>,
            </div>
            <div className="pl-10">
              <span className="str">"Node.js"</span>,{" "}
              <span className="str">"MongoDB"</span>
            </div>
            <div className="pl-5">],</div>
            <div className="pl-5">
              <span className="prop">deployed</span>:{" "}
              <span className="val">true</span>,
            </div>
            <div className="pl-5">
              <span className="prop">openToWork</span>:{" "}
              <span className="val">true</span>,
            </div>
            <div className="pl-5">
              <span className="prop">noticePeriod</span>:{" "}
              <span className="num">0</span>,
            </div>
            <div className="pl-5">
              <span className="prop">remote</span>:{" "}
              <span className="val">true</span>,
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
