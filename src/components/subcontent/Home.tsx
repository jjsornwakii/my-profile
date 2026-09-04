import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const mypic = "assets\\img\\profile\\b77b2ced-af0e-4101-9248-1eba75670895.jpg";

  // Mouse tilt tracking for the profile photo
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: -(y / rect.height) * 16, y: (x / rect.width) * 16 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 flex justify-center items-center relative z-10 min-h-[85vh]">
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row md:items-center md:gap-14 text-white w-full max-w-6xl">
        
        {/* Interactive Tilt Profile Card */}
        <div
          className="relative group perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle Ambient Glow behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F2C942] to-amber-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-75 transition duration-700 group-hover:duration-200 animate-glow"></div>

          <div
            className="relative transition-transform duration-200 ease-out rounded-2xl overflow-hidden border-2 border-[#F2C942]/40 shadow-2xl bg-[#1e1b1b] p-2"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: "preserve-3d"
            }}
          >
            <img
              src={mypic}
              alt="Siwakorn Suriya Profile"
              className="rounded-xl w-64 sm:w-72 md:w-80 lg:w-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Floating Experience Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#2E2A2A]/90 backdrop-blur-md px-3 py-2 rounded-xl border border-[#F2C942]/40 text-center shadow-lg transform transition-all group-hover:translate-y-[-4px]">
              <span className="text-xs font-semibold text-[#F2C942] tracking-wider uppercase">
                🚀 Kotlin Native • Store Ops • Business Apps
              </span>
            </div>
          </div>
        </div>

        {/* Content info */}
        <div className="flex flex-col justify-center max-w-[650px] space-y-4 text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 self-center md:self-start bg-[#F2C942]/10 border border-[#F2C942]/30 px-3 py-1 rounded-full text-xs sm:text-sm text-[#F2C942] font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#F2C942] animate-ping inline-block"></span>
            {t('hi')}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-white">{t('name')}</span>
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#F2C942]">
            {t('roles')}
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            {t('personal data')}
          </p>

          {/* Quick Highlight Tags */}
          <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
            <span className="bg-[#1f1d1d] hover:bg-[#F2C942] hover:text-black border border-[#F2C942]/40 text-gray-200 text-xs px-3 py-1.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5">
              📱 Kotlin Native (Primary)
            </span>
            <span className="bg-[#1f1d1d] hover:bg-[#F2C942] hover:text-black border border-[#F2C942]/40 text-gray-200 text-xs px-3 py-1.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5">
              🏪 Store Release & Maintenance
            </span>
            <span className="bg-[#1f1d1d] hover:bg-[#F2C942] hover:text-black border border-[#F2C942]/40 text-gray-200 text-xs px-3 py-1.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5">
              💼 Business-Oriented Solutions
            </span>
            <span className="bg-[#1f1d1d] hover:bg-[#F2C942] hover:text-black border border-gray-600 text-gray-400 text-xs px-3 py-1.5 rounded-full transition-all duration-300">
              🍏 Swift (Basic)
            </span>
            <span className="bg-[#1f1d1d] hover:bg-[#F2C942] hover:text-black border border-gray-600 text-gray-400 text-xs px-3 py-1.5 rounded-full transition-all duration-300">
              🦋 Flutter (Familiar)
            </span>
          </div>

          {/* Action Buttons & Socials */}
          <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="/pdf/Resume.pdf"
              download="Siwakorn-Mobile-Dev.pdf"
              className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-black bg-[#F2C942] rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:bg-[#e0b835] hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{t('loadcv')}</span>
            </a>

            <div className="flex items-center gap-3">
              {/* Call */}
              <a
                href="tel:+66932784456"
                aria-label="Phone"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1e1b1b] border border-[#F2C942]/40 text-[#F2C942] hover:bg-[#F2C942] hover:text-black hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:siwakorn.suriya.work@gmail.com"
                aria-label="Email"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1e1b1b] border border-[#F2C942]/40 text-[#F2C942] hover:bg-[#F2C942] hover:text-black hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/jjsornwakii"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1e1b1b] border border-[#F2C942]/40 text-[#F2C942] hover:bg-[#F2C942] hover:text-black hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;