// src/components/Careers.jsx
import React from "react";
import "../style/Careers.css";
import careersData from "../data/careersData";

const Careers = () => {
  return (
    <section className="careers-section">
      <div className="container">
        <h1 className="title">Build the Future of Digital India</h1>

        <p className="intro">
          At <strong>Optenix Tech Solutions</strong>, We aren't just selling
          screens; we are building the digital backbone of Indian schools and
          offices. Based in the heart of Pune’s tech hub, we are a fast-growing
          team of innovators, engineers, and problem-solvers dedicated to local
          manufacturing and world-class service.
        </p>

        {/* Core Values */}
        <div className="core-values">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Innovation for Impact:</strong> Products that transform
              learning and collaboration.
            </li>
            <li>
              <strong>Ownership & Autonomy:</strong> Freedom to lead initiatives
              and drive improvement.
            </li>
            <li>
              <strong>Excellence in Service:</strong> Reliable partner network
              covering 17,000+ pin codes.
            </li>
            <li>
              <strong>The "Make in India" Spirit:</strong> Proudly contributing
              to India’s tech self-reliance.
            </li>
          </ul>
        </div>

        {/* Life at Optenix */}
        <div className="life-at-optenix">
          <h2>Life at Optenix</h2>
          <ul>
            <li>
              <strong>Hands-on Experience:</strong> Work with cutting-edge
              4K/8K interactive hardware and AI-powered conferencing tech.
            </li>
            <li>
              <strong>Growth Opportunities:</strong> Rapid growth trajectory in a
              young partnership firm.
            </li>
            <li>
              <strong>Collaborative Environment:</strong> "One Team" philosophy
              with transparency and respect.
            </li>
            <li>
              <strong>Service Excellence:</strong> Industry-leading 3-year onsite
              warranty and real-world technical support.
            </li>
          </ul>
        </div>

        {/* Current Openings */}
        <div className="current-openings">
          <h2>Current Openings</h2>
          <p>
            We are always looking for passionate individuals. Even if you don't
            see a perfect match, feel free to send us your resume!
          </p>

          <div className="job-grid">
            {careersData.map((job, idx) => (
              <div key={idx} className="job-card">
                <h3>{job.role}</h3>
                <p>
                  <strong>Department:</strong> {job.department}
                </p>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
