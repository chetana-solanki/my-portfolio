import React from 'react'
import abc from '../assets/image.jpeg'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


export default function About() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <h1 className="text-center text-gray-400 text-xl mt-4"><b>About Me</b></h1>
      <div className="main-div flex flex-col md:flex-row ">
        <div className="left-div md:w-[30%]  ml-[5%]">
          <h1 className=" text-white  mt-24 text-4xl  ">Chetana Solanki</h1>
          <p className="pt-2 text-gray-400">I’m a creative and passionate web developer focused on building responsive, user-friendly, and visually appealing websites. I enjoy turning ideas into interactive experiences that make a lasting impression.</p>
          <p className="flex mt-5">
            <FaPhone size={15} className="transform -scale-x-100 mt-1 mr-2 text-blue-700" />
            <a href='tel:+916264656074'>+916264656074</a>
          </p>
          <p className="flex mt-1">
            <MdEmail size={15} className="mt-1 mr-2 text-red-700" />
            <a href='mailto:chetanapatel220@gmail.com'>chetanapatel220@gmail.com</a>
          </p>
          <p className="flex mt-1">
            <FaHome size={15} className="mt-1 mr-2 text-yellow-300" />
            <p>17, Prime Park, Limbodi, Indore</p>
          </p>
          <p className="flex mt-1">
            <FaLinkedin size={15} style={{ color: "#0077B5" }} className="mt-1 mr-2" />
            <a href='http://www.linkedin.com/in/chetana-solanki-0a74a7373'>linkedin.com/in/chetana-solanki</a>
          </p>
        </div>
        <div className="middle-div md:w-[30%] flex justify-center items-center">
          <img src={abc} alt="profile" className="h-60 w-60 object-cover mt-20 mr-5 rounded-full" />
        </div>
        <div className="right-div md:w-[30%]  mr-[5%]">
          <h1 className=" text-white  mt-24 mb-3 text-4xl ">My Professional Skills</h1>
          <div className="pt-2 space-y-2 ml-28 md:ml-0">
            <div className="flex items-center gap-2 ">
              <FaHtml5 size={24} style={{ color: "#E34F26" }} />
              <h1 className='text-gray-400'>HTML</h1>
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCss3 size={24} style={{ color: "#1572B6" }} />
              <h1 className='text-gray-400'>CSS</h1>
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss size={24} style={{ color: "#38B2AC" }} />
              <h1 className='text-gray-400'>Tailwind CSS</h1>
              <span className="text-yellow-400">★★★☆☆</span>
            </div>
            <div className="flex items-center gap-2">
              <SiJavascript size={24} style={{ color: "#F7DF1E" }} />
              <h1 className='text-gray-400'>JavaScript</h1>
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <div className="flex items-center gap-2">
              <FaReact size={24} style={{ color: "#61DAFB" }} />
              <h1 className='text-gray-400'>React</h1>
              <span className="text-yellow-400">★★★☆☆</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPython size={24} style={{ color: "#3776AB" }} />
              <h1 className='text-gray-400'>Python</h1>
              <span className="text-yellow-400">★★★☆☆</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub size={24} style={{ color: "#F05032" }} />
              <h1 className='text-gray-400'>Github</h1>
              <span className="text-yellow-400">★★★☆☆</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
