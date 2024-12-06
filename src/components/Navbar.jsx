import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);  // State to track scroll position
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // Effect to listen to the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);  // Add shadow when scrolled
      } else {
        setScrolled(false);  // Remove shadow when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);  // Listen for scroll events

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] transition-all ease bg-[#111827] text-white ${
        scrolled ? "shadow-lg" : ""  // Apply shadow when scrolled
      }`}
    >
      <div className="flex items-center justify-around px-7 py-4">
        <div>
          <h4 className="text-4xl uppercase font-bold">
            S<span className="text-cyan-600">MT</span>Y
          </h4>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className="px-4 py-2 rounded-[30px] transition-all ease hover:bg-cyan-600  hover:text-white"
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="z-[999] text-3xl md:hidden cursor-pointer text-white"
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 transition-all duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className="px-4 py-2 rounded-[30px] transition-all ease hover:bg-cyan-600  hover:text-white"
                onClick={() => setOpen(false)}
              >
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
