"use client"
import { useState, useEffect } from "react";

export default function ThemeToggleButton() {
    const [light, setLight] = useState(null);

    useEffect(() => {
        let htmlTag = document.querySelector("html");
        if (!light) {
            htmlTag.className = "dark"
        } else {
            htmlTag.className = ""
        }
    }, [light])
    return (
        <button onClick={() => { setLight(p => !p) }} className={`absolute flex items-center justify-center top-4 right-4 h-12 w-12 rounded-full bg-blue-500 transition-all duration-200 ease-out ${light ? 'hover:bg-zinc-800' : 'hover:bg-gray-300'}`}>
            {
                light ? (<i className="ri-moon-fill text-xl text-gray-200"></i>) : (<i className="ri-sun-fill text-xl text-zinc-800"></i>)
            }
        </button>
    )
}
