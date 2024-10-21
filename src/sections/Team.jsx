import React, { useRef } from "react";
import '../styles/stylesect/team.css';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Team = () => {
  useIntersectionObserver("animate-on-scroll");

  const teamMembers = [
    { name: "Jhon Avila", role: "Gerente de Proyectos" },
    { name: "Ricardo Herrera", role: "Desarrollador Líder" },
    { name: "Nicolas Herrera", role: "Desarrollador Senior" },
    { name: "Nicolas Jaimes", role: "Desarrollador Senior" },
    { name: "Steven Montaño", role: "Arquitecto Backend Senior" },
    { name: "Lina Sanchez", role: "Project Manager" },
    { name: "Alexis Avila", role: "Desarrollador Junior" },
  ];

  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add('active');
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 4;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="equipo" className="team-section">
      <div className="team-container animate-on-scroll">
        <h2 className="team-title animate-on-scroll">Meet Our Team</h2>
        <div
          className="slider-container"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="slider">
            {teamMembers.concat(teamMembers).map((member, index) => (
              <div key={index} className="team-card animate-on-scroll" style={{ "--i": index }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
