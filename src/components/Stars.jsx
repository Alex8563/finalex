import React, { useEffect } from 'react';
import '../styles/Stars.css'; // Asegúrate de que la ruta es correcta

const Stars = () => {
  useEffect(() => {
    const numStars = 100;
    const starsContainer = document.querySelector('.stars');

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 2 + 2}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starsContainer.appendChild(star);
    }
  }, []);

  return <div className="stars"></div>;
};

export default Stars;
