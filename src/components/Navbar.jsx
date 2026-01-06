import { Link } from "react-router-dom";
import { useState } from "react";
import Optenix from "../assets/Optenix.png";
import "../style/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <img src={Optenix} alt="Optenix Logo" />
          </Link>

          {/* Search (desktop only via CSS) */}
          <div className="search-box">
            <input type="text" placeholder="Search for collections" />
            <button className="search-btn">🔍</button>
          </div>

          {/* Icons */}
          <div className="icons">
            <span>👤</span>
            <span>🛒</span>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

        </div>
      </header>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
      </nav>
    </>
  );
}
