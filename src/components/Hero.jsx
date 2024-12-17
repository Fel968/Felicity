import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center"
    >
      {/* Content Container */}
      <div className="flex-1 text-center flex flex-col justify-center items-center h-full">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-cyan-600 md:text-6xl text-5xl">Hi,</span> I'm{" "}
          <span>Felicity Semetey</span>
        </h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white">
          A Backend Developer
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
