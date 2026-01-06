import "../style/Hero.css";
import { Link } from "react-router-dom";
import mainLogo from "../assets/main.jpg";
import bgimg from "../assets/bg1.jpg"

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="hero-container">
        <div className="hero-bg"></div>
        <div className="hero-bg-image"></div>

        <div className="hero-text-left">
          <p>FROM VISION TO</p>
          <h1>INNOVATION</h1>
        </div>

        <div className="hero-text-right">
          <h2>ENGINEERED TO EVOLVE</h2>
        </div>

        <div className="hero-card">
          <h2>Welcome to Optenix</h2>
          <p>Building future-ready digital solutions</p>
        </div>
      </section>

      {/* LOGO SECTION */}
      <section className="hero-logo-section">
        <div className="hero-logo-wrapper">
          <Link to="/shop">
            <img src={mainLogo} alt="Optenix Logo" className="hero-logo" />
            <div className="hero-logo-overlay"></div>
          </Link>
        </div>
      </section>

      {/* 🔥 NEW IMAGE + TEXT SECTION */}
      <section className="hero-info-section">
        <div className="hero-info-container">

          {/* IMAGE */}
          <div className="hero-info-image">
            <img src={bgimg} alt="Optenix Solutions" />
          </div>

          {/* TEXT */}
          <div className="hero-info-text">
            <h2>Transforming Education & Enterprises</h2>
            <p>
              Optenix Tech Solutions is a Make in India OEM and digital
              transformation partner delivering interactive classrooms,
              AI-powered conferencing, and intelligent learning platforms.
            </p>

            <ul>
              <li>✔ Smart Classrooms & Hybrid Learning</li>
              <li>✔ AI-Powered Conference Solutions</li>
              <li>✔ LMS, ERP & Digital Platforms</li>
            </ul>

            <Link to="/services" className="hero-info-btn">
              Explore Our Solutions
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
