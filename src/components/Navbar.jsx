import { useEffect, useState } from 'react'
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { personal, navLinks } from '../data/portfolioData.js'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { darkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur dark:border-white/10 dark:bg-ink/88'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-7 lg:px-10">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <img
            src={personal.profileImage}
            alt={`${personal.name} profile`}
            className="size-10 rounded-lg object-cover object-top shadow-soft ring-2 ring-primary/20"
          />
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-wide text-ink dark:text-white">
              {personal.name}
            </span>
            <span className="block text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
              {personal.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={personal.resumeFile} className="icon-action hidden sm:grid" download aria-label="Download resume">
            <FiDownload />
          </a>
          <button className="icon-action" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button className="icon-action lg:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg dark:border-white/10 dark:bg-ink lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="mobile-nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href={personal.resumeFile} className="primary-button mt-2 justify-center" download onClick={closeMenu}>
              <FiDownload />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
