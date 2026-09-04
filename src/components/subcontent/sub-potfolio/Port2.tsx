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

const main_img = 'assets\\img\\p2\\m1.png'

const images = [
    "assets\\img\\p2\\e2-1.png",
    "assets\\img\\p2\\e2-2.png"
];


interface SelectedImageType {
    src: string;
    index: number; // แก้เป็น number แทน string
}

const Portfolio2: React.FC = () => {
    const { t } = useTranslation();

    const [showButtons, setShowButtons] = useState<boolean>(false);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<SelectedImageType | null>(null);


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

    //// Zoom Img

    const openModal = (imageSrc: string, index: number) => { // เปลี่ยน index เป็น number
        setSelectedImage({ src: imageSrc, index });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage && selectedImage.index < images.length - 1) {
            const nextIndex = selectedImage.index + 1;
            setSelectedImage({ src: images[nextIndex], index: nextIndex });
        }
    };

    const prevImage = () => {
        if (selectedImage && selectedImage.index > 0) {
            const prevIndex = selectedImage.index - 1;
            setSelectedImage({ src: images[prevIndex], index: prevIndex });
        }
    };



    return (<>


        <div className="w-full glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#F2C942]/40 transition-all duration-300 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Main image preview */}
                <div className="relative group overflow-hidden rounded-xl bg-black/40 border border-white/10 p-2 max-w-sm flex-shrink-0">
                    <img 
                        src={main_img} 
                        className="max-h-[260px] w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105" 
                        alt="Wear OS Smartwatch Application" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                        <span className="text-xs text-[#F2C942] font-semibold tracking-wider">Wear OS & Line Alerts</span>
                    </div>
                </div>

                <div className="flex flex-col text-left space-y-3 flex-1">
                    <div className="inline-block self-start px-2.5 py-0.5 rounded-full bg-[#F2C942]/15 border border-[#F2C942]/30 text-[#F2C942] text-[11px] font-semibold uppercase tracking-wider">
                        Smart Watch (Wear OS) & Health IoT
                    </div>

                    <h3 className="font-bold text-xl sm:text-2xl text-white">
                        แอปพลิเคชันตรวจจับความผิดปกติของร่างกายบน Wear OS พร้อมระบบแจ้งเตือน Line
                    </h3>

                    <div className="text-sm font-light text-gray-300 tracking-wide">
                        Health Detection Smart Watch & Monitoring Website
                    </div>

                    <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 pt-2 font-light">
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t("port2-1")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t("port2-2")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t("port2-3")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t("port2-4")}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#F2C942]">▹</span>
                            <span>{t("port2-5")}</span>
                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-3">
                        <TagBox cat={"Wear OS"} />
                        <TagBox cat={"Flutter"} />
                        <TagBox cat={"Line Notify API"} />
                        <TagBox cat={"PHP"} />
                        <TagBox cat={"MySQL"} />
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

            <div className="flex flex-row px-0 md:px-28 overflow-x-auto pt-7 gap-3 scrollbar-hide scroll-smooth"
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
        </div>
        </div>

        {/* Modal */}
        {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeModal}>
                <div className="relative max-w-4xl max-h-full p-4">
                    {/* ปุ่มปิด */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* ปุ่มก่อนหน้า */}
                    {selectedImage.index > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}

                    {/* ปุ่มถัดไป */}
                    {selectedImage.index < images.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}

                    {/* รูปภาพ */}
                    <img
                        src={selectedImage.src}
                        alt={`Image ${selectedImage.index + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* ตัวนับรูป */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                        {selectedImage.index + 1} / {images.length}
                    </div>
                </div>
            </div>
        )}
    </>);
}

export default Portfolio2