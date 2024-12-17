import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";


import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='w-full p-4 flex justify-between items-start  font-bold bg-gradient-to-r from-teal-300 to-slate-300 '> 
       <Link to='/'><span className=' text-2xl flex gap-2 items-center '><FaOpencart />
        CardCraft</span>
        </Link> 
        <div className='flex items-center gap-2 text-3xl'>
          <Link to='/create'  className='hover:bg-slate-200 rounded-lg '>
          <MdAddShoppingCart />
          </Link> 
          <button><CgDarkMode />
          </button>
        </div>
    </div>
  )
}

export default Navbar