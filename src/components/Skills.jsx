import React from "react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <SiMongodb />, name: "MongoDB", color: "text-white" },
    { icon: <SiExpress />, name: "Express.js", color: "bg-white text-black" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-white" },
    { icon: <FaGitAlt />, name: "Git", color: "bg-gray-900 text-white" },
    { icon: <FaReact />, name: "React", color: "text-white" },
    { icon: <FaHtml5 />, name: "HTML", color: "bg-gray-900 text-white" },
    { icon: <FaCss3Alt />, name: "CSS", color: "text-white" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "text-white" },
    { icon: <FaWordpress />, name: "WordPress", color: "text-white" },  // Added WordPress icon
  ];

  return (
    <section id="skills" className="py-10 bg-gray-900">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">Skills</h3>
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-3 gap-8 p-1 rounded-lg w-[70%]">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-md border-2 border-cyan-600 transition-all transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${skill.color} text-6xl`}>
                  {skill.icon}
                </div>
                <p className="text-lg font-medium mt-4 text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
