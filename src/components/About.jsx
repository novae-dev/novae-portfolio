import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-number">03 — ABOUT ME</div>

            <h2 className="section-title">
              Developer.
              <br />
              Designer.
              <br />
              Builder.
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm Abdul Mateen, a web developer and brand designer who enjoys
              turning ideas into useful digital products and strong visual
              identities.
            </p>

            <p>
              I work across web development, UI/UX, branding, and
              AI-assisted development. I also experiment with embedded
              systems, robotics, and hardware projects.
            </p>

            <p>
              My main focus is helping individuals, startups, and businesses
              build a strong digital presence — from the first idea and visual
              identity to a functional website or product.
            </p>

            <a href="#contact" className="text-link">
              Let's build something
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <motion.div
          className="about-statement"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>MY APPROACH</span>

          <p>
            <strong>Think clearly.</strong> Design intentionally. Build
            things that actually work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About