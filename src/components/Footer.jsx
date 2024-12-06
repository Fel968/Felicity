import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-6" style={{ width: '40%' }}>
        {/* Main div set to column layout */}
        <div className="flex flex-col items-center mb-6 space-y-4">
         
          {/* Contact Info - Centered */}
          <div className="text-sm leading-6 space-y-2 text-center">
            <p className="text-lg font-semibold">Contact Me</p>
            <p>Email: felicitysemetey628@gmail.com</p>
          </div>

          {/* Social Media Links - Icons in a row */}
          <div className="flex space-x-8">
            <a
              href="https://www.facebook.com/felicitysem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/felicitysem/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/felicitysem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
