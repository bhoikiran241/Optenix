// src/components/Services.jsx
import React from "react";
import "../style/Services.css";
import servicesData from "../data/servicesData";
const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h1 className="section-title">Our Solutions: Transforming How India Learns & Works</h1>

        {servicesData.map((service, idx) => (
          <div key={idx} className="service-category">
            <h2 className="category-title">{service.category}</h2>
            <p className="category-description">{service.description}</p>

            <div className="offerings-grid">
              {service.offerings.map((offer, index) => (
                <div key={index} className="offering-card">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="services-buttons">
          <button className="cta-button">Get a Free Quote</button>
          <button className="cta-button outline">Request a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
