import React from "react";
import aboutImg from "../assets/images/me.png";

const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "5" },
    { text: "Ongoing Projects", count: "2" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="flex flex-col md:flex-row items-center gap-12 px-10 w-full mx-auto" style={{ position: "relative" }}>
        {/* Content Container */}
        <div className="flex-1" style={{ position: "relative", left: "10%" }}>
          {/* Title */}
          <h3 className="text-4xl font-semibold text-center mb-6">
            About <span className="text-cyan-600">Me</span>
          </h3>
          {/* Introductory Text */}
          <p className="text-justify leading-7 text-gray-300 mb-8 w-30/12">
            I'm Felicity Semetey, a junior backend developer with a degree in Computer Science from the University of Mines and Technology (UMaT), Tarkwa. I am passionate about exploring new technologies and improving my proficiency in software engineering, especially on the backend (server-side). While still in the early stages of my career, I am committed to continuous learning and growth. I’m excited about the opportunity to collaborate with others, contribute to impactful projects, and further refine my abilities as a backend developer.
          </p>
          {/* Count Section */}
          <div className="flex justify-center gap-7 mb-6">
            {info.map((content) => (
              <div key={content.text} className="text-center">
                <h3 className="text-4xl font-semibold text-white">
                  {content.count}
                  <span className="text-cyan-600">+</span>
                </h3>
                <span className="text-sm text-gray-300">{content.text}</span>
              </div>
            ))}
          </div>
          {/* Download Button */}
          <div className="flex justify-center" style={{ width: "80%", margin: "0 auto" }}>
            <a href="./src/assets/Felicity Semetey-RESUME.pdf" download>
              <button className="btn-primary">Download CV</button>
            </a>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex justify-center items-center">
          <div className="lg:w-96 sm:w-10/12 w-11/12 max-w-sm bg-gray-900 border-4 border-cyan-600 rounded-xl overflow-hidden">
            <img src={aboutImg} alt="Felicity Semetey" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
