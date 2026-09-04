// src/components/Navbar.tsx
import React, { useState, useEffect, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const NavLink = ({ href, children, active, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.startsWith('/') ? href.substring(1) : href;
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
      onClick={handleClick}
      className={`
        relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300
        ${active 
          ? 'bg-[#F2C942] text-black shadow-[0_0_15px_rgba(242,201,66,0.5)] scale-105' 
          : 'text-gray-300 hover:text-white hover:bg-white/10'
        }
      `}
    >
      {children}
    </a>
  );
};

const NavLinkList = ({ href, children, active, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.startsWith('/') ? href.substring(1) : href;
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
      onClick={handleClick}
      className={`
        px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-all duration-200 flex items-center justify-between
        ${active ? 'bg-[#F2C942] text-black font-bold' : 'text-gray-200 hover:bg-white/10 hover:text-[#F2C942]'}
      `}
    >
      <span>{children}</span>
      <span className="text-xs opacity-50">→</span>
    </a>
  );
};

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5 transition-all duration-300 pointer-events-none">
      <nav className={`
        pointer-events-auto
        w-full max-w-6xl
        flex items-center justify-between
        px-5 py-3 rounded-2xl
        transition-all duration-500
        ${scrolled 
          ? 'bg-[#1b1919]/80 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-[#2E2A2A]/60 backdrop-blur-md border border-[#F2C942]/20 shadow-lg'
        }
      `}>
        {/* Brand logo */}
        <a 
          href="#home" 
          className="group flex items-center gap-2 text-xl sm:text-2xl font-black tracking-wider text-white"
        >
          <span className="w-8 h-8 rounded-lg bg-[#F2C942] text-black flex items-center justify-center font-extrabold text-sm shadow-[0_0_10px_rgba(242,201,66,0.6)] group-hover:rotate-12 transition-transform duration-300">
            S
          </span>
          <span className="bg-gradient-to-r from-white via-gray-200 to-[#F2C942] bg-clip-text text-transparent group-hover:opacity-90">
            SIWAKORN
          </span>
        </a>

        {/* Desktop Nav Pills */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-black/40 border border-white/10 shadow-inner">
          <NavLink href="home" active={activeSection === 'home'}>HOME</NavLink>
          <NavLink href="about" active={activeSection === 'about'}>ABOUT</NavLink>
          <NavLink href="skills" active={activeSection === 'skills'}>SKILLS</NavLink>
          <NavLink href="portfolio" active={activeSection === 'portfolio'}>PORTFOLIO</NavLink>
          <NavLink href="contact" active={activeSection === 'contact'}>CONTACT</NavLink>
        </div>

        {/* Right side: Language & Hamburger */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Capsule */}
          <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/10 text-xs font-bold shadow-inner">
            <button
              onClick={() => changeLang('th')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                i18n.language === 'th' ? 'bg-[#F2C942] text-black shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
              title="ภาษาไทย"
            >
              <span>TH</span>
            </button>
            <button
              onClick={() => changeLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                i18n.language === 'en' ? 'bg-[#F2C942] text-black shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
              title="English"
            >
              <span>EN</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-black/40 border border-white/10 text-white hover:text-[#F2C942] hover:border-[#F2C942]/40 transition-colors"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm pointer-events-auto flex justify-end animate-fadeIn" 
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-72 h-full bg-[#1b1919] border-l border-[#F2C942]/20 p-6 flex flex-col justify-between shadow-2xl animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-center pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#F2C942] text-black flex items-center justify-center font-bold text-xs">
                    S
                  </span>
                  <span className="text-lg font-bold text-white tracking-wider">SIWAKORN</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <NavLinkList href="home" active={activeSection === 'home'} onClick={closeSidebar}>HOME</NavLinkList>
                <NavLinkList href="about" active={activeSection === 'about'} onClick={closeSidebar}>ABOUT</NavLinkList>
                <NavLinkList href="skills" active={activeSection === 'skills'} onClick={closeSidebar}>SKILLS</NavLinkList>
                <NavLinkList href="portfolio" active={activeSection === 'portfolio'} onClick={closeSidebar}>PORTFOLIO</NavLinkList>
                <NavLinkList href="contact" active={activeSection === 'contact'} onClick={closeSidebar}>CONTACT</NavLinkList>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-gray-400 font-light">
                Mobile Developer • Kotlin Native
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;