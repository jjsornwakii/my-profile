import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LightboxState {
  images: string[];
  currentIndex: number;
  title: string;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'wearable' | 'web'>('all');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  // Active view for each project: 'preview' (Simulation) vs 'gallery' (Real Screenshots)
  const [viewModes, setViewModes] = useState<{ [key: string]: 'preview' | 'gallery' }>({
    p1: 'preview',
    p2: 'preview',
    p3: 'preview',
  });

  const toggleViewMode = (projectKey: string, mode: 'preview' | 'gallery') => {
    setViewModes(prev => ({ ...prev, [projectKey]: mode }));
  };

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, currentIndex: index, title });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const nextLightboxImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length,
    });
  };

  const prevLightboxImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  // Real Project Screenshot Assets
  const p1Images = [
    '/assets/img/p3/m1.png',
    '/assets/img/p3/m2.png',
  ];

  const p2Images = [
    '/assets/img/p2/m1.png',
    '/assets/img/p2/e2-1.png',
    '/assets/img/p2/e2-2.png',
  ];

  const p3Images = [
    '/assets/img/p1/m1.png',
    '/assets/img/p1/e1-1.png',
    '/assets/img/p1/e1-2.png',
    '/assets/img/p1/e1-3.png',
    '/assets/img/p1/e1-4.png',
    '/assets/img/p1/e1-5.png',
  ];

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
      {/* Header and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-1 rounded-full bg-primary"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              {t('projects.tag')}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {t('projects.desc')}
          </p>
        </div>

        {/* Filter Tabs Container */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-surface-container-low border border-white/10 shadow-sm self-start md:self-auto flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-primary-container text-on-primary-container shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {t('projects.filter_all')}
          </button>
          <button
            onClick={() => setActiveFilter('mobile')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all duration-200 ${
              activeFilter === 'mobile'
                ? 'bg-primary-container text-on-primary-container shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {t('projects.filter_mobile')}
          </button>
          <button
            onClick={() => setActiveFilter('wearable')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all duration-200 ${
              activeFilter === 'wearable'
                ? 'bg-primary-container text-on-primary-container shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {t('projects.filter_wearable')}
          </button>
          <button
            onClick={() => setActiveFilter('web')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all duration-200 ${
              activeFilter === 'web'
                ? 'bg-primary-container text-on-primary-container shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {t('projects.filter_web')}
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {/* Project 1: Health Record & Diabetes Risk Analysis App */}
        {(activeFilter === 'all' || activeFilter === 'mobile') && (
          <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row gap-8 items-center hover:bg-surface-container hover:border-primary-container/30 transition-all duration-300">
            {/* Visual Column */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3">
              {/* Toggle Simulation vs Real Screenshots */}
              <div className="flex items-center justify-between pb-1">
                <span className="font-mono text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">visibility</span>
                  Interactive Display
                </span>
                <div className="flex items-center p-0.5 rounded-full bg-surface-container-highest border border-white/5 text-[10px] font-mono">
                  <button
                    onClick={() => toggleViewMode('p1', 'preview')}
                    className={`px-2 py-0.5 rounded-full transition-all ${
                      viewModes.p1 === 'preview'
                        ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Sensor View
                  </button>
                  <button
                    onClick={() => toggleViewMode('p1', 'gallery')}
                    className={`px-2 py-0.5 rounded-full transition-all ${
                      viewModes.p1 === 'gallery'
                        ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    App Shots ({p1Images.length})
                  </button>
                </div>
              </div>

              {viewModes.p1 === 'preview' ? (
                /* Simulation Card */
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container-high border border-white/5 flex flex-col items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-surface-container-low to-surface-container opacity-90"></div>
                  
                  <div className="relative z-10 w-full flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shadow-lg relative border border-white/10">
                      <span className="material-symbols-outlined text-[32px] text-error">favorite</span>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-40"></span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-primary font-medium">
                      <span>PPG Camera Sensor</span>
                      <span>•</span>
                      <span className="text-on-surface font-bold">74 BPM</span>
                    </div>

                    {/* Pulse Wave Sparkline SVG */}
                    <svg className="w-full h-12 text-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 300 50">
                      <path
                        d="M0 25 L60 25 L75 25 L85 5 L95 45 L105 15 L115 35 L125 25 L180 25 L190 5 L200 45 L210 15 L220 35 L230 25 L300 25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="flex items-center justify-between w-full px-4 text-on-surface-variant font-mono text-xs">
                      <span>Photoplethysmography Active</span>
                      <span className="text-secondary font-semibold">98.4% Acc</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Real Screenshots Gallery */
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container-high border border-white/5 flex items-center justify-center p-3 gap-3">
                  {p1Images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(p1Images, idx, t('projects.p1.title'))}
                      className="relative h-full flex-1 rounded-lg overflow-hidden border border-white/10 hover:border-primary-container cursor-pointer group transition-all"
                    >
                      <img src={img} alt="App preview" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="material-symbols-outlined text-white text-[24px]">zoom_in</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Column */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest border border-white/5 text-secondary font-mono text-xs font-semibold">
                  {t('projects.p1.category')}
                </span>
                <span className="font-mono text-xs text-on-surface-variant">
                  {t('projects.p1.badge')}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface">
                {t('projects.p1.title')}
              </h3>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {t('projects.p1.desc')}
              </p>

              {/* Key Features Bullet List */}
              <ul className="space-y-2.5 font-sans text-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Heart rate measurement:</strong> {t('projects.p1.f1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Health tracking:</strong> {t('projects.p1.f2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Historical logs:</strong> {t('projects.p1.f3')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Recommendations:</strong> {t('projects.p1.f4')}</span>
                </li>
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">Flutter</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">PHP</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">MySQL</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-primary-container/30 text-primary font-mono text-xs font-medium">Smartphone Camera PPG Sensor</span>
              </div>
            </div>
          </div>
        )}

        {/* Project 2: Wear OS Abnormal Vital Detection & Alert System */}
        {(activeFilter === 'all' || activeFilter === 'wearable' || activeFilter === 'mobile') && (
          <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row gap-8 items-center hover:bg-surface-container hover:border-secondary/30 transition-all duration-300">
            {/* Visual Column */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-1">
                <span className="font-mono text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">watch</span>
                  Wearable Interface
                </span>
                <div className="flex items-center p-0.5 rounded-full bg-surface-container-highest border border-white/5 text-[10px] font-mono">
                  <button
                    onClick={() => toggleViewMode('p2', 'preview')}
                    className={`px-2 py-0.5 rounded-full transition-all ${
                      viewModes.p2 === 'preview'
                        ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Watch Face
                  </button>
                  <button
                    onClick={() => toggleViewMode('p2', 'gallery')}
                    className={`px-2 py-0.5 rounded-full transition-all ${
                      viewModes.p2 === 'gallery'
                        ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    Screens ({p2Images.length})
                  </button>
                </div>
              </div>

              {viewModes.p2 === 'preview' ? (
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container-high border border-white/5 flex flex-col items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-surface-container-low to-surface-container opacity-90"></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-36 h-36 rounded-full bg-surface-container-lowest border-2 border-surface-container-high shadow-2xl p-3 flex flex-col items-center justify-center relative">
                      <div className="absolute inset-1 rounded-full border border-secondary/20"></div>
                      <div className="relative flex flex-col items-center text-center">
                        <span className="font-mono text-[10px] text-secondary font-bold uppercase tracking-wider">
                          Wear OS Live
                        </span>
                        <div className="font-display text-2xl font-bold text-on-surface leading-tight mt-0.5">
                          142 <span className="font-sans text-xs font-normal text-on-surface-variant">BPM</span>
                        </div>
                        <span className="font-mono text-[11px] text-error flex items-center gap-1 mt-0.5 font-medium">
                          <span className="material-symbols-outlined text-[13px]">warning</span> Alert Triggered
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-surface-container-high/90 border border-white/5 px-3 py-1 rounded-full shadow-sm text-on-surface font-mono text-xs">
                      <span className="material-symbols-outlined text-[15px] text-secondary">chat</span>
                      <span>LINE Notify Hook Sent</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container-high border border-white/5 flex items-center justify-center p-3 gap-2">
                  {p2Images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(p2Images, idx, t('projects.p2.title'))}
                      className="relative h-full flex-1 rounded-lg overflow-hidden border border-white/10 hover:border-secondary cursor-pointer group transition-all"
                    >
                      <img src={img} alt="Wear OS preview" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="material-symbols-outlined text-white text-[24px]">zoom_in</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Column */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest border border-white/5 text-secondary font-mono text-xs font-semibold">
                  {t('projects.p2.category')}
                </span>
                <span className="font-mono text-xs text-on-surface-variant">
                  {t('projects.p2.badge')}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface">
                {t('projects.p2.title')}
              </h3>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {t('projects.p2.desc')}
              </p>

              {/* Key Features Bullet List */}
              <ul className="space-y-2.5 font-sans text-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Real-time heart rate:</strong> {t('projects.p2.f1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Fall detection:</strong> {t('projects.p2.f2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>LINE dispatching:</strong> {t('projects.p2.f3')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Admin dashboard:</strong> {t('projects.p2.f4')}</span>
                </li>
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-primary-container/30 text-primary font-mono text-xs font-semibold">Wear OS</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">Flutter</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-secondary font-mono text-xs font-medium">LINE Notify API</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">PHP</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">MySQL</span>
              </div>
            </div>
          </div>
        )}

        {/* Project 3: Automated Vehicle Access Control & Smart Parking Platform */}
        {(activeFilter === 'all' || activeFilter === 'web' || activeFilter === 'wearable') && (
          <div className="rounded-2xl bg-surface-container-low border border-white/10 p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row gap-8 items-center hover:bg-surface-container hover:border-primary/30 transition-all duration-300">
            {/* Visual Column */}
            <div className="w-full lg:w-5/12 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-1">
                <span className="font-mono text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">camera</span>
                  IoT & ALPR Vision
                </span>
                <div className="flex items-center p-0.5 rounded-full bg-surface-container-highest border border-white/5 text-[10px] font-mono">
                  <button
                    onClick={() => toggleViewMode('p3', 'preview')}
                    className={`px-2 py-0.5 rounded-full transition-all ${
                      viewModes.p3 === 'preview'
                        ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    ALPR Simulation
                  </button>
                  <button
                    onClick={() => toggleViewMode('p3', 'gallery')}
                    className={`px-2 py-0.5 rounded-full transition-all ${
                      viewModes.p3 === 'gallery'
                        ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    System Shots ({p3Images.length})
                  </button>
                </div>
              </div>

              {viewModes.p3 === 'preview' ? (
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container-high border border-white/5 flex flex-col items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-surface-container-low to-surface-container opacity-90"></div>
                  
                  <div className="relative z-10 w-full flex flex-col items-center gap-3">
                    <div className="px-6 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 shadow-2xl flex items-center gap-4">
                      <div className="flex flex-col items-start">
                        <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                          ALPR Engine • OCR
                        </span>
                        <span className="font-mono text-lg text-secondary font-bold tracking-wider">
                          1กก 8899 กทม
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[26px]">garage</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
                      <div className="p-2 rounded-lg bg-surface-container border border-white/5 flex flex-col items-center">
                        <span className="font-mono text-[11px] text-on-surface-variant">Gate Status</span>
                        <span className="font-mono text-xs text-primary font-bold">BARRIER OPEN</span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container border border-white/5 flex flex-col items-center">
                        <span className="font-mono text-[11px] text-on-surface-variant">Confidence</span>
                        <span className="font-mono text-xs text-secondary font-bold">99.1% Matched</span>
                      </div>
                    </div>

                    <span className="font-mono text-[11px] text-on-surface-variant">
                      Raspberry Pi 4 Stream • NestJS Hub
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg bg-surface-container-high border border-white/5 grid grid-cols-3 gap-2 p-3">
                  {p3Images.slice(0, 6).map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(p3Images, idx, t('projects.p3.title'))}
                      className="relative h-28 rounded-lg overflow-hidden border border-white/10 hover:border-primary-container cursor-pointer group transition-all"
                    >
                      <img src={img} alt="Parking system preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="material-symbols-outlined text-white text-[20px]">zoom_in</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Column */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest border border-white/5 text-secondary font-mono text-xs font-semibold">
                  {t('projects.p3.category')}
                </span>
                <span className="font-mono text-xs text-on-surface-variant">
                  {t('projects.p3.badge')}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface">
                {t('projects.p3.title')}
              </h3>

              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {t('projects.p3.desc')}
              </p>

              {/* Key Features Bullet List */}
              <ul className="space-y-2.5 font-sans text-sm text-on-surface">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>ALPR Realtime:</strong> {t('projects.p3.f1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Admin dashboard:</strong> {t('projects.p3.f2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>User web portal:</strong> {t('projects.p3.f3')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Payment gateway:</strong> {t('projects.p3.f4')}</span>
                </li>
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-primary-container/30 text-primary font-mono text-xs font-semibold">Python (Raspberry Pi 4)</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">ReactJS</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">NestJS</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-white/5 text-on-surface font-mono text-xs">PostgreSQL</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="w-full max-w-4xl flex items-center justify-between pb-3 text-white border-b border-white/10 mb-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-sm sm:text-base">{lightbox.title}</span>
              <span className="font-mono text-xs text-primary-container bg-surface-container px-2 py-0.5 rounded-full border border-white/10">
                {lightbox.currentIndex + 1} / {lightbox.images.length}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Main Image Viewer */}
          <div className="relative max-w-4xl max-h-[75vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.images[lightbox.currentIndex]}
              alt="Project screenshot full view"
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            />

            {/* Prev/Next buttons */}
            {lightbox.images.length > 1 && (
              <>
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
                >
                  <span className="material-symbols-outlined text-[24px]">chevron_left</span>
                </button>
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110"
                >
                  <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {lightbox.images.length > 1 && (
            <div className="flex gap-2 mt-4 max-w-4xl overflow-x-auto pb-2" onClick={(e) => e.stopPropagation()}>
              {lightbox.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox({ ...lightbox, currentIndex: idx })}
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    lightbox.currentIndex === idx
                      ? 'border-primary-container scale-105'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
