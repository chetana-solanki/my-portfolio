import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [darkMode, setdarkMode] = useState(true);
    function changeMode() {
        if (darkMode) { // if mode is true change it to false
            setdarkMode(false)
        } else{ // if mode is false set it to true
            setdarkMode(true)
        }
    }
    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
    return (
        <nav>
            <ul className="flex items-center justify-center md:justify-end py-4 px-2 md:pr-20 space-x-2 md:space-x-10">
                <li className="cursor-pointer"><Link to="/">Home</Link></li>
                <li className="cursor-pointer"><Link to="/about">About</Link></li>
                <li className="cursor-pointer"><Link to="/projects">Projects</Link></li>
                <button className="bg-yellow-700 text-white font-thin text-xs h-6 w-24 cursor-pointer hover:bg-slate-300 hover:text-gray-800 rounded-lg">
                    <Link to="/contact">Contact Me</Link>
                </button>
                <div className="flex items-center">
                    <input
                        onClick={changeMode}
                        type="checkbox"
                        className="w-10 h-5 rounded-full bg-gray-300 checked:bg-blue-600 appearance-none cursor-pointer"
                    />
                    <label className="ml-2 text-gray-700">Change Mode</label>
                </div>
            </ul>
        </nav>
    )
}
