import React from "react";
import laptop from "../assets/images/laptop.png";

const Hero = () => {
  const social_media = [
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/your-profile",
    },
    {
      icon: "logo-facebook",
      link: "https://www.facebook.com/your-profile",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/your-profile",
    },
    {
      icon: "logo-twitter",
      link: "https://twitter.com/your-profile",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={laptop} alt="Laptop" className="pl-10" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">Hi,</span> I'm{" "}
            <span>Felicity Semetey</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            A Backend Developer
          </h4>
          <button
            className="btn-primary mt-8"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map(({ icon, link }) => (
              <a
                key={icon}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
