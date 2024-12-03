import React from "react";
import aboutImg from "../assets/images/me.png";

const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "5" },
    // { text: "Companies Work", count: "06" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm Felicity Semetey, a junior backend developer with a degree in Computer Science from the University of Mines and Technology(UMaT), Tarkwa. I am passionate about exploring new technologies and improving my proficiency in software engineering, especially on the backend (server-side). While still in the early stages of my career, I am committed to continuous learning and growth. I’m excited about the opportunity to collaborate with others, contribute to impactful projects, and further refine my abilities as a backend developer.
              </p>
              <div className="mt-10">
                <div className="flex justify-start gap-7 ml-6">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count}
                        <span className="text-cyan-600">+</span>{" "}
                      </h3>
                      <span className="md:text-base text-xs">{content.text}</span>
                    </div>
                  ))}
                </div>
                <br />
                <a href="./src/assets/Felicity Semetey-RESUME.pdf" download>
                  <button className="btn-primary ml-30">Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-gray-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
