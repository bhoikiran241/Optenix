// src/components/About.jsx
import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO / INTRO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1>Driving Digital Transformation in Education & Enterprise</h1>
          <p>
            Optenix Tech Solutions is a Pune-based OEM and technology service
            provider redefining how India learns and works through intelligent,
            affordable, and future-ready digital solutions.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="container two-column">
          <div>
            <h2>Who We Are</h2>
            <p>
              Optenix Tech Solutions specializes in digital classroom and
              corporate conferencing solutions. As a trusted
              <strong> Original Equipment Manufacturer (OEM)</strong>, we design
              and manufacture interactive displays and AV equipment under the
              <strong> Make in India</strong> initiative.
            </p>
          </div>
          <div className="highlight-box">
            <p>
              From hardware manufacturing to complete system integration,
              Optenix delivers reliable, scalable technology built for Indian
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section light">
        <div className="container">
          <h2>What We Do</h2>

          <div className="card-grid">
            <div className="info-card">
              <h3>Interactive Hardware</h3>
              <p>
                Design and manufacture 4K/8K Interactive Flat Panels, digital
                podiums, AI cameras, and professional AV equipment.
              </p>
            </div>

            <div className="info-card">
              <h3>Digital Platforms</h3>
              <p>
                Develop LMS, ERP, and cloud-based systems that simplify teaching,
                learning, and institutional management.
              </p>
            </div>

            <div className="info-card">
              <h3>Integrated Solutions</h3>
              <p>
                Deliver end-to-end smart classrooms, hybrid learning setups, and
                automated conference rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & INNOVATION */}
      <section className="about-section">
        <div className="container two-column reverse">
          <div>
            <h2>Technology & Innovation</h2>
            <p>
              Optenix integrates cutting-edge technologies such as
              <strong> Artificial Intelligence (AI), Virtual Reality (VR),
              automation, and online systems</strong> into traditional education,
              corporate training, and skill development.
            </p>
            <p>
              Our solutions are designed to be intuitive, scalable, and
              affordable—ensuring technology enhances learning rather than
              complicating it.
            </p>
          </div>

          <ul className="tech-list">
            <li>AI-powered tracking & analytics</li>
            <li>VR & immersive learning tools</li>
            <li>Cloud-based LMS & ERP platforms</li>
            <li>Hybrid & remote collaboration systems</li>
          </ul>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="about-section light">
        <div className="container center-text">
          <h2>Our Mission</h2>
          <p>
            To make education and professional learning more
            <strong> accessible, engaging, personalized, and affordable</strong>
            for students, teachers, institutions, and organizations across
            India.
          </p>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="about-section">
        <div className="container">
          <h2>Our Impact</h2>

          <div className="stats-grid">
            <div className="stat">
              <h3>Education</h3>
              <p>Enhanced learning outcomes through interactive technology</p>
            </div>
            <div className="stat">
              <h3>Institutions</h3>
              <p>Streamlined administration and digital transformation</p>
            </div>
            <div className="stat">
              <h3>Enterprises</h3>
              <p>Smarter collaboration and automated workspaces</p>
            </div>
            <div className="stat">
              <h3>India</h3>
              <p>Supporting self-reliant, locally manufactured technology</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
