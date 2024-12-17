import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Bot from "./components/Bot";

const App = () => {
  const componentStyle = { marginBottom: "4rem" }; // Consistent bottom margin

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "4rem" }}>
        <div>
          <Hero />
        </div>
        <div style={{ marginTop: "3rem" }}>
          <About />
        </div>
        <div style={componentStyle}>
          <Skills />
        </div>
        <div style={componentStyle}>
          <Experience />
        </div>
        <div style={componentStyle}>
          <Project />
        </div>
        <div style={componentStyle}>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
