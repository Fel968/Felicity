import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] transition-all ease bg-white text-black ${scrolled ? "shadow-lg" : ""}`}>
      <div className="flex items-center justify-between px-7 py-4">
        <div>
          <h4 className="text-4xl uppercase font-bold">
            S<span className="text-cyan-600">MT</span>Y
          </h4>
        </div>
        
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-4 py-2 rounded-[30px] transition-all ease hover:bg-cyan-600 hover:text-white">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Hamburger Icon */}
        <div onClick={() => setOpen(!open)} className="z-[999] text-3xl md:hidden cursor-pointer text-black">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white px-7 py-2 font-medium transition-all duration-300 ${open ? "left-0" : "left-[-100%]"}`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg text-black">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-4 py-2 rounded-[30px] transition-all ease hover:bg-cyan-600 hover:text-white" onClick={() => setOpen(false)}>
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;