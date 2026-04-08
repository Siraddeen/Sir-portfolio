import { personal } from "../data";

const links = [
  {
    icon: "✉️",
    label: "Email",
    value: "siraddeen15@gmail.com",
    href: `mailto:${personal.email}`,
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/Siraddeen",
    href: personal.github,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/siraddeen",
    href: personal.linkedin,
  },
];

export default function Contact() {
  return (
    <section
      className="px-[clamp(1.5rem,8vw,8rem)] py-[clamp(4rem,10vw,8rem)] bg-bg2"
      id="contact"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
          <div className="w-[30px] h-px bg-cyan"></div>
          06 — Contact
        </div>

        <h2 className="fade-in text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-4">
          Let's Build
          <br />
          <span className="text-cyan">Something.</span>
        </h2>

        <p className="fade-in delay-1 text-lg text-muted mb-12 leading-relaxed">
          Open to full-time roles, remote opportunities, and internships with
          PPO. Immediate joiner. No notice period.
        </p>

        <div className="fade-in delay-2 flex flex-wrap justify-center gap-4 mb-12">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target={l.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-cyan transition-colors"
            >
              <div className="text-xl">{l.icon}</div>
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-[0.1em]">
                  {l.label}
                </div>
                <div className="text-sm text-text font-semibold">{l.value}</div>
              </div>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personal.email}`}
          className="bg-cyan text-bg font-bold text-sm px-6 py-3 rounded hover:bg-cyan2 transition-colors inline-block"
        >
          Say Hello →
        </a>
      </div>
    </section>
  );
}
