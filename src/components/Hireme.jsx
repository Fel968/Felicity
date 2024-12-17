import React from "react";

const experiences = [
  {
    role: "Web Developer (Training)",
    organization: "MEST",
    period: "September 2024 – November 2024",
    details: [
      "Hands on experience with HTML, CSS, JavaScript, React, and Node.js.",
      "Built projects with frontend, backend, and REST APIs.",
      "Collaborated on responsive web applications.",
      "Improved user-focused design and full-stack skills.",
    ],
  },
  {
    role: "Systems Administrator (Internship)",
    organization: "Molaprise Technology Consult",
    period: "November 2023 – August 2024",
    details: [
      "Enhanced compliance with security policies.",
      "Streamlined device management using Intune and Entra ID.",
      "Automated tasks with Power Automate.",
      "Monitored systems with Purview and Defender.",
    ],
  },
  {
    role: "Training",
    organization: "Kumasi Hive",
    period: "June 2022 – July 2022",
    details: [
      "Designed IoT-based irrigation using weather API.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 px-5 bg-[#111827] text-gray-300">
      <h3 className="text-4xl font-semibold text-center text-white mb-8">
        Experience
      </h3>
      <div className="w-full md:w-[75%] mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-cyan-600 p-6 rounded-lg"
          >
            <h4 className="text-cyan-600 text-xl font-bold">{exp.role}</h4>
            <p className="text-gray-300 italic">{exp.organization}</p>
            <p className="text-gray-300 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
