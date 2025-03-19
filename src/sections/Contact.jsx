import React, { useRef } from "react";
import "../styles/stylesect/contact.css";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Contact = () => {
  const formRef = useRef(null); // Crea una referencia al formulario
  useIntersectionObserver("animate-on-scroll");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita la recarga de la página
    const formData = new FormData(formRef.current);
    // Aquí puedes manejar el envío del formulario (por ejemplo, enviar los datos a un servidor)
    console.log(formData.get("nombre"), formData.get("email"), formData.get("mensaje"));
    // Puedes agregar aquí la lógica para limpiar el formulario después del envío
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