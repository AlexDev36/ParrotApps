import React from "react";
import "../styles/stylesect/contact.css";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Contact = () => {
  useIntersectionObserver("animate-on-scroll");

  return (
    <section id="contacto" className="contact-section">
      <div className="container contact animate-on-scroll">
        <h2 className="section-title animate-on-scroll">Contact Us</h2>
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              id="nombre"
              className="form-input"
              type="text"
              placeholder="Tu Nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="tu@ejemplo.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="form-input"
              rows={4}
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
