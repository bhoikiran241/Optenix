import { Link } from "react-router-dom";
import Optenix from "../assets/Optenix.png";
import "../style/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={Optenix} alt="Optenix Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
        </nav>

      </div>
    </header>
  );
}
