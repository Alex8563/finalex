import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section
      className="text-white p-8 w-full flex flex-col items-center min-h-screen mt-20"
      id="about"
      style={{ padding: '2rem', textAlign: 'center', color: 'white' }}
    >
      <h2
        className="text-2xl font-bold text-center mb-4"
        data-aos="fade-up"
        style={{ fontFamily: "'Merriweather', serif", fontSize: '2.5rem', marginBottom: '1rem' }}
      >
        Sobre mí
      </h2>
      <p
        className="text-center mb-4"
        data-aos="fade-up"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.125rem', lineHeight: '1.6', maxWidth: '800px', marginBottom: '1rem' }}
      >
        Soy Alexander, un apasionado de la informática con especialización en diseño de software. Me encanta aprender nuevas tecnologías y aplicar mis conocimientos en proyectos interesantes.
      </p>
      <p
        className="text-center mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.125rem', lineHeight: '1.6', maxWidth: '800px', marginBottom: '1rem' }}
      >
        Actualmente, estoy estudiando ingeniería informática en la Universidad Autónoma Tomás Frías, donde he desarrollado habilidades en programación, diseño de interfaces, y gestión de proyectos. Mi objetivo es convertirme en un desarrollador de software completo y trabajar en proyectos que tengan un impacto positivo.
      </p>
      <h3
        className="text-xl font-bold text-center mb-4"
        data-aos="fade-up"
        data-aos-delay="300"
        style={{ fontFamily: "'Merriweather', serif", fontSize: '2rem', marginBottom: '1rem' }}
      >
        Habilidades
      </h3>
      <ul
        className="list-disc list-inside"
        data-aos="fade-up"
        data-aos-delay="400"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.125rem', lineHeight: '1.6', maxWidth: '800px', marginBottom: '1rem', textAlign: 'left' }}
      >
        <li>Programación en React, Node.js, y Python</li>
        <li>Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)</li>
        <li>Gestión de proyectos y trabajo en equipo</li>
        <li>Desarrollo de aplicaciones web y móviles</li>
        <li>Implementación de bases de datos SQL y NoSQL</li>
      </ul>
      <h3
        className="text-xl font-bold text-center mb-4"
        data-aos="fade-up"
        data-aos-delay="500"
        style={{ fontFamily: "'Merriweather', serif", fontSize: '2rem', marginBottom: '1rem' }}
      >
        Cursos Cursados
      </h3>
      <ul
        className="list-disc list-inside"
        data-aos="fade-up"
        data-aos-delay="600"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.125rem', lineHeight: '1.6', maxWidth: '800px', marginBottom: '1rem', textAlign: 'left' }}
      >
        <li>Ingeniería de Software en la Universidad Autónoma Tomás Frías</li>
        <li>Desarrollo Web en Instituto Tecnológico de Informática</li>
        <li>Programación Avanzada en Python en Instituto de Programación y Tecnología</li>
        <li>Diseño de Interfaces de Usuario (UI) en Centro de Diseño y Creatividad</li>
        <li>Gestión de Proyectos Ágiles en Instituto de Gestión de Proyectos</li>
      </ul>
      <p
        className="text-center mb-4"
        data-aos="fade-up"
        data-aos-delay="700"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.125rem', lineHeight: '1.6', maxWidth: '800px', marginBottom: '1rem' }}
      >
        En mi tiempo libre, disfruto de actividades como la lectura, el senderismo y la exploración de nuevas tecnologías. Siempre estoy buscando formas de mejorar y aprender cosas nuevas.
      </p>
      <p
        className="text-center mb-4"
        data-aos="fade-up"
        data-aos-delay="800"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: '1.125rem', lineHeight: '1.6', maxWidth: '800px', marginBottom: '1rem' }}
      >
        Algunas de mis tecnologías favoritas incluyen React, Node.js, y Python. Me encanta trabajar en proyectos de código abierto y colaborar con otros desarrolladores para resolver problemas complejos.
      </p>
      <Link to="/">
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-1 px-3 rounded-full mt-4 shadow-lg transform transition-transform duration-300 hover:scale-105 font-roboto"
          data-aos="fade-up"
          data-aos-delay="900"
          style={{
            background: 'linear-gradient(to right, #1e3c72, #2a5298)',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            marginTop: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s',
          }}
        >
          Volver
        </button>
      </Link>
    </section>
  );
}

export default About;
