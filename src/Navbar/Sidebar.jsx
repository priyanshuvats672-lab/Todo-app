import React, { useState } from 'react'
import { LayoutDashboard, CheckSquare, Calendar, LogOut, X, Menu } from 'lucide-react'

const navLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: CheckSquare,     label: 'Tasks',     href: '#' },
  { icon: Calendar,        label: 'Calendar',  href: '#' },
]

const Sidebar = () => {
  const [open, setOpen] = useState(false)

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
          md:translate-x-0 md:static md:flex
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

        {/* Nav links */}
        <nav className='flex-1 px-3 py-5 space-y-1'>
          {navLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className='flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-[var(--surface2)] transition-all duration-200 group'
            >
              <Icon size={18} className='group-hover:text-[var(--accent-light)] transition-colors' />
              <span className='font-medium text-sm'>{label}</span>
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className='px-3 pb-6'>
          <button className='w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group'>
            <LogOut size={18} />
            <span className='font-medium text-sm'>Log Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
