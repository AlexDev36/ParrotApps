import React from "react";
import "../styles/stylecomp/Button.css";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClass = "button";
  const variantClass = variant === "primary" ? "primary" : "secondary";

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
