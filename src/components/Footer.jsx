export default function Footer() {
  return (
    <footer className="px-[clamp(1.5rem,8vw,8rem)] py-8 border-t border-border flex justify-between items-center flex-wrap gap-4 relative z-10">
      <div className="font-mono text-xs text-muted">
        Designed & built by <span className="text-cyan">R. Siraddeen</span> ·
        2025
      </div>
      <div className="font-mono text-xs text-muted">
        Stack: <span className="text-cyan">React · Vite · Tailwind CSS</span>
      </div>
    </footer>
  );
}
