import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

type TagBoxProps = {
    cat: string;
};

const TagBox = ({ cat }: TagBoxProps) => {
    return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F2C942]/10 border border-[#F2C942]/30 text-[#F2C942] hover:bg-[#F2C942] hover:text-black transition-all duration-200 cursor-default">
            {cat}
        </span>
    );
};

const main_img = ['assets\\img\\p3\\m1.png',
    'assets\\img\\p3\\m2.png'
]




const Portfolio4: React.FC = () => {

    const { t } = useTranslation();

    const [showButtons, setShowButtons] = useState<boolean>(false);


    /// Scroll Img

    const scrollContainerRef = useRef<HTMLDivElement>(null);  // สร้าง ref สำหรับอ้างอิง div ที่จะ scroll

    const checkOverflow = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const isOverflowing = container.scrollWidth > container.clientWidth;
            setShowButtons(isOverflowing);
        }
    };

    useEffect(() => {
        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, []);

    const scrollLeft = () => {
        // 2. ตรวจสอบให้แน่ใจว่า scrollContainerRef.current ไม่ใช่ null
        // และ TypeScript ก็จะเข้าใจว่ามันเป็น HTMLDivElement
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };






    return (<>


        <div className="w-full glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#F2C942]/40 transition-all duration-300 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Mockups */}
                <div className="flex gap-3 justify-center bg-black/40 p-3 rounded-xl border border-white/10 flex-shrink-0">
                    {main_img.map((_src, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg">
                            <img 
                                src={_src} 
                                alt={`Health App Mockup ${index + 1}`} 
                                className="max-w-[130px] sm:max-w-[150px] max-h-[260px] object-contain transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col text-left space-y-3 flex-1">
                    <div className="inline-block self-start px-2.5 py-0.5 rounded-full bg-[#F2C942]/15 border border-[#F2C942]/30 text-[#F2C942] text-[11px] font-semibold uppercase tracking-wider">
                        Telemetry & Vital Sensing
                    </div>

                    <h3 className="font-bold text-xl sm:text-2xl text-white">
                        แอปพลิเคชันวัดและบันทึกสัญญาณชีพเพื่อการวิเคราะห์สุขภาพ
                    </h3>

                    <div className="text-sm font-light text-gray-300 tracking-wide">
                        Vital Signs Telemetry & Health Log Application
                    </div>

                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 pt-2 font-light">
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t('port3-1')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t('port3-2')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t('port3-3')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t('port3-4')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t('port3-5')}</span>
                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-3">
                        <TagBox cat={"Mobile App"} />
                        <TagBox cat={"Vital Sensors"} />
                        <TagBox cat={"Flutter"} />
                        <TagBox cat={"PHP"} />
                        <TagBox cat={"MySQL"} />
                    </div>
                </div>
            </div>
        </div>
        <div className="relative">
            {showButtons && (
                <div>
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10
                                       hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10
                                       hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
                    >
                        &gt;
                    </button>
                </div>
            )}

            {
                /*
                <div className="flex flex-row overflow-x-auto pt-7 gap-3 scrollbar-hide scroll-smooth"
                ref={scrollContainerRef}>
                {images.map((_src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 cursor-pointer relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => openModal(_src, index)}
                    >
                        {hoveredIndex === index && (
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10 rounded-lg transition-all duration-200">
                                <div className="text-white text-center">
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="mx-auto mb-2 animate-pulse"
                                    >
                                        <path
                                            d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19S2 15.194 2 10.5 5.806 2 10.5 2 19 5.806 19 10.5Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8 10.5H13M10.5 8V13"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="text-sm font-medium">คลิกเพื่อขยาย</p>
                                </div>
                            </div>
                        )}

                        <img
                            src={_src}
                            alt={`Image ${index + 1}`}
                            className="h-auto max-w-full rounded-lg"
                            style={{ height: '170px' }}
                        />
                    </div>
                ))}
            </div>
           */
            }
        </div>


    </>);
}

export default Portfolio4