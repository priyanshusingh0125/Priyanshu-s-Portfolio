import React from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project_card = ({ img, title, desc, tech, liveLink, githubLink }) => {
  return (
    <div className="bg-[#111936] border border-white/10 rounded-2xl p-6 shadow-lg w-full max-w-md 
                    hover:scale-105 transition-all duration-300">

      {/* Project Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-5 shadow-md"
      />

      {/* Title */}
      <h2 className="text-xl font-semibold text-white">{title}</h2>

      {/* Description */}
      <p className="text-gray-300 text-sm mt-2 mb-4">{desc}</p>

      {/* Tech Stack Icons */}
      <div className="flex items-center gap-3 mb-5">
        {tech?.includes("react") && <SiReact className="text-2xl text-cyan-400" />}
        {tech?.includes("next") && <SiNextdotjs className="text-2xl text-white" />}
        {tech?.includes("tailwind") && <SiTailwindcss className="text-2xl text-blue-400" />}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <a
          href={liveLink}
          target="_blank"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl text-white text-sm"
        >
          Live Demo <FaExternalLinkAlt />
        </a>

        <a
          href={githubLink}
          target="_blank"
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-xl text-white text-sm"
        >
          GitHub <SiGithub />
        </a>
      </div>
    </div>
  );
};

export default Project_card;

