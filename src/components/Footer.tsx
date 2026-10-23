import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest/80 border-t border-white/5 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-sm text-on-surface">
              Jay<span className="text-primary-container">.dev</span>
            </span>
            <span className="text-outline text-xs">/</span>
            <span className="font-sans text-xs text-on-surface-variant">
              {t('footer.role')}
            </span>
          </div>
          <p className="font-sans text-xs text-on-surface-variant/80">
            {t('footer.copy')}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/jjsornwakii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-on-surface text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:siwakorn.suriya.work@gmail.com"
            className="text-on-surface-variant hover:text-on-surface text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Email</span>
          </a>
          <a
            href="tel:+66932784456"
            className="text-on-surface-variant hover:text-on-surface text-xs font-mono transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>Phone</span>
          </a>
        </div>

        {/* Back to top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-white/5 text-on-surface-variant hover:text-on-surface text-xs font-mono transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
          <span>{t('footer.back_to_top')}</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;