import React from "react";
import Home from "./subcontent/Home";
import About from "./subcontent/About";
import Skill from "./subcontent/Skill";
import Portfolio from "./subcontent/Portfolio";
import Contact from "./subcontent/Cotact";

const Content: React.FC = () => {
  return (
    <div className="bg-background min-h-screen relative text-on-surface">
      {/* Dynamic Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(242,201,66,0.08)_0%,transparent_70%)] blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(235,231,248,0.04)_0%,transparent_70%)] blur-3xl animate-glow"></div>
        <div className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,201,66,0.05)_0%,transparent_70%)] blur-3xl animate-float"></div>
      </div>

      {/* Sections */}
      <div id="home" className="pt-20">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skill />
      </div>

      <div id="projects">
        <Portfolio />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Content;