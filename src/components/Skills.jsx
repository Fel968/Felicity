import React from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <SiMongodb />, name: "MongoDB", color: "text-cyan-600" },
    { icon: <SiExpress />, name: "Express.js", color: "bg-cyan-600 text-black" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-cyan-600" },
    { icon: <FaGitAlt />, name: "Git", color: "text-cyan-600" },
    { icon: <FaReact />, name: "React", color: "text-cyan-600" },
    { icon: <FaHtml5 />, name: "HTML", color: "text-cyan-600" },
    { icon: <FaCss3Alt />, name: "CSS", color: "text-cyan-600" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "text-cyan-600" },
    { icon: <FaWordpress />, name: "WordPress", color: "text-cyan-600" },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-900">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">Skills</h3>
        <div className="mt-12 flex justify-center">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full px-4 md:w-[70%] lg:w-[60%]">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                {/* Icon */}
                <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
                {/* Skill Name */}
                <p className="text-lg font-medium text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
