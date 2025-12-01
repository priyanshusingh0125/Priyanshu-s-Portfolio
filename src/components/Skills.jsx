import React from "react";
import {
  SiNginx,
  SiStrapi,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiWordpress,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-4xl sm:text-5xl text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-4xl sm:text-5xl text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl sm:text-5xl text-yellow-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-4xl sm:text-5xl text-purple-500" /> },
    { name: "WordPress", icon: <SiWordpress className="text-4xl sm:text-5xl text-blue-300" /> },
    { name: "MySQL", icon: <SiMysql className="text-4xl sm:text-5xl text-blue-500" /> },
    { name: "PHP", icon: <SiPhp className="text-4xl sm:text-5xl text-indigo-300" /> },
    { name: "React", icon: <SiReact className="text-4xl sm:text-5xl text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-4xl sm:text-5xl text-green-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-4xl sm:text-5xl text-teal-300" /> },
    { name: "Git", icon: <SiGit className="text-4xl sm:text-5xl text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-4xl sm:text-5xl text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-4xl sm:text-5xl text-pink-400" /> },

    // old ones (still included)
    { name: "Nginx", icon: <SiNginx className="text-4xl sm:text-5xl text-green-400" /> },
    { name: "Strapi", icon: <SiStrapi className="text-4xl sm:text-5xl text-purple-400" /> },
    { name: "Next JS", icon: <SiNextdotjs className="text-4xl sm:text-5xl text-white" /> },
  ];

  const loopSkills = [...skills, ...skills];

  return (
    <div id="skills" className="flex flex-col items-center justify-center px-4 sm:px-6 py-20 text-white w-full">

      {/* Section Title */}
      <div className="relative flex items-center justify-center w-full mb-12">
        <div className="absolute h-[2px] bg-[#1b1440] w-[40%] sm:w-[30%]"></div>
        <div className="relative bg-[#1b1440] px-6 sm:px-8 py-2 rounded-lg z-10">
          <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold">Skills</h2>
        </div>
      </div>

      {/* Infinite Ticker */}
      <div className="overflow-hidden w-full max-w-7xl">
        <div className="flex items-center gap-4 sm:gap-7 animate-scroll hover:pause-scroll">
          {loopSkills.map((skill, index) => (
            <div
              key={index}
              className="min-w-[120px] sm:min-w-[160px] h-[110px] sm:h-[130px] bg-[#111936] border border-white/5 rounded-2xl 
              flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
            >
              {skill.icon}
              <p className="text-white text-xs sm:text-sm mt-3">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          .animate-scroll {
            display: flex;
            animation: scroll 28s linear infinite;
          }
          .pause-scroll:hover {
            animation-play-state: paused;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

    </div>
  );
};

export default Skills;
