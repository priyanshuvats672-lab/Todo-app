import React, { useState } from 'react'
import useUser from '../context/userContext';
import { LayoutDashboard, CheckSquare, Calendar, LogOut, LogIn, X, Menu, Settings, UserCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: CheckSquare, label: 'Tasks', href: '/' },
  { icon: Calendar, label: 'Calendar', href: '/about' },
  { icon: UserCircle, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const { user, logout } = useUser();
  const { pathname } = useLocation();


  return (
    <>
      {/* Mobile hamburger — shown only on small screens */}
      <button
        onClick={() => setOpen(true)}
        className='md:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-[var(--surface2)] border border-[var(--border)] text-white'
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className='sidebar-overlay open'
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 flex flex-col
          w-[260px] bg-[var(--surface)] border-r border-[var(--border)]
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:fixed md:flex
        `}
      >
        {/* Logo */}
        <div className='flex items-center justify-between px-6 py-6 border-b border-[var(--border)]'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center'>
              <CheckSquare size={16} className='text-white' />
            </div>
            <span className='text-white font-bold text-lg tracking-tight'>TaskBar</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className='md:hidden text-gray-400 hover:text-white transition-colors'
          >
            <X size={18} />
          </button>
        </div>
        {/* User profile card */}
        <div className='mx-3 mt-4 mb-1 px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)] flex items-center gap-3'>
          <div className='w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg'>
            {user ? user[0].toUpperCase() : '?'}
          </div>
          <div className='min-w-0'>
            <p className='text-white font-semibold text-sm truncate'>{user}</p>
            <div className='flex items-center gap-1.5 mt-0.5'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block'></span>
              <span className='text-gray-500 text-xs'>Online</span>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav className='flex-1 px-3 py-5 space-y-1'>
          {navLinks.map(({ icon: Icon, label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                to={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative
                  ${isActive
                    ? 'bg-[var(--accent)]/15 text-white border border-[var(--accent)]/25'
                    : 'text-gray-400 hover:text-white hover:bg-[var(--surface2)] border border-transparent'
                  }
                `}
              >
                {/* Active left indicator bar */}
                {isActive && (
                  <span className='absolute left-0 top-1/4 h-1/2 w-[3px] rounded-full bg-[var(--accent)]' />
                )}
                <Icon
                  size={18}
                  className={isActive ? 'text-[var(--accent-light)]' : 'group-hover:text-[var(--accent-light)] transition-colors'}
                />
                <span className='font-medium text-sm'>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className='px-3 pb-6'>
          <button
            onClick={logout}
            className='w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group'>
            {(user) ? (
              <><LogOut size={18} />
              <span className='font-medium text-sm'>Log Out</span></>) : 
              <><LogIn size={18} />
              <span className='font-medium text-sm'>Log In</span></>}
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
