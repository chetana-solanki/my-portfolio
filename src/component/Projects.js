import React from 'react'
import { RiBroadcastLine  } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.div
      initial={{ rotate: -10, opacity: 0 }}
  animate={{ rotate: 0, opacity: 1 }}
  transition={{ duration: 1 }}
      >
            <div className="dark:bg-gray-900 rounded-2xl p-4 transition-transform shadow-lg shadow-blue-500/30">
                <h2 className="text-xl font-bold text-white">projects Name: Weather App</h2>
                <p className="text-gray-400 mt-2">
                    A simple and responsive weather application that fetches live weather data using an API.
                </p>
                <p className="text-sm text-yellow-400 mt-1">
                    Tech: React.js, HTML, CSS
                </p>
                <div className="flex items-center gap-2 pt-1">
                <RiBroadcastLine  className="animate-pulse" color='red'/>
                <a href="https://chetana-solanki.github.io/weather-app/">https://chetana-solanki.github.io/weather-app/</a>
                </div>
            </div>
            <div className="dark:bg-gray-900 rounded-2xl p-4 mt-4 transition-transform shadow-lg shadow-blue-500/30">
                <h2 className="text-xl font-bold text-white">projects Name: School Management Website</h2>
                <p className="text-gray-400 mt-2">
                    A fully functional school management system built using Python and Django,
                    featuring student, teacher, and staff data management with authentication and database integration.
                </p>
                <p className="text-sm text-yellow-400 mt-1">
                    Tech: Python, Django, HTML, CSS
                </p>
                <div className="flex items-center gap-2 pt-1">
                <RiBroadcastLine  className="animate-pulse" color='red'/>
                <a href="https://chetana.pythonanywhere.com/">https://chetana.pythonanywhere.com/</a>
                </div>
            </div>
            <div className="dark:bg-gray-900 rounded-2xl p-4 mt-4 transition-transform shadow-lg shadow-blue-500/30">
                <h2 className="text-xl font-bold text-white">projects Name: My Portfolio</h2>
                <p className="text-gray-400 mt-2">
                    A responsive portfolio website built using React and Tailwind CSS, showcasing modern design and smooth user experience. It includes interactive sections for projects, skills, and contact information, demonstrating strong front-end development skills and a focus on clean, efficient, and visually appealing web interfaces.</p>
                <p className="text-sm text-yellow-400 mt-1">
                    Tech: React, HTML, TailwindCss, JavaScript
                </p>
            </div>
        </motion.div>

    )
}
