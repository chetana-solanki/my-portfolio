import React from 'react'
import abc from '../assets/abc.jpg'
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div className="flex flex-col-reverse md:flex-row items-center md:items-start px-6 md:pl-20"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="pt-10 md:pt-52 px-4 md:px-10 w-full md:w-3/5 text-center md:text-left">
                <h2><b>Hello,</b></h2>
                <h1><b className="text-4xl md:text-5xl">I'm </b><b className="text-yellow-500 text-4xl md:text-5xl">Chetana</b></h1>
                <h1 className="text-3xl md:text-5xl pt-1"><b>FullStack Developer</b></h1>
                <p className="text-sm md:text-base pt-2 leading-relaxed">
                    I am a skilled and passionate fullstack developer with experience in creating visually appealing and user-friendly Website.
                </p>
                <button onClick={() => window.location.href = "mailto:chetanapatel220@gmail.com"} className="text-black font-thin text-lg cursor-pointer hover:bg-slate-300 rounded-lg mt-5 h-8 w-24 bg-green-500">
                    <b>Hire me</b>
                </button>
            </div>

            <div className="w-3/4 sm:w-2/3 md:w-2/5 mb-8 md:mb-0">
                <img src={abc} alt="profile" className="w-96 h-96 mt-16 object-cover rounded-full" />
            </div>
        </motion.div>
    )
}





