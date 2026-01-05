import React from "react";
import "../style/Footer.css"; // Make sure to create this CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Optenix</h3>
          <p>Your one-stop shop for the latest gadgets and accessories. Fast shipping, easy returns, and excellent support!</p>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/help">Help & Contact</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for exclusive offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Optenix. All rights reserved.</p>
      </div>
    </footer>
  );
}
