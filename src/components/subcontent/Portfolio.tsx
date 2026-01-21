import type React from "react";
import Portfolio1 from "./sub-potfolio/Port1";
import Portfolio2 from "./sub-potfolio/Port2";
import Portfolio3 from "./sub-potfolio/Port3";
import Portfolio4 from "./sub-potfolio/Port4";





const Portfolio: React.FC = () => {



    return (
        <div className="flex flex-col container mx-auto p-8 my-12  text-center text-white">
            <div className="text-2xl font-semibold inline-block border-b border-[#F2C942] self-center">
                PORTFOLIO
            </div>

            <div className="flex flex-col   gap-y-9 md:ml-0">
                <Portfolio1 />
                <Portfolio2 />
                <Portfolio3 />
                <Portfolio4 />
            </div>


        </div>

    );
}

export default Portfolio