import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto h-16 w-full max-w-6xl mx-auto rounded-full bg-surface-container-low/85 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.5)] flex items-center justify-between px-4 sm:px-6">
        
        {/* Left: Brand / Avatar & Status */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center border border-white/10 group-hover:border-primary-container/60 transition-colors">
              <span className="font-mono text-xs text-primary font-bold tracking-tight">SS</span>
            </div>
            <span className="font-display font-semibold text-lg text-on-surface tracking-tight">
              Jay<span className="text-primary-container">.dev</span>
            </span>
          </a>

          {/* Availability Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high/80 border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-sans text-xs text-on-surface-variant font-medium">
              {t('nav.open_to_opps')}
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-container-lowest/70 border border-white/5">
          {[
            { id: 'home', label: t('nav.home') },
            { id: 'about', label: t('nav.about') },
            { id: 'skills', label: t('nav.skills') },
            { id: 'projects', label: t('nav.projects') },
            { id: 'contact', label: t('nav.contact') },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-on-primary-container bg-primary-container font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (GitHub, Mail, Resume, Lang switch, Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub link */}
          <a
            href="https://github.com/jjsornwakii"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            className="p-2 rounded-full text-on-surface-variant hover:text-primary-container hover:bg-surface-container transition-colors hidden sm:flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </a>

          {/* Email anchor */}
          <button
            onClick={() => scrollTo('contact')}
            title="Send Direct Mail"
            className="p-2 rounded-full text-on-surface-variant hover:text-primary-container hover:bg-surface-container transition-colors hidden sm:flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </button>

          {/* Resume Download Pill */}
          <a
            href="/pdf/Resume.pdf"
            download="Siwakorn_Suriya_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold hover:shadow-[0_0_16px_rgba(242,201,66,0.35)] transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>{t('nav.resume')}</span>
          </a>

          {/* Language Switcher Capsule */}
          <div className="flex items-center p-0.5 rounded-full bg-surface-container-lowest/80 border border-white/10 text-xs font-mono">
            <button
              onClick={() => changeLang('th')}
              className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                i18n.language === 'th'
                  ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              TH
            </button>
            <button
              onClick={() => changeLang('en')}
              className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                i18n.language === 'en'
                  ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 top-20 z-40 bg-black/70 backdrop-blur-sm lg:hidden pointer-events-auto p-4 flex flex-col items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-surface-container-low border border-white/10 p-5 shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-display font-semibold text-on-surface">
                Jay<span className="text-primary-container">.dev</span>
              </span>
              <span className="text-xs font-mono text-secondary px-2 py-0.5 rounded-full bg-surface-container-highest">
                Target API 34
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {[
                { id: 'home', label: t('nav.home'), icon: 'home' },
                { id: 'about', label: t('nav.about'), icon: 'person' },
                { id: 'skills', label: t('nav.skills'), icon: 'terminal' },
                { id: 'projects', label: t('nav.projects'), icon: 'folder_open' },
                { id: 'contact', label: t('nav.contact'), icon: 'mail' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                    activeSection === item.id
                      ? 'bg-primary-container text-on-primary-container font-semibold'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <a
              href="/pdf/Resume.pdf"
              download="Siwakorn_Suriya_Resume.pdf"
              className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary-container text-on-primary-container font-semibold text-sm shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>{t('nav.resume')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;