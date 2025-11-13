import React, { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3qyf306',   // from EmailJS Email Services
            'template_7rqp9wt',  // from this template you’re editing
            form.current,
            'U9SLFtEnHwZ1VmCXt'    // from EmailJS API Keys
        ).then(
            (result) => {
                alert('Message sent successfully!');
                form.current.reset();
            },
            (error) => {
                console.error(error);
                alert('Failed to send message. Please try again.');
            }
        );
    };
    return (
        <motion.div className="dark:bg-blue-500 bg-gray-600 rounded-2xl p-4 transition-transform shadow-md shadow-white border ml-[10%] mr-[10%] md:mr-0 border-white md:w-[30%] md:ml-[35%] mt-10"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-4xl font-bold font-serif text-white text-center mb-4">Contact Me</h2>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-3">
                <input name="name" className="p-2 text-black hover:bg-slate-300 rounded-lg" type="text" placeholder="Your Name" required />
                <input name="email" className="p-2 text-black hover:bg-slate-300 rounded-lg" type="email" placeholder="Your Email" required />
                <input name="title" className="p-2 text-black hover:bg-slate-300 rounded-lg" type="text" placeholder="Subject" required />
                <textarea name="message" className="text-black hover:bg-slate-300 rounded-lg p-2" rows={4} placeholder="Message" required></textarea>
                <button className="bg-green-500 text-black text-md hover:text-gray-500 p-4 cursor-pointer hover:bg-green-800 rounded-lg" type="submit">
                    Send Me
                </button>
            </form>
        </motion.div>
    )
}
