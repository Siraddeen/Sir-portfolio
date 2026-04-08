import { useState, useEffect } from "react";

const links = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="nav-logo">rs.dev</a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l} href={`#${l}`}>{l}</a>
        ))}
      </div>
    </nav>
  );
}
