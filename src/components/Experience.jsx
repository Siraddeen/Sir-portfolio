import { experience } from "../data";

export default function Experience() {
  return (
    <section
      className="px-[clamp(1.5rem,8vw,8rem)] py-[clamp(4rem,10vw,8rem)]"
      id="experience"
    >
      <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
        <div className="w-[30px] h-px bg-cyan"></div>
        03 — Experience
      </div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-12 fade-in">
        Work History
      </h2>

      <div className="flex flex-col gap-8">
        {experience.map((e, i) => (
          <div key={i} className={`fade-in delay-${i + 1}`}>
            <div className="font-mono text-xs text-amber tracking-[0.1em] uppercase mb-1">
              {e.date}
            </div>
            <div className="text-xl font-bold mb-1">{e.title}</div>
            <div className="text-sm text-cyan mb-4 font-mono">{e.company}</div>
            <ul className="list-none space-y-2">
              {e.bullets.map((b, j) => (
                <li
                  key={j}
                  className="text-sm text-gray-400 py-1 pl-4 relative leading-relaxed"
                >
                  <span className="absolute left-0 text-cyan text-xs top-1">
                    ▸
                  </span>
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
