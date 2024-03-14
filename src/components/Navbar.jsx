import React from 'react'
import Logo from './Logo'
import { MdHome, MdOutlineMoreTime } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuDatabase, LuHistory } from "react-icons/lu";

function Navbar() {
  return (
    <div className=' text-white text-xl flex justify-between items-center border-b border-b-[#5e4700]'>
        <Logo/>
        <ul className='link-container flex gap-10'>
            <li className='px-3 flex items-center hover:bg-warning hover:text-black hover:cursor-pointer'><MdHome/> <span className='px-2'>Home</span></li>
            <li className='px-3 flex items-center hover:bg-warning hover:text-black hover:cursor-pointer'><BsGraphUpArrow/> <span className='px-2'>Graphs</span></li>
            <li className='px-3 flex items-center hover:bg-warning hover:text-black hover:cursor-pointer'><LuHistory/> <span className='px-2'>History</span></li>
            <li className='px-3 flex items-center hover:bg-warning hover:text-black hover:cursor-pointer'><LuDatabase/> <span className='px-2'>Data</span></li>
            <li className='px-3 flex items-center hover:bg-warning hover:text-black hover:cursor-pointer'><MdOutlineMoreTime/> <span className='px-2'>Subscribe</span></li>
        </ul>
        <div className='end-section'></div>
    </div>
  )
}

export default Navbar