import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#141212] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#F2C942]/10 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Brand & bio */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#F2C942] text-black font-extrabold flex items-center justify-center text-base shadow-[0_0_15px_rgba(242,201,66,0.4)]">
              S
            </span>
            <span className="text-2xl font-black tracking-wider text-white">
              SIWAKORN
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-sm font-light">
            Mobile Developer specializing in native Android engineering with Kotlin, Play Store lifecycle, and business-driven mobile applications.
          </p>
          <div className="text-xs text-gray-500 pt-2">
            © {new Date().getFullYear()} Siwakorn Suriya. All rights reserved.
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#F2C942]">
            Connect & Contact
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Phone */}
            <a
              href="tel:+66932784456"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2C942] hover:bg-[#F2C942]/10 transition-all duration-300 text-sm text-gray-200 hover:text-[#F2C942]"
            >
              <svg className="w-4 h-4 text-[#F2C942]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/>
              </svg>
              <span>093-278-4456</span>
            </a>

            {/* Email */}
            <a
              href="mailto:siwakorn.suriya.work@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2C942] hover:bg-[#F2C942]/10 transition-all duration-300 text-sm text-gray-200 hover:text-[#F2C942]"
            >
              <svg className="w-4 h-4 text-[#F2C942]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/jjsornwakii"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2C942] hover:bg-[#F2C942]/10 transition-all duration-300 text-sm text-gray-200 hover:text-[#F2C942]"
            >
              <svg className="w-4 h-4 text-[#F2C942]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/jjsornwakii"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F2C942] hover:bg-[#F2C942]/10 transition-all duration-300 text-sm text-gray-200 hover:text-[#F2C942]"
            >
              <svg className="w-4 h-4 text-[#F2C942]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;