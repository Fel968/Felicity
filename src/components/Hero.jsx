import React from "react";
import "./hero.css"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center"
    >
      {/* Content Container */}
      <div className="flex-1 text-center flex flex-col justify-center items-center h-full">
        <h1 className="intro md:text-6xl text-3xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-cyan-600">Hi,</span> I'm{" "}
          <span>Felicity Semetey</span>
        </h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
          A Web Developer
        </h4>

        {/* Contact Me button with hover effect */}
        <div className="flex justify-center mt-8">
          <button
            className="btn-primary transition-all transform hover:scale-110 hover:bg-cyan-600 hover:text-white"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
