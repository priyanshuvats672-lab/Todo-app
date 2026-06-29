import React from 'react'
import {Search , Menu , User} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-3 py-4 bg-blue-950'>
        <div className='flex items-center text-xl text-white'>
            <Menu />
            <span className='text-xl font-semibold'>TODO-APP</span>
        </div>
        <div className='flex items-center gap-x-5'>
            <div className='relative md:w-65'>
                <span className='relative md:absolute pl-2 inset-y-0 left-0 flex items-center'>
                    <button className='p-1 focus:outline-none text-white md:text-black'><Search/>
                    </button>
                    </span>
                <input type="text" className='bg-white w-full px-4 py-1 pl-12 rounded shadow outline-none md:block hidden'/>
            </div>
        </div>
        <div className='text-white flex gap-3'>
            <User className='bg-black rounded-full' />
            <h3>User</h3>
        </div>
    </nav>
  )
}

export default Navbar
