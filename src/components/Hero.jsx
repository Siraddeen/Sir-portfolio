import { personal } from "../data";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-[clamp(1.5rem,8vw,8rem)] relative overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,204,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,204,0.04)_1px,transparent_1px)] bg-[length:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,229,204,0.08)_0%,transparent_70%)] -top-[100px] -right-[100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(245,166,35,0.05)_0%,transparent_70%)] bottom-0 left-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-[900px]">
        {/* Status tag */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan border border-border px-3 py-1.5 rounded-full mb-8 tracking-[0.08em] bg-[rgba(0,229,204,0.05)]">
          <div className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
          {/* Available for work · Immediate joiner · */}

          <span className="flex flex-col">
            <span>Available for work · Immediate joiner</span>
            <span>
              I don’t just build products — I pitch, sell, and deliver them
              end-to-end
            </span>
          </span>
        </div>

        {/* Name */}
        <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-6">
          R.
          <br />
          <span className="text-cyan">Siraddeen</span>
        </h1>

        {/* Subtitle */}
        <div className="font-mono text-[clamp(0.85rem,2vw,1rem)] text-muted mb-6 tracking-[0.05em]">
          Full Stack Developer &nbsp;/&nbsp;{" "}
          <span className="text-amber">{personal.tagline}</span>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-400 max-w-[520px] leading-relaxed mb-10 font-normal">
          Building production-ready web applications — from clean APIs to
          responsive frontends. Based in Tirupati, open to remote globally.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-cyan text-bg font-bold text-sm px-7 py-3 rounded text-decoration-none tracking-[0.05em] font-mono transition-all duration-200 hover:bg-[#00f5da] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,229,204,0.3)]"
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent text-text font-semibold text-sm px-7 py-3 rounded border border-border text-decoration-none tracking-[0.05em] font-mono transition-all duration-200 hover:border-cyan hover:text-cyan hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-xs text-muted tracking-[0.15em] uppercase z-10">
        Scroll
        <div className="w-px h-10 bg-gradient-to-b from-cyan to-transparent animate-scroll" />
      </div>
    </section>
  );
}
