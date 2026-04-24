import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero">Lakshya</a>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;