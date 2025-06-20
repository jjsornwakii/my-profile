import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col container mx-auto p-8 my-12  justify-center items-center text-white">
            <div className="text-2xl font-semibold inline-block border-b border-[#F2C942] ">
                ABOUT ME
            </div>
            <div className="text-sm md:text-base inline-block pt-5 font-thin w-[100%] md:w-[70%] text-center ">
                {t('aboutme')}
            </div>
        </div>
    );
}

export default About