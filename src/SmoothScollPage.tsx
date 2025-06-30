import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function SmoothScollPage() {
  return (
    <>
      <HeroSection />
      <div className="forBgColor">
        <About />
        <Skills />
        <Project/>
        <Contact/>
      </div>
    </>
  );
}

export default SmoothScollPage;
