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
      <div className="flex flex-col md:flex-row items-start justify-start gap-6 px-4 md:px-8 w-full mx-auto">
        {/* Image Container
        <div className="flex-1 flex justify-center items-center order-first md:order-none hidden md:block">
          <div className="lg:w-96 sm:w-10/12 w-11/12 max-w-sm bg-gray-900 border-4 border-cyan-600 rounded-xl overflow-hidden">
            <img src={aboutImg} alt="Felicity Semetey" className="w-full object-cover" />
          </div>
        </div> */}

        {/* Content Container */}
        <div className="flex-1 text-left text-center">
          {/* Title */}
          <h3 className="text-4xl font-semibold mb-6">
            About <span className="text-cyan-600">Me</span>
          </h3>

          {/* Introductory Text */}
          <p className=" text-justify leading-7 text-gray-300 mb-8 w-full mx-auto ">
            I'm Felicity Semetey, a web developer with a degree in Computer Science from the University of Mines and Technology (UMaT), Tarkwa. I am passionate about exploring new technologies and improving my proficiency in software engineering, especially on the backend (server-side). While still in the early stages of my career, I am committed to continuous learning and growth. I’m excited about the opportunity to collaborate with others, contribute to impactful projects, and further refine my abilities as a web developer.
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
          <div className="flex justify-center">
            <a href="./src/assets/Felicity Semetey-RESUME.pdf" download>
              <button className="btn-primary">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
