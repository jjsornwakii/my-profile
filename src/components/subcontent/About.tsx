import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      {/* Header with Accent Bar */}
      <div className="flex flex-col items-start gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 rounded-full bg-primary-container"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
            {t('about.tag')}
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">
          {t('about.title')}
        </h2>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {t('about.desc')}
        </p>
      </div>

      {/* 3 Interactive Core Pillar Cards in 3-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1: Kotlin Native Core */}
        <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between shadow-xl hover:bg-surface-container hover:border-primary-container/40 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shadow-sm border border-white/5">
              <span className="material-symbols-outlined text-[28px]">android</span>
            </div>
            <div>
              <span className="font-mono text-xs text-secondary uppercase font-semibold">Pillar 01</span>
              <h3 className="font-display text-xl text-on-surface font-semibold tracking-tight mt-1">
                {t('about.p1_title')}
              </h3>
            </div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {t('about.p1_desc')}
            </p>
          </div>

          <div className="mt-6 pt-4 bg-surface-container-lowest/60 rounded-xl p-3 border border-white/5">
            <div className="flex items-center justify-between text-on-surface-variant font-mono text-xs mb-1.5">
              <span>{t('about.p1_metric')}</span>
              <span className="text-primary font-medium">&lt; 8.3ms</span>
            </div>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full rounded-full w-11/12"></div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Store Operations & Deployment */}
        <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between shadow-xl hover:bg-surface-container hover:border-secondary/40 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shadow-sm border border-white/5">
              <span className="material-symbols-outlined text-[28px]">cloud_upload</span>
            </div>
            <div>
              <span className="font-mono text-xs text-secondary uppercase font-semibold">Pillar 02</span>
              <h3 className="font-display text-xl text-on-surface font-semibold tracking-tight mt-1">
                {t('about.p2_title')}
              </h3>
            </div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {t('about.p2_desc')}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 rounded-full bg-surface-container-highest border border-white/5 text-on-surface font-mono text-xs flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
              <span>App Store Connect</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-highest border border-white/5 text-on-surface font-mono text-xs flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
              <span>Play Console</span>
            </span>
          </div>
        </div>

        {/* Pillar 3: Modernization & Business Systems */}
        <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 flex flex-col justify-between shadow-xl hover:bg-surface-container hover:border-primary-container/40 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-container shadow-sm border border-white/5">
              <span className="material-symbols-outlined text-[28px]">published_with_changes</span>
            </div>
            <div>
              <span className="font-mono text-xs text-secondary uppercase font-semibold">Pillar 03</span>
              <h3 className="font-display text-xl text-on-surface font-semibold tracking-tight mt-1">
                {t('about.p3_title')}
              </h3>
            </div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {t('about.p3_desc')}
            </p>
          </div>

          <div className="mt-6 pt-4 flex items-center justify-between bg-surface-container-lowest/60 rounded-xl p-3 border border-white/5">
            <span className="font-mono text-xs text-on-surface-variant">{t('about.p3_metric')}</span>
            <span className="font-mono text-xs text-primary font-semibold bg-surface-container px-2.5 py-0.5 rounded-full border border-white/5">
              {t('about.p3_badge')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;