import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 mb-4">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <img
          src={project.image}
          alt={`Vista previa de ${project.name}`}
          className="w-full mb-2 filter grayscale hover:filter-none transition-all duration-500"
        />
        <h3 className="font-bold">{project.name}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
