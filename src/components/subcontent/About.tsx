import React from "react";

const About: React.FC = () => {
    return (
        <div className="flex flex-col container mx-auto p-8 my-12  text-center text-white">
            <div className="text-2xl font-semibold inline-block border-b border-[#F2C942] self-center">ABOUT ME</div>
            <div className="pt-5 font-thin">
                Hello, I’m Mr. Siwakorn Suriya (Jay). I hold a Bachelor's degree in Computer Engineering from the Faculty of Engineering, King Mongkut's Institute of Technology Ladkrabang. I'm highly interested in mobile application development. I specialize in the Flutter framework and have experience in developing mobile applications alongside backend API services that efficiently integrate and work with mobile platforms. I am highly motivated to learn new technologies and eager to contribute my knowledge and skills to support the organization and to create solutions that truly meet user needs. Ultimately, my goal is to develop advanced technologies that benefit both businesses and society in the future.
            </div>
        </div>
    );
}

export default About