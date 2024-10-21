import React from "react";
import "../styles/stylecomp/Card.css";

const Card = ({ title, description, className = "" }) => {
  return (
    <div className={`card hover ${className}`}>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
