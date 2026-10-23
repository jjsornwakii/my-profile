import React from 'react';
import { useTranslation } from 'react-i18next';

const Skill: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      {/* Header */}
      <div className="flex flex-col items-start gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-8 h-1 rounded-full bg-secondary"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-secondary font-semibold">
            {t('skills.tag')}
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">
          {t('skills.title')}
        </h2>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {t('skills.desc')}
        </p>
      </div>

      {/* Bento Box Grid for Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. Core Mobile Development (Primary Focus) */}
        <div className="rounded-2xl bg-surface-container-low border border-primary-container/30 p-6 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-primary-container/60 hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(242,201,66,0.2)_0%,transparent_70%)] blur-xl pointer-events-none"></div>
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">smartphone</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-bold shadow-sm">
                {t('skills.primary_focus')}
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-on-surface">{t('skills.core_mobile')}</h3>
              <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                {t('skills.core_mobile_desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high border border-primary-container/30 text-primary font-mono text-xs font-semibold shadow-sm hover:border-primary-container hover:-translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-[14px] text-secondary">star</span>
              <span>Kotlin Native</span>
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">
              Android SDK (API 34)
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">
              Store Ops & Release
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">
              Swift (iOS)
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">
              Flutter
            </span>
          </div>
        </div>

        {/* 2. Frontend & UI Engineering */}
        <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 shadow-md flex flex-col justify-between hover:bg-surface-container hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">web</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-surface-container-highest border border-white/5 text-on-surface-variant font-medium">
                Web Interfaces
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-on-surface">{t('skills.frontend_ui')}</h3>
              <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                {t('skills.frontend_desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-primary-container/40 hover:-translate-y-0.5 transition-all">ReactJS</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-primary-container/40 hover:-translate-y-0.5 transition-all">TypeScript</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-primary-container/40 hover:-translate-y-0.5 transition-all">Tailwind CSS</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-primary-container/40 hover:-translate-y-0.5 transition-all">JavaScript (ES6+)</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-primary-container/40 hover:-translate-y-0.5 transition-all">HTML5 / CSS3</span>
          </div>
        </div>

        {/* 3. Backend & Cloud Database */}
        <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 shadow-md flex flex-col justify-between hover:bg-surface-container hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-tertiary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">database</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-surface-container-highest border border-white/5 text-on-surface-variant font-medium">
                Data & APIs
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-on-surface">{t('skills.backend_cloud')}</h3>
              <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                {t('skills.backend_desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-tertiary/40 hover:-translate-y-0.5 transition-all">NestJS</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-tertiary/40 hover:-translate-y-0.5 transition-all">PostgreSQL</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-tertiary/40 hover:-translate-y-0.5 transition-all">PHP</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-tertiary/40 hover:-translate-y-0.5 transition-all">MySQL</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-tertiary/40 hover:-translate-y-0.5 transition-all">.NET Core</span>
          </div>
        </div>

        {/* 4. Developer Tooling & Workflow */}
        <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 shadow-md flex flex-col justify-between hover:bg-surface-container hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-on-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-[24px]">build_circle</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-surface-container-highest border border-white/5 text-on-surface-variant font-medium">
                Pipelines
              </span>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-on-surface">{t('skills.dev_tooling')}</h3>
              <p className="font-sans text-xs text-on-surface-variant mt-1 leading-relaxed">
                {t('skills.dev_tooling_desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">Android Studio</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">VS Code</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">Git / GitHub Actions</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">Docker</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">Postman</span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs hover:border-white/20 hover:-translate-y-0.5 transition-all">Linux Env</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
