import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  // Mouse tilt tracking for the right showcase card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'code' | 'photo'>('code');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: -(y / rect.height) * 8, y: (x / rect.width) * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
      {/* Ambient Golden & Obsidian Back-Glows */}
      <div className="absolute -top-12 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(242,201,66,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(235,231,248,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column / Main Bio */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/90 border border-white/10 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-mono text-xs text-primary font-medium tracking-wide uppercase">
              {t('hero.status')}
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface">
              {t('hero.greeting')}{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent">
                {t('hero.name')}
              </span>
            </h1>
            <p className="font-display text-xl sm:text-2xl text-on-surface-variant font-medium tracking-tight mt-1">
              {t('hero.headline')}
            </p>
          </div>

          {/* Bio Brief */}
          <p className="font-sans text-base sm:text-lg text-on-surface/90 max-w-xl leading-relaxed">
            {t('hero.bio')}
          </p>

          {/* Quick Skill Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-white/10 shadow-sm hover:border-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-[16px] text-secondary">phone_iphone</span>
              <span className="font-mono text-xs text-on-surface font-medium">{t('hero.chip_kotlin')}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-white/10 shadow-sm hover:border-primary/40 transition-colors">
              <span className="material-symbols-outlined text-[16px] text-primary">storefront</span>
              <span className="font-mono text-xs text-on-surface font-medium">{t('hero.chip_store')}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-white/10 shadow-sm hover:border-tertiary/40 transition-colors">
              <span className="material-symbols-outlined text-[16px] text-tertiary">domain_verification</span>
              <span className="font-mono text-xs text-on-surface font-medium">{t('hero.chip_solutions')}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-white/10 shadow-sm hover:border-white/20 transition-colors">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">file_download</span>
              <span className="font-mono text-xs text-on-surface font-medium">{t('hero.chip_swift')}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-white/10 shadow-sm hover:border-secondary/40 transition-colors">
              <span className="material-symbols-outlined text-[16px] text-secondary">flutter</span>
              <span className="font-mono text-xs text-on-surface font-medium">{t('hero.chip_flutter')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="/pdf/Resume.pdf"
              download="Siwakorn_Suriya_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-on-primary-container font-medium text-sm sm:text-base font-semibold shadow-lg hover:shadow-[0_0_24px_rgba(242,201,66,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>{t('hero.download_cv')}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high/80 border border-white/10 text-on-surface font-medium text-sm sm:text-base hover:bg-surface-bright shadow-sm hover:text-primary transition-all duration-300 hover:border-primary-container/40"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
              <span>{t('hero.get_in_touch')}</span>
            </a>
          </div>

          {/* Direct Connect Strip with Copy interaction */}
          <div className="w-full mt-2 pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-on-surface-variant border-t border-white/5">
            <button
              onClick={() => copyToClipboard('+66932784456', 'phone')}
              title="Click to copy phone"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors text-xs font-mono group"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary group-hover:scale-110 transition-transform">call</span>
              <span>+66 93 278 4456</span>
              {copiedItem === 'phone' && (
                <span className="text-[10px] bg-primary-container text-on-primary-container px-1.5 py-0.2 rounded font-bold">Copied!</span>
              )}
            </button>
            <button
              onClick={() => copyToClipboard('siwakorn.suriya.work@gmail.com', 'email')}
              title="Click to copy email"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors text-xs font-mono group"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary group-hover:scale-110 transition-transform">alternate_email</span>
              <span>siwakorn.suriya.work@gmail.com</span>
              {copiedItem === 'email' && (
                <span className="text-[10px] bg-primary-container text-on-primary-container px-1.5 py-0.2 rounded font-bold">Copied!</span>
              )}
            </button>
            <a
              className="inline-flex items-center gap-2 hover:text-primary transition-colors text-xs font-mono group"
              href="https://github.com/jjsornwakii"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px] text-secondary group-hover:scale-110 transition-transform">terminal</span>
              <span>github.com/jjsornwakii</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive 3D Architectural Mockup Card + Real Profile Mode */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Radial Back Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,201,66,0.18)_0%,transparent_75%)] blur-2xl pointer-events-none -z-10"></div>

          {/* Interactive Card */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="w-full max-w-md rounded-2xl bg-surface-container-low border border-white/10 shadow-2xl p-5 flex flex-col gap-4 relative overflow-hidden backdrop-blur-xl group hover:border-primary-container/40"
          >
            {/* Glass Top highlight stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-80"></div>

            {/* Top Card Meta & View Switcher */}
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                <span className="font-mono text-xs text-on-surface-variant ml-2 font-medium">
                  {activeTab === 'code' ? 'MobileKernel.kt' : 'DeveloperProfile.jpg'}
                </span>
              </div>

              {/* View Switcher Pills */}
              <div className="flex items-center p-0.5 rounded-full bg-surface-container-highest border border-white/5 text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    activeTab === 'code'
                      ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Code
                </button>
                <button
                  onClick={() => setActiveTab('photo')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    activeTab === 'photo'
                      ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Profile
                </button>
              </div>
            </div>

            {/* TAB 1: Architectural Code View */}
            {activeTab === 'code' ? (
              <>
                <div className="p-3.5 rounded-xl bg-surface-container-lowest font-mono text-xs text-on-surface flex flex-col gap-1.5 shadow-inner border border-white/5 leading-relaxed">
                  <div className="text-on-surface-variant">// Native Android Production Pipeline</div>
                  <div>
                    <span className="text-secondary font-semibold">class</span>{' '}
                    <span className="text-primary font-semibold">StoreReleaseCoordinator</span> @Inject{' '}
                    <span className="text-secondary font-semibold">constructor</span>(
                  </div>
                  <div className="pl-4 text-on-surface">
                    <span className="text-tertiary">val</span> sdkModernizer:{' '}
                    <span className="text-primary">AndroidTarget34Provider</span>,
                  </div>
                  <div className="pl-4 text-on-surface">
                    <span className="text-tertiary">val</span> playPublisher:{' '}
                    <span className="text-primary">AppStoreConsolePipeline</span>
                  </div>
                  <div>) : <span className="text-tertiary">ArchitectureScope</span> &#123;</div>
                  <div className="pl-4 text-on-surface-variant">// Zero frame-drop render thread</div>
                  <div className="pl-4">
                    <span className="text-tertiary">suspend fun</span>{' '}
                    <span className="text-primary font-semibold">deployProductionArtifact</span>() &#123;
                  </div>
                  <div className="pl-8 text-on-surface-variant">coroutineScope.launch(Dispatchers.Default) &#123;</div>
                  <div className="pl-12 text-primary font-medium">validateCleanArchitecture()</div>
                  <div className="pl-12 text-secondary font-medium">benchmarkMemoryFootprint()</div>
                  <div className="pl-8 text-on-surface-variant">&#125;</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                </div>

                {/* Metric Cards Row inside Card */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-surface-container border border-white/5 flex flex-col gap-1 shadow-sm">
                    <div className="flex items-center gap-1.5 text-secondary">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span className="font-mono text-xs font-semibold">Store Pipeline</span>
                    </div>
                    <div className="font-display text-lg font-bold text-on-surface">{t('hero.store_releases')}</div>
                    <div className="font-sans text-xs text-on-surface-variant">{t('hero.store_releases_sub')}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-container border border-white/5 flex flex-col gap-1 shadow-sm">
                    <div className="flex items-center gap-1.5 text-primary">
                      <span className="material-symbols-outlined text-[18px]">speed</span>
                      <span className="font-mono text-xs font-semibold">Performance</span>
                    </div>
                    <div className="font-display text-lg font-bold text-on-surface">{t('hero.fps_stat')}</div>
                    <div className="font-sans text-xs text-on-surface-variant">{t('hero.fps_stat_sub')}</div>
                  </div>
                </div>
              </>
            ) : (
              /* TAB 2: Developer Photo & Identity View */
              <div className="flex flex-col items-center gap-3 py-2 animate-fadeIn">
                <div className="relative group/pic">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-container to-secondary opacity-60 blur-md group-hover/pic:opacity-90 transition-opacity"></div>
                  <img
                    src="/assets/img/profile/b77b2ced-af0e-4101-9248-1eba75670895.jpg"
                    alt="Siwakorn Suriya"
                    className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl object-cover border-2 border-primary-container/40 shadow-xl"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-surface-container-lowest/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-center">
                    <span className="font-mono text-[11px] text-primary font-bold">
                      Siwakorn Suriya (Jay)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-surface-container-highest text-primary font-semibold border border-white/5">
                    {t('hero.kmitl_badge')}
                  </span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-surface-container-highest text-secondary font-semibold border border-white/5">
                    Android & iOS Specialist
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Status Indicator */}
            <div className="flex items-center justify-between pt-1 text-xs font-mono border-t border-white/5">
              <span className="text-on-surface-variant flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                {t('hero.live_pipeline')}
              </span>
              <span className="text-primary font-medium">{t('hero.target_api')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
