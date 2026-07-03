import React, { useState } from 'react'
import { Search, Bell, User } from 'lucide-react'
import useUser from '../context/userContext';

const Navbar = ({value , onChange}) => {
  const { user } = useUser();
  return (
    <header className='sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[var(--surface)]/80 backdrop-blur-md border-b border-[var(--border)]'>

      {/* Title — shifts right on mobile to make room for hamburger */}
      <div className='pl-10 md:pl-0'>
        <h2 className='text-white font-bold text-lg tracking-tight'>My Tasks</h2>
        <p className='text-gray-500 text-xs mt-0.5'>Stay organised, stay productive</p>
      </div>

      {/* Search + actions */}
      <div className='flex items-center gap-3'>

        {/* Search — hidden on small, visible md+ */}
        <div className='relative hidden md:flex items-center'>
          <Search size={15} className='absolute left-3 text-gray-500 pointer-events-none' />
          <input
            type='text'
            value = {value}
            onChange={onChange}
            placeholder='Search tasks…'
            className='bg-[var(--surface2)] border border-[var(--border)] rounded-xl pl-9 pr-4 py-2 text-sm text-gray-300 placeholder:text-gray-600 outline-none focus:border-[var(--accent)] transition-colors w-52'
          />
        </div>

        {/* Bell */}
        <button className='p-2 rounded-xl bg-[var(--surface2)] border border-[var(--border)] text-gray-400 hover:text-white hover:border-[var(--accent)] transition-all duration-200'>
          <Bell size={16} />
        </button>

        {/* Avatar */}
        <div className='flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--surface2)] border border-[var(--border)] cursor-pointer hover:border-[var(--accent)] transition-all duration-200'>
          <div className='w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center'>
            <User size={13} className='text-white' />
          </div>
          <span className='text-sm font-medium text-gray-300 hidden sm:block'>{user}</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
