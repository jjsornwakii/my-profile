// src/components/Content.tsx
import React, { useRef, useState, useEffect } from "react";
import Home from "./subcontent/Home";
import About from "./subcontent/About";
import Skill from "./subcontent/Skill";
import Portfolio from "./subcontent/Portfolio";
import Contact from "./subcontent/Cotact";


const Content: React.FC = () => {
  // State and Ref for the first section ("Welcome to My Profile!")
  const [isSection1Visible, setIsSection1Visible] = useState(false);
  const section1Ref = useRef<HTMLDivElement>(null);

  // State and Ref for the second section ("More Content Below!")
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const section2Ref = useRef<HTMLDivElement>(null);

  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const section3Ref = useRef<HTMLDivElement>(null);

  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const section4Ref = useRef<HTMLDivElement>(null);

  const [isSection5Visible, setIsSection5Visible] = useState(false);
  const section5Ref = useRef<HTMLDivElement>(null);

  // useEffect for the first section
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSection1Visible(true);
          observer1.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) {
      observer1.observe(section1Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        observer1.unobserve(section1Ref.current);
      }
    };
  }, []);

  // useEffect for the second section
  useEffect(() => {

    // เตรียม observer
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSection2Visible(true);
          observer2.unobserve(entry.target);
        }
      },
      { threshold: 0.6 }
    );

    // เช็คว่ามี Div จริงๆ
    if (section2Ref.current) {
      // สั่งให้ observer ทำงาน
      observer2.observe(section2Ref.current);
    }

    return () => {
      if (section2Ref.current) {
        // สั่งให้ observer หยุดทำ
        observer2.unobserve(section2Ref.current);
      }
    };
  }, []);


  // useEffect for the third section
  useEffect(() => {

    // เตรียม observer
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSection3Visible(true);
          observer3.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    // เช็คว่ามี Div จริงๆ
    if (section3Ref.current) {
      // สั่งให้ observer ทำงาน
      observer3.observe(section3Ref.current);
    }

    return () => {
      if (section3Ref.current) {
        // สั่งให้ observer หยุดทำ
        observer3.unobserve(section3Ref.current);
      }
    };
  }, []);

  // useEffect for the forth section
  useEffect(() => {

    // เตรียม observer
    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSection4Visible(true);
          observer4.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // เช็คว่ามี Div จริงๆ
    if (section4Ref.current) {
      // สั่งให้ observer ทำงาน
      observer4.observe(section4Ref.current);
    }

    return () => {
      if (section4Ref.current) {
        // สั่งให้ observer หยุดทำ
        observer4.unobserve(section4Ref.current);
      }
    };
  }, []);



  // useEffect for the five section
  useEffect(() => {

    // เตรียม observer
    const observer5 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSection5Visible(true);
          observer5.unobserve(entry.target);
        }
      },
      { threshold: 0.0 }
    );

    // เช็คว่ามี Div จริงๆ
    if (section5Ref.current) {
      // สั่งให้ observer ทำงาน
      observer5.observe(section5Ref.current);
    }

    return () => {
      if (section5Ref.current) {
        // สั่งให้ observer หยุดทำ
        observer5.unobserve(section5Ref.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#1b1919] min-h-screen relative overflow-hidden text-white">
      {/* Dynamic Parallax Ambient Background Orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F2C942]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-amber-600/10 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] bg-[#F2C942]/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* First Section: Home Hero */}
      <div
        id="home" 
        ref={section1Ref}
        className={`relative z-10 pt-20 transition-all duration-1000 ease-out ${
          isSection1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Home />
      </div>

      {/* Second Section: About */}
      <div
        id="about" 
        ref={section2Ref}
        className={`relative z-10 py-12 transition-all duration-1000 ease-out ${
          isSection2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <About />
      </div>

      {/* Third Section: Skills */}
      <div
        id="skills" 
        ref={section3Ref}
        className={`relative z-10 py-12 transition-all duration-1000 ease-out ${
          isSection3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Skill />
      </div>

      {/* Fourth Section: Portfolio */}
      <div
        id="portfolio" 
        ref={section4Ref}
        className={`relative z-10 py-12 transition-all duration-1000 ease-out ${
          isSection4Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Portfolio />
      </div>

      {/* Fifth Section: Contact */}
      <div
        id="contact" 
        ref={section5Ref}
        className={`relative z-10 py-12 pb-24 transition-all duration-1000 ease-out ${
          isSection5Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Content;