import { skills } from "../data";

export default function Skills() {
  return (
    <section
      className="px-[clamp(1.5rem,8vw,8rem)] py-[clamp(4rem,10vw,8rem)] bg-bg2"
      id="skills"
    >
      <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
        <div className="w-[30px] h-px bg-cyan"></div>
        02 — Skills
      </div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-12 fade-in">
        Tech Stack
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {skills.map((s, i) => (
          <div
            key={i}
            className={`bg-card border border-border rounded-lg p-6 fade-in delay-${(i % 3) + 1}`}
          >
            <div className="text-3xl mb-4">{s.icon}</div>
            <div className="text-lg font-bold mb-2">{s.name}</div>
            <div className="text-sm text-muted leading-relaxed mb-4">
              {s.desc}
            </div>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-cyan/10 text-cyan px-2 py-1 rounded text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
