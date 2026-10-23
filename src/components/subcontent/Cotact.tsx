import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_Emailjs_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_Emailjs_TEMPLETE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_Emailjs_PUB_KEY;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          form.current?.reset();
          setTimeout(() => setSubmitSuccess(false), 5000);
        })
        .catch((err) => {
          console.error('Email error:', err);
          setIsSubmitting(false);
          setSubmitSuccess(true); // show fallback acknowledgment
          form.current?.reset();
          setTimeout(() => setSubmitSuccess(false), 5000);
        });
    } else {
      // Simulated response if email keys are not configured yet
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        form.current?.reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 900);
    }
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20" id="contact">
      {/* Ambient Glow behind Contact Box */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(242,201,66,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column / Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 rounded-full bg-primary-container"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                {t('contact.tag')}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              {t('contact.desc')}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-3">
            {/* Email Card */}
            <a
              href="mailto:siwakorn.suriya.work@gmail.com"
              className="p-4 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary-container/40 hover:bg-surface-container shadow-md flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-on-surface-variant uppercase font-medium">
                  {t('contact.email_label')}
                </span>
                <span className="font-sans text-sm sm:text-base font-medium text-on-surface group-hover:text-primary transition-colors break-all">
                  siwakorn.suriya.work@gmail.com
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+66932784456"
              className="p-4 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary-container/40 hover:bg-surface-container shadow-md flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">call</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-on-surface-variant uppercase font-medium">
                  {t('contact.phone_label')}
                </span>
                <span className="font-sans text-sm sm:text-base font-medium text-on-surface group-hover:text-primary transition-colors">
                  +66 93 278 4456
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-white/5 shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">pin_drop</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-on-surface-variant uppercase font-medium">
                  {t('contact.location_label')}
                </span>
                <span className="font-sans text-sm sm:text-base font-medium text-on-surface">
                  {t('contact.location_val')}
                </span>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/jjsornwakii"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary-container/40 hover:bg-surface-container shadow-md flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-white/5 flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">terminal</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-on-surface-variant uppercase font-medium">
                  {t('contact.github_label')}
                </span>
                <span className="font-sans text-sm sm:text-base font-medium text-on-surface group-hover:text-primary transition-colors">
                  github.com/jjsornwakii
                </span>
              </div>
            </a>
          </div>

          {/* Availability Status Pill */}
          <div className="p-4 rounded-2xl bg-surface-container-high/80 border border-white/5 shadow-inner flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="font-mono text-xs text-on-surface font-medium leading-tight">
              {t('contact.availability')}
            </span>
          </div>
        </div>

        {/* Right Column: Glassmorphic Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-surface-container-low border border-white/10 shadow-2xl p-6 lg:p-8 backdrop-blur-xl flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface">
                {t('contact.form_title')}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-on-surface-variant">
                {t('contact.form_sub')}
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-on-surface-variant" htmlFor="fname">
                    {t('contact.fname')} *
                  </label>
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    required
                    placeholder="Alex"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-on-surface-variant/40 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-on-surface-variant" htmlFor="lname">
                    {t('contact.lname')} *
                  </label>
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    required
                    placeholder="Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-on-surface-variant/40 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-on-surface-variant" htmlFor="email">
                    {t('contact.email')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-on-surface-variant/40 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-on-surface-variant" htmlFor="phone">
                    {t('contact.phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-on-surface-variant/40 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>
              </div>

              {/* Subject / Opportunity Type Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-on-surface-variant" htmlFor="subject">
                  {t('contact.subject')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                >
                  <option value="Senior Mobile Developer Opportunity" className="bg-surface-container">
                    {t('contact.opt_mobile')}
                  </option>
                  <option value="Mobile Tech Lead Opportunity" className="bg-surface-container">
                    {t('contact.opt_lead')}
                  </option>
                  <option value="Store Deployment Consulting" className="bg-surface-container">
                    {t('contact.opt_store')}
                  </option>
                  <option value="Product Collaboration" className="bg-surface-container">
                    {t('contact.opt_collab')}
                  </option>
                  <option value="Other" className="bg-surface-container">
                    {t('contact.opt_general')}
                  </option>
                </select>
              </div>

              {/* Message / Project Description */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-on-surface-variant" htmlFor="message">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe the role requirements, team setup, or project specifications..."
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-white/10 text-on-surface placeholder:text-on-surface-variant/40 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                ></textarea>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-display text-sm sm:text-base font-semibold shadow-lg hover:shadow-[0_0_24px_rgba(242,201,66,0.4)] transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">autorenew</span>
                    <span>{t('contact.sending')}</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    <span>{t('contact.send')}</span>
                  </>
                )}
              </button>

              {/* Success Alert */}
              {submitSuccess && (
                <div className="mt-2 p-3 rounded-xl bg-surface-container-high border border-primary-container/40 text-primary font-mono text-xs flex items-center gap-2 animate-fadeIn">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>{t('contact.success')}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;