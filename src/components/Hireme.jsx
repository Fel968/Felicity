import React from "react";

const experiences = [
  {
    role: "Web Developer (Training)",
    organization: "MEST",
    period: "September 2024 – November 2024",
    details: [
      "Acquired hands-on experience with modern web development technologies, including HTML, CSS, JavaScript, React, and Node.js.",
      "Designed and implemented projects demonstrating core concepts in frontend development, backend development, and RESTful APIs.",
      "Collaborated with team members to build responsive and functional web applications.",
      "Strengthened skills in creating responsive web designs and implementing user-focused features.",
      "Completed a capstone project showcasing understanding of the full stack development process.",
    ],
  },
  {
    role: "Systems Administrator (Internship)",
    organization: "Molaprise Technology Consult",
    period: "November 2023 – August 2024",
    details: [
      "Implemented industry-standard security policies to enhance compliance and risk management.",
      "Streamlined device and user management using Microsoft Intune and Entra ID, improving efficiency.",
      "Automated workflows with Microsoft Power Automate, reducing manual tasks and boosting productivity.",
      "Monitored system performance and ensured compliance using Microsoft Purview and Defender, fostering a secure IT environment.",
    ],
  },
  {
    role: "Training",
    organization: "Kumasi Hive",
    period: "June 2022 – July 2022",
    details: [
      "Gained hands-on training on sensor and cloud integration with Automated Systems which aided me in designing an IoT-based Irrigation System that uses Weather Data from an API for Irrigation Scheduling.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 px-5 bg-[#111827] text-gray-300">
      <h3 className="text-4xl font-semibold text-center text-white mb-8">
        Experience
      </h3>
      <div className="w-[75%] mx-auto space-y-6">
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
