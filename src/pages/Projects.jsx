import React from 'react';
import ProjectCard from '../components/ProjectCard';
import 'aos/dist/aos.css';
import proyecto1 from '../assets/proyecto1.png'; // Importa la imagen del primer proyecto
import proyecto2 from '../assets/proyecto2.png'; // Importa la imagen del segundo proyecto

const projects = [
  {
    name: 'Proyecto 1',
    description: 'Descripción del proyecto 1.',
    image: proyecto1, // Usa la imagen importada
    link: 'https://sunny-salamander-d9bec2.netlify.app/', // Enlace a tu proyecto
  },
  {
    name: 'Proyecto 2',
    description: 'Descripción del proyecto 2.',
    image: proyecto2, // Usa la imagen importada
    link: 'https://tu-enlace-al-proyecto2.com', // Enlace al nuevo proyecto
  },
];

function Projects() {
  return (
    <section className="text-black p-8 w-full flex flex-col items-center min-h-screen" id="projects">
      <h2 className="text-2xl font-bold text-center mb-4" data-aos="fade-up">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {projects.map((project) => (
          <div key={project.name} className="flex justify-center" data-aos="fade-up">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
