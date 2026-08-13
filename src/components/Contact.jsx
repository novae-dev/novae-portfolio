import { ArrowUpRight, Mail, GitBranch } from 'lucide-react'
import {motion} from 'framer-motion';

function Contact () {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-card">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            <div className="section-number">05 — GET IN TOUCH</div>

            <h2 className="contact-title">
              Have an idea?
              <br />
              Let's build it.
            </h2>

            <p className="contact-description">
              Whether you need a website, a brand identity, or help turning
              an idea into a working product, I'd love to hear about it.
            </p>

            <a
              href="mailto:novadev248@gmail.com"
              className="btn btn-primary contact-email"
            >
              <Mail size={17} />
              Send me an email
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="contact-links">
            <a
              href="https://github.com/novae-dev"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} />
              GitHub
              <ArrowUpRight size={15} />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              LinkedIn
              <ArrowUpRight size={15} />
            </a>

            <a href="mailto:novadev248@gmail.com">
              <Mail size={18} />
              Email
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
