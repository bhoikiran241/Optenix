import { Link } from "react-router-dom";
import Optenix from "../assets/Optenix.png";

export default function Navbar() {
  return (
    <>
      {/* Main header */}
      <div className="navbar">
        <Link to="/" className="logo-link">
          <img
            src={Optenix}
            alt="Optenix Logo"
            className="logo-img"
          />
        </Link>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for collections"
        />
        <button className="search-btn">
    🔍
        </button>
      </div>


      <div className="icons">
          <span>👤</span>
          <span>🛒</span>
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
      </div>
    </>
  );
}
