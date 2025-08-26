import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Globe, Twitter } from 'lucide-react'
import { profile } from '../data/content'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition ${
        scrolled ? 'backdrop-blur bg-bg/70 ring-1 ring-white/10' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <a href="#top" className="font-bold tracking-tight">
          {profile.name}
          <span className="text-brand-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-white/80 hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <div className="h-5 w-px bg-white/10" />
          <a
            aria-label="GitHub"
            href={profile.socials.github}
            className="text-white/70 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.socials.linkedin}
            className="text-white/70 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            aria-label="Twitter"
            href={profile.socials.twitter}
            className="text-white/70 hover:text-white"
          >
            <Twitter size={20} />
          </a>
          <a
            aria-label="Website"
            href={profile.socials.website}
            className="text-white/70 hover:text-white"
          >
            <Globe size={18} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden link-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />} Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg/95">
          <div className="max-w-6xl mx-auto px-5 py-4 grid gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-white/90"
              >
                {n.label}
              </a>
            ))}

            {/* Social Icons in Mobile */}
            <div className="flex gap-4 pt-4 border-t border-white/10">
              <a
                aria-label="GitHub"
                href={profile.socials.github}
                className="text-white/70 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                aria-label="LinkedIn"
                href={profile.socials.linkedin}
                className="text-white/70 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                aria-label="Twitter"
                href={profile.socials.twitter}
                className="text-white/70 hover:text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                aria-label="Website"
                href={profile.socials.website}
                className="text-white/70 hover:text-white"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
