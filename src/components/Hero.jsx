import React from "react";
import laptop from "../assets/images/laptop.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={laptop} alt="Laptop" style={{ paddingLeft: "100px" }} />
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">Hi,</span> I'm{" "}
            <span>Felicity Semetey</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
            A Backend Developer
          </h4>

          {/* Contact Me button with hover effect */}
          <button
            className="btn-primary mt-8 transition-all transform hover:scale-110 hover:bg-cyan-600 hover:text-white"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
