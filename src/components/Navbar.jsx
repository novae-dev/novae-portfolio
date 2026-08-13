import { ArrowUpRight } from 'lucide-react'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" aria-label="Novae home">
          <span className="brand-mark">N</span>
          <span className="brand-name">NOVAE</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's talk
          <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  )
}

export default Navbar