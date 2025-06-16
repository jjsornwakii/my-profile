// src/components/Navbar.tsx
import React, { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';


type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void; // Added optional onClick prop
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
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
      inline-block
      text-center
      w-[120px]
      "
    >
      {children}
    </a>
  );
};

const NavLinkList = ({ href, children, onClick }: NavLinkProps) => {
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

  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [isOpen, setIsOpen] = useState(false);

  // Function to close the sidebar after a click
  const closeSidebar = () => {
    setIsOpen(false);
  };


  return (
    <nav className="bg-[#F2C942] p-4 text-black flex justify-between  shadow-md fixed top-0 w-full z-50">


      <a href="home" className="text-2xl font-bold max-w-px-4 ">Siwakorn</a>

      {/* Desktop Nav */}
      <ul className="w-[50%] hidden lg:flex lg:justify-around  ">
        <li><NavLink href="home" >HOME</NavLink></li> {/* Changed to "home" (ID without #) */}
        <li><NavLink href="about" >ABOUT</NavLink></li>
        <li><NavLink href="skills">SKILLS</NavLink></li>
        <li><NavLink href="portfolio" >PORTFOLIO</NavLink></li>
        <li><NavLink href="contact">CONTACT</NavLink></li>
      </ul>

      <div className='flex flex-row space-x-2'>
        <div className="space-x-2 ">
          <button onClick={() => changeLang('th')}>
            <svg width="45" height="45" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.6943 47.3611H4.30545V14.6389H57.6943V47.3611Z" fill="white" />
              <path d="M57.6943 36.1667H4.30545V25.8333H57.6943V36.1667Z" fill="#1E50A0" />
              <path d="M57.6943 18.9444H4.30545V14.6389H57.6943V18.9444ZM57.6943 47.3611H4.30545V43.0556H57.6943V47.3611Z" fill="#D22F27" />
              <path d="M57.6943 47.3611H4.30545V14.6389H57.6943V47.3611Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
          <button onClick={() => changeLang('en')}>
            <svg width="45" height="45" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.6943 47.3611H4.30545V14.6389H57.6943V47.3611Z" fill="#1E50A0" />
              <path d="M27.5557 37.1518V34.4444H18.7887L4.30566 43.3216V47.3611H10.8966L27.5557 37.1518Z" fill="white" />
              <path d="M4.30566 47.3611H7.60114L27.5557 35.1308V34.4444H24.5573L4.30566 46.8565V47.3611Z" fill="#D22F27" />
              <path d="M10.8957 14.6389H4.30566V18.6792L18.7878 27.5555H27.5557V24.8491L10.8957 14.6389Z" fill="white" />
              <path d="M4.30555 14.6389V16.6599L22.0832 27.5555H26.2053L5.13049 14.6389H4.30555Z" fill="#D22F27" />
              <path d="M34.4443 24.8482V27.5555H43.2113L57.6943 18.6783V14.6389H51.1034L34.4443 24.8482Z" fill="white" />
              <path d="M57.6943 14.6389H54.3989L34.4443 26.8692V27.5555H37.4427L57.6943 15.1435V14.6389Z" fill="#D22F27" />
              <path d="M51.1043 47.3611H57.6943V43.3208L43.2122 34.4444H34.4443V37.1509L51.1043 47.3611Z" fill="white" />
              <path d="M57.6943 47.3611V45.3401L39.9158 34.4444H35.7946L56.8694 47.3611H57.6943Z" fill="#D22F27" />
              <path d="M57.6943 35.3055H4.30545V26.6944H57.6943V35.3055Z" fill="white" />
              <path d="M35.3057 47.3611H26.6946V14.6389H35.3057V47.3611Z" fill="white" />
              <path d="M57.6943 33.5833H4.30545V28.4167H57.6943V33.5833Z" fill="#D22F27" />
              <path d="M33.5833 47.3611H28.4166V14.6389H33.5833V47.3611Z" fill="#D22F27" />
              <path d="M57.6943 47.3611H4.30545V14.6389H57.6943V47.3611Z" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
        </div>
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