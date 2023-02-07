import React from 'react'
import { IconContext } from 'react-icons';
import { BiTimeFive, BiBookOpen } from "react-icons/bi"
import { MdDateRange } from "react-icons/md"

function HeaderContent() {
    return(
        <div className='h-auto my-20 mx-10 sm:mx-20 lg:mx-40 xl:mx-80'>
            <h1 className='text-4xl sm:text-4xl xl:text-5xl text-start text-white font-bold'>Web Applications: The Process Behind Them</h1>
            <div className='flex justify-between'>
                <div className='flex-row m-2'>
                    <div className='flex items-center gap-1'>
                        <IconContext.Provider value={{color: "#525252"}}>
                            <BiBookOpen />
                        </IconContext.Provider>
                        <p className='text-neutral-600 text-lg'>Author: dzdmnd</p>
                    </div>

                    
                    <div className='flex items-center gap-1'>
                        <IconContext.Provider value={{color: "#525252"}}>
                            <BiTimeFive />
                        </IconContext.Provider>
                        <p className='text-neutral-600 text-lg'> 5 min read</p>
                    </div>
                </div>

                <div className='flex items-center'>
                        <IconContext.Provider value={{color: "#525252"}}>
                            <MdDateRange />
                        </IconContext.Provider>
                        <p className='text-neutral-600 text-lg m-2'>February 7, 2023</p>
                    </div>
            </div>
        </div>
    );
}

export default HeaderContent;