import React from "react";
import "../styles/stylecomp/Header.css";

const Header = ({ isMenuOpen, toggleMenu }) => {
  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src="https://png.pngtree.com/png-vector/20240320/ourmid/pngtree-colorful-parrot-head-in-dark-bronze-and-azure-neonpunk-style-lith-png-image_12179527.png"
            className="imagen-reducida"
            alt="Parrot logo"
            onClick={handleLogoClick} // Ajustar para que lleve a la página principal
          ></img>
        </div>
        <nav className="nav-links">
          <a href="#servicios" className="navLink" onClick={(e) => handleNavigation(e, '#servicios')}>Services</a>
          <a href="#equipo" className="navLink" onClick={(e) => handleNavigation(e, '#equipo')}>Our Team</a>
          <a href="#contacto" className="navLink" onClick={(e) => handleNavigation(e, '#contacto')}>Contact Us</a>
          <a href="#contacto" className="contact-button" onClick={(e) => handleNavigation(e, '#contacto')}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
