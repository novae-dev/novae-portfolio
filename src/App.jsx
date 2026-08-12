import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Palette,
  Sparkles,
} from 'lucide-react';
import {motion} from 'framer-motion';
import './App.css';

const services = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Modern websites and web applications built with clean code, responsive interfaces, APIs, databases, and scalable foundations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'REST APIs'],
    icon: Code2,
  },
  {
    number: '02',
    title: 'Brand & Graphic Design',
    description: 'Visual identities and marketing assets that help businesses look professional, recognizable, and consistent.',
    tags: [
      'Logo Design',
      'Brand Identity',
      'Banners',
      'Social Graphics',
      'Photoshop',
      'Canva',
    ],
    icon: Palette,
  },
];

function App () {
  return (
    <div className="app">
      {/* ─────────────────────────────────────────
          NAVBAR
      ───────────────────────────────────────── */}

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

      <main id="top">
        {/* ─────────────────────────────────────────
            HERO
        ───────────────────────────────────────── */}

        <section className="hero grid-background">
          <div className="container hero-inner">
            <motion.div
              className="hero-content"
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, ease: 'easeOut'}}
            >
              <div className="hero-label">
                <span className="status-dot" />
                Available for freelance work
              </div>

              <h1>
                I build
                <span className="accent-text"> digital experiences</span>
                <br />
                that make ideas real.
              </h1>

              <p className="hero-description">
                I'm Abdul Mateen — a web developer and brand designer focused
                on building websites, digital products, and visual identities.
              </p>

              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  View my work
                  <ArrowDownRight size={17} />
                </a>

                <a href="#contact" className="btn btn-secondary">
                  Let's work together
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.5, duration: 0.7}}
            >
              <div>
                <span>BASED IN</span>
                <strong>Nigeria</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>Web + Brand</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Open to work</strong>
              </div>
            </motion.div>
          </div>

          <div className="hero-glow glow" />
        </section>

        {/* ─────────────────────────────────────────
            SERVICES
        ───────────────────────────────────────── */}

        <section id="services" className="section services">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-number">01 — WHAT I DO</div>
                <h2 className="section-title">
                  Two things I
                  <br />
                  do best.
                </h2>
              </div>

              <p className="section-description">
                My primary focus is creating functional digital experiences
                and strong visual identities for individuals, businesses, and
                products.
              </p>
            </div>

            <div className="services-grid">
              {services.map (service => {
                const Icon = service.icon;

                return (
                  <motion.article
                    className="service-card"
                    key={service.number}
                    whileHover={{y: -6}}
                    transition={{duration: 0.2}}
                  >
                    <div className="service-top">
                      <span className="service-number">{service.number}</span>

                      <div className="service-icon">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="service-content">
                      <h3>{service.title}</h3>

                      <p>{service.description}</p>

                      <div className="tag-list">
                        {service.tags.map (tag => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href="#contact" className="service-link">
                      Start a project
                      <ArrowUpRight size={16} />
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            WORK PLACEHOLDER
        ───────────────────────────────────────── */}

        <section id="work" className="section work">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-number">02 — SELECTED WORK</div>
                <h2 className="section-title">
                  Things I've
                  <br />
                  built.
                </h2>
              </div>

              <p className="section-description">
                A selection of projects across software, web development,
                product design, and creative work.
              </p>
            </div>

            <div className="work-empty">
              <Sparkles size={24} />

              <h3>Projects coming next.</h3>

              <p>
                We're going to build the project showcase here with your real
                work, screenshots, technologies, and case studies.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            ABOUT PLACEHOLDER
        ───────────────────────────────────────── */}

        <section id="about" className="section about">
          <div className="container">
            <div className="section-number">03 — ABOUT</div>

            <h2 className="about-title">
              Developer.
              <br />
              Designer.
              <br />
              <span className="accent-text">Builder.</span>
            </h2>

            <div className="about-text">
              <p>
                I enjoy turning ideas into real products — whether that's a
                website, a brand identity, a web application, or an experiment
                with hardware.
              </p>

              <p>
                My main professional focus is web development and brand
                design, while I continue exploring software engineering, AI,
                embedded systems, and product development.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────
            CONTACT PLACEHOLDER
        ───────────────────────────────────────── */}

        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact-box">
              <div>
                <div className="section-number">04 — CONTACT</div>

                <h2>
                  Have an idea?
                  <br />
                  <span className="accent-text">Let's build it.</span>
                </h2>
              </div>

              <a href="mailto:your@email.com" className="btn btn-primary">
                Get in touch
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────── */}

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date ().getFullYear ()} Novae</span>

          <span>Built with curiosity.</span>

          <a href="#top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
