import type React from "react";
import { useState, useRef, useEffect } from "react";

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

const main_img = ['assets\\img\\p3\\m1.png',
    'assets\\img\\p3\\m2.png'
]




const Portfolio3: React.FC = () => {

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


        <div className="container pt-16">
            <div className="flex flex-col  md:px-28">
                <div className="flex  flex-col md:flex-row  gap-14  ">
                    <div className="flex gap-4 justify-center">
                    {
                        main_img.map((_src, index) => (
                            <img src={_src} alt={`Image ${index + 1}`} className="max-w-[120px] min-w-[100px] md:min-h-[10px] md:max-h-[320px] w-auto object-contain" ></img>
                        )
                        )
                    }
                    </div>
                    <div className="flex flex-col text-left">
                        <div className="font-bold text-3xl">
                            แอปพลิเคชันบันทึกสุขภาพ<br /> และวิเคราะห์ความเสี่ยงโรคเบาหวาน                        </div>
                        <hr className="my-3 border-t border-[#F2C942] border-2"></hr>
                        <div className="font-sans text-[24px]">
                            Health Record & Diabetes Risk Analysis Application                        </div>
                        <div className="pt-9 ">
                            ระบบแสดงผลการวัดชีพจร นับก้าวเดิน

                        </div>
                        <div className="flex flex-wrap gap-2 text-black mt-5">
                            <TagBox cat={"Flutter"}></TagBox>
                            <TagBox cat={"PHP"}></TagBox>
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

export default Portfolio3