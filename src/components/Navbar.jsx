import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Internships", href: "#internships" },
    { name: "Certifications", href: "#certifications" },
  ]

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold text-white"
        >
          Bhavya.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-violet-300"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-violet-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-200"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="py-1 text-sm text-gray-300 transition hover:text-violet-300"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-violet-300 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-violet-200"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar