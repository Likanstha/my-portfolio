// ProjectCard.tsx
import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[]; // Changed to an array of strings for tech stack
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  link,
}) => {
  return (
    <div className="group relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-black group-hover:bg-black bg-transparent h-full">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-sm text-gray-300 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {/* Mapping over techStack array */}
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm text-gray-900 px-4 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transform transition-all duration-300 ease-in-out">
            <i className="fas fa-link text-white text-2xl"></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
