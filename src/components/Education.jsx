import { education, certifications } from "../data";

export default function Education() {
  return (
    <section
      className="px-[clamp(1.5rem,8vw,8rem)] py-[clamp(4rem,10vw,8rem)]"
      id="education"
    >
      <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
        <div className="w-[30px] h-px bg-cyan"></div>
        05 — Education
      </div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-12 fade-in">
        Background
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {/* Degree card */}
        <div className="bg-card border border-border rounded-lg p-6 fade-in">
          <div className="bg-cyan/10 text-cyan px-3 py-1 rounded-full text-xs font-mono mb-4 inline-block">
            {education.grade}
          </div>
          <div className="text-lg font-bold mb-1">{education.degree}</div>
          <div className="text-sm text-cyan mb-2 font-mono">
            {education.institution}
          </div>
          <div className="text-sm text-muted mb-4">{education.year}</div>
          <div className="text-sm text-muted leading-relaxed">
            {education.note}
          </div>
        </div>

        {/* Certifications card */}
        <div className="bg-card border border-border rounded-lg p-6 fade-in delay-1">
          <div className="bg-cyan/10 text-cyan px-3 py-1 rounded-full text-xs font-mono mb-4 inline-block">
            Certifications
          </div>
          <div className="text-lg font-bold mb-6">Training & Simulations</div>
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 bg-cyan rounded-full flex-shrink-0 mt-2" />
                <div className="text-sm text-gray-400">
                  <strong className="text-text font-semibold">{c.title}</strong>
                  {" — "}
                  {c.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
