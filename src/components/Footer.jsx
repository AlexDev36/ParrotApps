import React from "react";
import "../styles/stylecomp/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <p className="copyright">
            © 2024 ParrotApps. All rights reserved.
          </p>
          <div className="nav">
            <a href="/politica-de-privacidad" className="navLink">
              Privacy Policy
            </a>
            <a href="/terminos-de-servicio" className="navLink">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
