import "../style/Hero.css";
import { Link } from "react-router-dom";
import mainLogo from "../assets/main.jpg";
import bgimg from "../assets/bg1.jpg";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-container">

        {/* Left Identity */}
        <div className="hero-identity">
          <span className="hero-name-small">Atharv</span>
          <h1 className="hero-name">Wavare</h1>
        </div>

        {/* Right Tagline */}
        <div className="hero-tagline">
          <span>ENGINEERED TO EVOLVE</span>
        </div>

        {/* Main Card */}
        <div className="hero-card">
          <h2>Welcome to Optenix</h2>
          <p>Building future-ready digital solutions for education & enterprises</p>

          <div className="hero-actions">
            <Link to="/services" className="btn-primary">Our Solutions</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* LOGO SECTION */}
      <section className="hero-logo-section">
        <Link to="/shop" className="hero-logo-wrapper">
          <img src={mainLogo} alt="Optenix Logo" />
        </Link>
      </section>

      {/* INFO SECTION */}
      <section className="hero-info-section">
        <div className="hero-info-container">

          <div className="hero-info-image">
            <img src={bgimg} alt="Optenix Solutions" />
          </div>

          <div className="hero-info-text">
            <h2>Transforming Education & Enterprises</h2>
            <p>
              Optenix Tech Solutions is a <strong>Make in India OEM</strong> and
              digital transformation partner delivering intelligent,
              scalable, and future-ready platforms.
            </p>

            <ul>
              <li>Smart Classrooms & Hybrid Learning</li>
              <li>AI-Powered Conferencing Systems</li>
              <li>LMS, ERP & Enterprise Platforms</li>
            </ul>

            <Link to="/services" className="btn-primary">
              Explore Our Solutions
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
