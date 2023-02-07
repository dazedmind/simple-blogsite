import React from 'react'
import { IconContext } from 'react-icons';
import { FaBars, FaTimes, FaGithub} from "react-icons/fa";

function NavBar() {
    return (
    <>
        <div className='flex justify-between items-center bg-neutral-900 p-6 '>
            <h1 className='text-cyan-600 text-3xl font-bold'>daily.doze </h1>
            
            <ul className='hidden sm:flex row-auto gap-4 text-lg'>
                <li>
                    <a href="/" className='text-white'>Home</a>
                </li>
                <li>
                    <a href="/" className='text-white'>Documentation</a>
                </li>
                <li>
                    <a href="https://github.com/dazedmind" target="_blank" className='text-white'>
                        <IconContext.Provider value={{size: "1.5em"}}>
                        <FaGithub />
                        </IconContext.Provider>
                    </a>
                </li>
            </ul>
        </div>
    </>
    );
}

export default NavBar;