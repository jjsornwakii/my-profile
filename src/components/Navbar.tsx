// src/components/Navbar.tsx
import React, { useState, type ReactNode } from 'react';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void; // Added optional onClick prop
};

const NavLink = ({ href, children, onClick } : NavLinkProps ) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = href.startsWith('/') ? href.substring(1) : href; // Handle both /home and #home if needed
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick} // Use the new handleClick
      className="
      ml-10
      transition
      duration-100
      px-3 py-2
      border-2
      border-[#2E2A2A]
      rounded-2xl


      hover:text-white
      hover:border-2
      hover:border-white
      hover:px-3
      hover:py-2
      hover:rounded-2xl

      hover:bg-[#2E2A2A]
      "
    >
      {children}
    </a>
  );
};

const NavLinkList = ({ href, children, onClick } : NavLinkProps ) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = href.startsWith('/') ? href.substring(1) : href; // Handle both /home and #home if needed
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick} // Use the new handleClick
      className="
      transition
      duration-100
      border-2
      border-[#2E2A2A]
      px-3
      py-2


      hover:text-white
      hover:border-2
      hover:border-white
      hover:px-3
      hover:py-2

      hover:bg-[#F2C942]
      "
    >
      {children}
    </a>
  );
};




const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Function to close the sidebar after a click
  const closeSidebar = () => {
    setIsOpen(false);
  };


  return (
    <nav className="bg-[#F2C942] p-4 text-black shadow-md fixed top-0 w-full z-50">

      <div className="container mx-auto  flex justify-between items-center text-black">

        <a href="/" className="text-2xl font-bold px-4">Siwakorn</a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex  ">
          <li><NavLink href="home" >HOME</NavLink></li> {/* Changed to "home" (ID without #) */}
          <li><NavLink href="about" >ABOUT</NavLink></li>
          <li><NavLink href="skills">SKILLS</NavLink></li>
          <li><NavLink href="portfolio" >PORTFOLIO</NavLink></li>
          <li><NavLink href="contact">CONTACT</NavLink></li>
        </ul>

        {/* Hamburger */}
        <div className=" flex  space-x-2 right-0"> {/* Added md:hidden to hide on desktop */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Side Navbar (overlay) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white bg-opacity-50 " onClick={() => setIsOpen(false)}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-[#2E2A2A] text-[#F2C942] shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col p-4"> {/* Added p-4 for padding */}
              <NavLinkList href="home" onClick={closeSidebar}>HOME</NavLinkList>
              <NavLinkList href="about" onClick={closeSidebar}>ABOUT</NavLinkList>
              <NavLinkList href="skills" onClick={closeSidebar}>SKILLS</NavLinkList>
              <NavLinkList href="portfolio" onClick={closeSidebar}>PORTFOLIO</NavLinkList>
              <NavLinkList href="contact" onClick={closeSidebar}>CONTACT</NavLinkList>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;