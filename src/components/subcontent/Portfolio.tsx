import React, { useState } from "react";
import Portfolio1 from "./sub-potfolio/Port1";
import Portfolio2 from "./sub-potfolio/Port2";
import Portfolio3 from "./sub-potfolio/Port3";
import Portfolio4 from "./sub-potfolio/Port4";

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'mobile' | 'iot' | 'web'>('all');

    return (
        <div className="flex flex-col container mx-auto p-4 sm:p-8 my-8 text-white">
            <div className="relative group self-center text-center">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
                    FEATURED PROJECTS & PORTFOLIO
                </h2>
                <div className="h-1 w-20 bg-[#F2C942] mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-36"></div>
                <p className="pt-3 text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto">
                    A curated selection of mobile applications, smart IoT integrations, and enterprise web solutions.
                </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
                <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                        filter === 'all'
                            ? 'bg-[#F2C942] text-black shadow-[0_0_15px_rgba(242,201,66,0.3)] scale-105'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                >
                    All Projects
                </button>
                <button
                    onClick={() => setFilter('mobile')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                        filter === 'mobile'
                            ? 'bg-[#F2C942] text-black shadow-[0_0_15px_rgba(242,201,66,0.3)] scale-105'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                >
                    📱 Mobile Applications
                </button>
                <button
                    onClick={() => setFilter('iot')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                        filter === 'iot'
                            ? 'bg-[#F2C942] text-black shadow-[0_0_15px_rgba(242,201,66,0.3)] scale-105'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                >
                    ⌚ IoT & Smart Watch
                </button>
                <button
                    onClick={() => setFilter('web')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                        filter === 'web'
                            ? 'bg-[#F2C942] text-black shadow-[0_0_15px_rgba(242,201,66,0.3)] scale-105'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                >
                    🌐 Web Systems
                </button>
            </div>

            {/* Project List */}
            <div className="flex flex-col gap-y-12 mt-12">
                {(filter === 'all' || filter === 'mobile' || filter === 'iot') && <Portfolio3 />}
                {(filter === 'all' || filter === 'iot' || filter === 'mobile') && <Portfolio2 />}
                {(filter === 'all' || filter === 'web' || filter === 'iot') && <Portfolio1 />}
            </div>
        </div>
    );
};

export default Portfolio;
