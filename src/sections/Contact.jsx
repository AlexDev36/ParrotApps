import React, { useRef } from "react";
import "../styles/stylesect/contact.css";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null); // Crea una referencia al formulario
  useIntersectionObserver("animate-on-scroll");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de la página

    // Enviar el formulario usando emailjs
    emailjs.sendForm('service_xqafkvk', 'template_jg5qhfa', formRef.current, 'LEhdpjr6aOCnK2wdx')
      .then((result) => {
        console.log(result.text);
        alert("Mensaje enviado correctamente");
        formRef.current.reset(); // Limpia el formulario después del envío
      }, (error) => {
        console.log(error.text);
        alert("Error al enviar el mensaje");
      });
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container contact animate-on-scroll">
        <h2 className="section-title animate-on-scroll">Contact Us</h2>
        <form ref={formRef} className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              id="nombre"
              className="form-input"
              type="text"
              name="nombre" // Agrega el atributo name
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
              name="email" // Agrega el atributo name
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
              name="mensaje" // Agrega el atributo name
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