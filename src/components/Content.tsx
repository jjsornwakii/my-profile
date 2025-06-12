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
    <div className="bg-[#2E2A2A]">
      {/* First Section: Welcome to My Profile! */}
      <div
        ref={section1Ref}
        className={`container mx-auto p-8 transition-opacity duration-1000 ease-in ${
          isSection1Visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Home />
      </div>

      {/* Second Section: More Content Below! */}
      <div
        ref={section2Ref}
        className={`container mx-auto p-8 transition-opacity duration-1000 ease-in ${
          isSection2Visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <About />
      </div>


      {/* Third Section:! */}
      <div
        ref={section3Ref}
        className={`container mx-auto p-8 transition-opacity duration-1000 ease-in ${
          isSection3Visible ? "opacity-100" : "opacity-0"
        }`}
      >
      <Skill/>
      </div>
      
      {/* Forrth Section:! */}
      <div
        ref={section4Ref}
        className={`container mx-auto p-8 transition-opacity duration-1000 ease-in ${
          isSection4Visible ? "opacity-100" : "opacity-0"
        }`}
      >
      <Portfolio/>
      </div>



      <div
         ref={section5Ref}
        className={`container mx-auto p-8 transition-opacity duration-1000 ease-in ${
          isSection5Visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Contact/>
      </div>


    </div>
  );
};

export default Content;
