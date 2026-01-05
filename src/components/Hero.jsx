import "../style/Hero.css";
import { Link } from "react-router-dom"; // import Link
import mainLogo from "../assets/main.webp";

export default function Hero() {
  return (
    <>
      <section className="hero-container">
        {/* Background handled in CSS */}
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
<br />

      {/* New Section for Logo */}
      <section className="hero-logo-section">
        <div className="hero-logo-wrapper">
          <Link to="/shop"> {/* Navigate to /shop page */}
            <img src={mainLogo} alt="Optenix Logo" className="hero-logo" />
            <div className="hero-logo-overlay">
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
