import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col container mx-auto p-8 my-12  justify-center text-white">
            <div className="text-2xl font-semibold inline-block border-b border-[#F2C942] self-center">
                ABOUT ME
            </div>
            <div className=" inline-block pt-5 font-thin w-[70%] text-center  self-center">
                {t('aboutme')}
            </div>
        </div>
    );
}

export default About