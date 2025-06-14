import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import.meta.env 

const Contact: React.FC = () => {
    // ใช้ useRef เพื่ออ้างอิงถึง <form> element
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);

     const SERVICE_ID = import.meta.env.VITE_Emailjs_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_Emailjs_TEMPLETE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_Emailjs_PUB_KEY;



    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // ป้องกันไม่ให้หน้าเว็บโหลดใหม่

        if (!form.current) return;

        setIsSubmitting(true);
        setSubmitStatus(null);


       
        // ใส่ Service ID, Template ID, และ Public Key ของคุณตรงนี้
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus("Message sent successfully!");
                setIsSubmitting(false);
                form.current?.reset(); // เคลียร์ฟอร์มหลังส่งสำเร็จ
            }, (error) => {
                console.log(error.text);
                setSubmitStatus("Failed to send the message, please try again.");
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <div className="flex flex-col container mx-auto p-8 my-12 text-center text-white">
                <div className="text-2xl font-semibold inline-block border-b border-[#F2C942] self-center">
                    CONTACT
                </div>

                {/* เพิ่ม ref และ onSubmit ให้กับ form */}
                <form ref={form} onSubmit={sendEmail} className="flex flex-col pb-10 bg-[#FCFBF6] min-w-[90%] md:min-w-[70%] mt-5 mx-auto rounded-lg ">
                    <div className="text-black text-2xl font-semibold mt-10">
                        Contact Form
                    </div>

                    {/* *** สำคัญ: เพิ่ม attribute 'name' ให้กับ input ทุกตัว *** */}
                    <div className="flex flex-col md:flex-row md:gap-20 w-full max-w-[90%] md:max-w-[70%] mx-auto">
                        <div className="flex flex-1 min-w-0 mt-10 md:mt-5">
                            <input type="text" id="fname" name="fname" placeholder="First Name *" required
                                className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>
                        <div className="flex flex-1 min-w-0 mt-5 md:mt-5">
                            <input type="text" id="lname" name="lname" placeholder="Last Name *" required
                                className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-20 w-full max-w-[90%] md:max-w-[70%] mx-auto">
                        <div className="flex flex-1 min-w-0 mt-10 md:mt-5">
                            <input type="email" id="email" name="email" placeholder="Email *" required
                                className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>
                        <div className="flex flex-1 min-w-0 mt-5 md:mt-5">
                            <input type="tel" id="phone" name="phone" placeholder="Phone"
                                className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-20 mx-auto w-full max-w-[90%] md:max-w-[70%]">
                        <div className="flex flex-1 min-w-0 mt-10 md:mt-5">
                            <input type="text" id="topic" name="topic" placeholder="Contact topic *" required
                                className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-20 mx-auto w-full max-w-[90%] md:max-w-[70%]">
                        <div className="flex flex-1 min-w-0 mt-5 md:mt-5">
                            <textarea id="description" name="description" placeholder="Contact description"
                                className="w-full p-2 rounded-md border-[1px] border-[#2c2c2c] text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-700 resize-y min-h-[230px]"
                            />
                        </div>
                    </div>

                    {/* แสดงสถานะการส่ง */}
                    {submitStatus && (
                        <div className="mt-4 text-black">
                            {submitStatus}
                        </div>
                    )}

                    <div className="flex justify-center mt-10">
                        <button
                            type="submit"
                            disabled={isSubmitting} // ปิดปุ่มตอนกำลังส่ง
                            className="bg-white text-black px-6 py-2 rounded-full border-2 border-black hover:bg-[#1f1f1f] hover:text-white transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : '• Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;