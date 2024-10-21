import React from "react";
import '../styles/stylesect/services.css';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Services = () => {
  useIntersectionObserver("animate-on-scroll");

  return (
    <section id="servicios" className="services-section">
      <div className="services-container animate-on-scroll">
        <h2 className="services-title animate-on-scroll">Our Services</h2>
        <div className="services-grid">
          <div className="card animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <h3 className="card-title">Web Development</h3>
            <p className="card-description">
              Custom web applications tailored to your business needs. We use the latest technologies to ensure scalability and performance.
            </p>
          </div>
          <div className="card animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <h3 className="card-title">Mobile App Development</h3>
            <p className="card-description">
              Native and cross-platform mobile applications that provide seamless user experiences across all devices.
            </p>
          </div>
          <div className="card animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <h3 className="card-title">Cloud Solutions</h3>
            <p className="card-description">
              Leverage the power of cloud computing with our expertise in AWS, Azure, and Google Cloud Platform.
            </p>
          </div>
          <div className="card animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <h3 className="card-title">Web Development</h3>
            <p className="card-description">
              Custom web applications tailored to your business needs. We use the latest technologies to ensure scalability and performance.
            </p>
          </div>
          <div className="card animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <h3 className="card-title">Mobile App Development</h3>
            <p className="card-description">
              Native and cross-platform mobile applications that provide seamless user experiences across all devices.
            </p>
          </div>
          <div className="card animate-on-scroll" style={{ animationDelay: "0.8s" }}>
            <h3 className="card-title">Cloud Solutions</h3>
            <p className="card-description">
              Leverage the power of cloud computing with our expertise in AWS, Azure, and Google Cloud Platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
