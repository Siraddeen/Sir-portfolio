import { useState, useEffect } from "react";

// const links = ["about", "skills", "experience", "projects", "contact"];
const links = [
  { name: "about" },
  { name: "skills" },
  { name: "experience" },
  { name: "projects", highlight: true },
  { name: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 px-8 py-5 flex justify-between items-center border-b border-transparent transition-all duration-300 ${scrolled ? "bg-nav-bg border-border backdrop-blur-[20px]" : ""}`}
    >
      {/* <a
        href="#home"
        className="font-mono text-base italic text-cyan tracking-[0.05em] no-underline"
      >
        Siraddeen
      </a> */}
      <a
        href="#home"
        className="font-mono text-base italic tracking-[0.05em] no-underline 
             bg-gradient-to-l from-cyan via-cyan2 to-amber 
             bg-[length:200%_200%] bg-clip-text text-transparent 
             animate-gradient"
      >
        Siraddeen
      </a>
      <div className="flex gap-8">
        {/* {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            className="text-xs text-muted no-underline tracking-[0.1em] uppercase font-mono transition-colors duration-200 hover:text-cyan"
          >
            {l}
          </a>
        ))} */}
        {links.map((l) => (
          <a
            key={l.name}
            href={`#${l.name}`}
            className={`text-xs no-underline tracking-[0.1em] uppercase font-mono transition-colors duration-200 
      ${l.highlight ? "text-orange-500 hover:text-orange-400" : "text-muted hover:text-cyan"}`}
          >
            {l.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
