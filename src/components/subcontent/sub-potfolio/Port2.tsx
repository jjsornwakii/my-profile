import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

type TagBoxProps = {
    cat: string;
};

const TagBox = ({ cat }: TagBoxProps) => {
    return (
        <div className="flex rounded-sm bg-[#F2C942] p-1 hover:text-red-600">
            {cat}
        </div>
    );
}

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


        <div className="container pt-16">
            <div className="flex flex-col px-0 md:px-28">
                <div className="flex  flex-col  md:flex-row  gap-14  ">
                    <img src={main_img} className="min-h-[10px] max-h-[320px] w-auto min-w-[200px] object-contain" alt="img1" ></img>

                    <div className="flex flex-col text-left">
                        <div className="font-bold text-3xl">
                            แอปพลิเคชันตรวจจับความผิดปกติของร่างกาย <br />บน Wear OS และแจ้งเตือนผ่าน Line <br />พร้อมเว็บไซต์สำหรับผู้ดูแล
                        </div>
                        <hr className="my-3 border-t border-[#F2C942] border-2"></hr>
                        <div className="font-sans text-[24px]">
                            Health Detection Smart Watch &  Monitoring Website                        </div>
                        <div className="pt-9 ">
                            {t("port2-1")}<br />
                            {t("port2-2")}<br />
                            {t("port2-3")}<br />
                            {t("port2-4")}<br />
                            {t("port2-5")}
                        </div>
                        <div className="flex flex-wrap gap-2 text-black mt-5">
                            <TagBox cat={"Flutter"}></TagBox>
                            <TagBox cat={"PHP"}></TagBox>
                            <TagBox cat={"Bootstrap"}></TagBox>
                            <TagBox cat={"MySQL"}></TagBox>
                        </div>
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