import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col container mx-auto p-4 sm:p-8 my-8 justify-center items-center text-white">
            <div className="relative group">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
                    ABOUT ME
                </h2>
                <div className="h-1 w-16 bg-[#F2C942] mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-32"></div>
            </div>

            <div className="glass-panel p-6 sm:p-10 rounded-2xl max-w-4xl mt-8 text-center text-gray-200 text-sm sm:text-base leading-relaxed font-light shadow-xl border border-white/5">
                <p>{t('aboutme')}</p>

                {/* Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 text-left">
                    <div className="p-4 rounded-xl bg-black/20 border border-[#F2C942]/20 glow-card">
                        <div className="text-2xl mb-1">🤖</div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Kotlin Native Core</h3>
                        <p className="text-xs text-gray-400 mt-1">Deep Android architecture, Coroutines, Jetpack Compose, Clean Architecture, and performance tuning.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/20 border border-[#F2C942]/20 glow-card">
                        <div className="text-2xl mb-1">📦</div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Store Deployment</h3>
                        <p className="text-xs text-gray-400 mt-1">Google Play Console & App Store Connect pipelines, policy compliance, version releases, and rollout tracking.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/20 border border-[#F2C942]/20 glow-card">
                        <div className="text-2xl mb-1">💼</div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Business & Modernization</h3>
                        <p className="text-xs text-gray-400 mt-1">Refactoring legacy apps for new Android/iOS targets, payment flows, and user-centric business solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;