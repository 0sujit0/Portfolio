import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] h-[60px] px-4 md:px-8 bg-parchment/92 backdrop-blur-md border-b border-border-cream flex items-center justify-between">
        <a href="#hero" className="font-serif text-[17px] font-medium text-near-black tracking-tight flex-shrink-0" onClick={closeMenu}>
          Sujit Kumar Sahu
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] text-olive-gray hover:text-near-black hover:bg-warm-sand px-3 py-1.5 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="mailto:0sujit0@gmail.com"
            className="font-sans text-sm font-medium text-ivory bg-terracotta hover:opacity-90 px-4 py-2 rounded-lg transition-opacity whitespace-nowrap"
          >
            Email me
          </a>
          <button
            className="md:hidden p-1.5 -mr-1.5 text-charcoal-warm focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[60px] left-0 right-0 bottom-0 bg-parchment z-[99] px-6 py-6 md:hidden flex flex-col pt-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg text-charcoal-warm py-4 border-b border-border-cream last:border-none"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
