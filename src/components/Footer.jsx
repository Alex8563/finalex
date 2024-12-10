import React from 'react';
import linkedinIcon from '../assets/imagen1.png';
import githubIcon from '../assets/imagen2.png';
import gitlabIcon from '../assets/imagen3.png';

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-4 text-center">
      <p>&copy; 2024 Alexander. Todos los derechos reservados.</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Contactos</h3>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/Alex8563" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 inline" />
          <span className="ml-2">GitHub</span>
        </a>
        <a href="https://gitlab.com/front-end3854750/INF-631" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-8 h-8 inline" />
          <span className="ml-2">GitLab</span>
        </a>
        <a href="https://www.linkedin.com/in/alexander-ortiz-780079341/" target="_blank" rel="noopener noreferrer">
          <img src={gitlabIcon} alt="GitLab" className="w-15 h-8 inline" />
          <span className="ml-2">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
