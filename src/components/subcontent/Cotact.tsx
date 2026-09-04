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
            <div className="flex flex-col container mx-auto p-4 sm:p-8 my-8 text-center text-white">
                <div className="relative group self-center">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-white">
                        CONTACT
                    </h2>
                    <div className="h-1 w-16 bg-[#F2C942] mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-32"></div>
                </div>

                {/* Form with modern glassmorphism styling */}
                <form 
                    ref={form} 
                    onSubmit={sendEmail} 
                    className="flex flex-col p-6 sm:p-10 glass-panel min-w-[90%] md:min-w-[65%] max-w-3xl mt-8 mx-auto rounded-2xl shadow-2xl border border-white/10"
                >
                    <div className="text-white text-xl sm:text-2xl font-bold mb-6 text-center">
                        Let's build something great together
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="flex flex-1 min-w-0">
                            <input 
                                type="text" 
                                id="fname" 
                                name="fname" 
                                placeholder="First Name *" 
                                required
                                className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#F2C942] focus:ring-1 focus:ring-[#F2C942] transition-all"
                            />
                        </div>
                        <div className="flex flex-1 min-w-0">
                            <input 
                                type="text" 
                                id="lname" 
                                name="lname" 
                                placeholder="Last Name *" 
                                required
                                className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#F2C942] focus:ring-1 focus:ring-[#F2C942] transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full mt-4">
                        <div className="flex flex-1 min-w-0">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Email Address *" 
                                required
                                className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#F2C942] focus:ring-1 focus:ring-[#F2C942] transition-all"
                            />
                        </div>
                        <div className="flex flex-1 min-w-0">
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="Phone Number"
                                className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#F2C942] focus:ring-1 focus:ring-[#F2C942] transition-all"
                            />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <input 
                            type="text" 
                            id="topic" 
                            name="topic" 
                            placeholder="Topic / Opportunity *" 
                            required
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#F2C942] focus:ring-1 focus:ring-[#F2C942] transition-all"
                        />
                    </div>

                    <div className="w-full mt-4">
                        <textarea 
                            id="description" 
                            name="description" 
                            placeholder="Tell me about your project or inquiry..."
                            rows={5}
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#F2C942] focus:ring-1 focus:ring-[#F2C942] transition-all resize-y"
                        />
                    </div>

                    {/* Status message */}
                    {submitStatus && (
                        <div className={`mt-4 p-3 rounded-xl text-sm font-medium ${submitStatus.includes('successfully') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                            {submitStatus}
                        </div>
                    )}

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#F2C942] hover:bg-[#e0b835] text-black font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;