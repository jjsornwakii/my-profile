import type React from "react";


const Contact: React.FC = () => {

    return (<>
        <div className="flex flex-col container mx-auto p-8 my-12  text-center text-white">
            <div className="text-2xl font-semibold inline-block border-b border-[#F2C942] self-center">
                CONTACT
            </div>

            <form className="flex flex-col pb-10 bg-[#FCFBF6] max-w-[70%] min-w-[50%] mt-5 mx-auto rounded-lg " >
                <div className="text-black text-2xl font-semibold mt-10">
                    Contact Form
                </div>

                <div className="flex flex-col md:flex-row justify-center md:gap-20  mx-auto">
                    <div className="flex flex-1 min-w-0 mt-10 md:mt-5">
                        <input type="text" id="fname" placeholder="First Name"
                            className="w-full  p-2 rounded-md border-[1px] border-[#2c2c2c] 
                        text-black placeholder:text-black
                        focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    </div>

                    <div className="flex flex-1 min-w-0 mt-5 md:mt-5">
                        <input type="text" id="lname" placeholder="Last Name"
                            className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] 
                        text-black  placeholder:text-black
                        focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:gap-20  mx-auto">
                    <div className="flex flex-1 min-w-0 mt-10 md:mt-5">
                        <input type="text" id="email" placeholder="Email"
                            className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] 
                        text-black placeholder:text-black
                        focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    </div>

                    <div className="flex flex-1 min-w-0 mt-5 md:mt-5 ">
                        <input type="text" id="phone" placeholder="Phone"
                            className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] 
                        text-black  placeholder:text-black
                        focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:gap-20  mx-auto w-full max-w-[78%] md:max-w-[68%]">
                    <div className="flex flex-1 min-w-0 mt-5 md:mt-5 ">
                        <input type="text" id="topic" placeholder="Contact topic"
                            className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] 
                        text-black  placeholder:text-black
                        focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:gap-20  mx-auto w-full max-w-[78%] md:max-w-[68%]">
                    <div className="flex flex-1 min-w-0 mt-5 md:mt-5 ">
                        <textarea id="description" placeholder="Contact description"
                            className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] 
                        text-black  placeholder:text-black
                        focus:outline-none focus:ring-2 focus:ring-gray-700
                        resize-y min-h-[230px]"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        type="submit"
                        className="bg-white text-black px-6 py-2 rounded-full border-2 border-black hover:bg-[#1f1f1f] transition-all"
                    >
                       • Submit
                    </button>

                    
                </div>


            </form>

        </div>
    </>)
}

export default Contact