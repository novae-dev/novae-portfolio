import { ArrowUpRight, ArrowUp } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">N</span>
              <span className="brand-name">NOVAE</span>
            </a>

            <p>
              Web developer & brand designer
              <br />
              building digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NOVAE</span>

          <span>Designed & built by Abdul Mateen</span>

          <a href="#contact">
            Start a project
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer