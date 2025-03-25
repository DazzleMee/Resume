import React from "react";

interface ProjectCardProps {
    title :string;
    description: string;
  tags: string[];
  buttonText: string;
  onButtonClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, buttonText, onButtonClick }) => {
    return (
        <div className="border-2 border-black rounded-lg p-6 shadow-md max-w-md bg-white">
        {/* Project Title */}
        <h2 className="text-xl font-bold text-black" >{title}</h2>
        {/* Project Description */}
        <p className="text-gray-500 mb-4">{description}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="border px-3 py-1 rounded-full text-sm text-gray-800">
              {tag}
            </span>
          ))}
        </div>
        {/* Button */}
        {/* <button
          className="bg-black text-white px-5 py-2 rounded-md font-semibold"
          onClick={onButtonClick}
        >
          {buttonText}
        </button> */}
      </div>
    );
  };

export default ProjectCard;
