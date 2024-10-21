import React from "react";
import '../styles/stylesect/content.css';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Content = () => {
  useIntersectionObserver("animate-on-scroll");

  return (
    <section className="content-section">
      <div className="content-container animate-on-scroll">
        <h1 className="content-title animate-on-scroll">Elevate Your Digital Presence</h1>
        <p className="content-description animate-on-scroll">
          We provide cutting-edge development services to bring your ideas to life. From web applications to mobile solutions, we've got you covered.
        </p>
        <div className="button-group animate-on-scroll">
          <button className="button primary">Get Started</button>
          <button className="button secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Content;
