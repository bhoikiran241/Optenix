// src/components/Contact.jsx
import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="title">Get in Touch</h1>
        <p className="subtitle">
          Reach out to us for queries, partnerships, or product demonstrations.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Name</h3>
            <p>Sneha Sahare</p>
          </div>

          <div className="contact-card">
            <h3>Contact Number</h3>
            <p>+91 9766855918</p>
          </div>

          <div className="contact-card">
            <h3>Email</h3>
            <p>sneha.sahare@optenix.in</p>
            <p>vinayak.raut@optenix.in</p>
          </div>

          <div className="contact-card">
            <h3>Website</h3>
            <p>www.optenix.in</p>
          </div>

          <div className="contact-card full-width">
            <h3>Address</h3>
            <p>
              428, Gera's Imperium Rise, Near Wipro Circle Metro Station, Hinjewadi Phase II, Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
