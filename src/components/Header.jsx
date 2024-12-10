import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-transform duration-300 ${isScrollingDown ? 'transform -translate-y-full' : ''}`}>
      <nav className="bg-gray-700 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <span className="text-2xl font-bold">Alexander - Portafolio</span>
          <ul className="flex space-x-6">
            <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:underline">Inicio</Link></li>
            <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:underline">Habilidades</Link></li>
            <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Proyectos</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">Contacto</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
