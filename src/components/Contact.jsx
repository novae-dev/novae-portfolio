import {ArrowUpRight, Mail, GitBranch, MessageCircle} from 'lucide-react';
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

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349135196246"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
              <ArrowUpRight size={15} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/novae-dev"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} />
              GitHub
              <ArrowUpRight size={15} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdulmateen-mosobalaje-334088391"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{fontSize: '13px', fontWeight: '700'}}>in</span>
              LinkedIn
              <ArrowUpRight size={15} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/nova_x559c"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{fontSize: '16px'}}>◎</span>
              Instagram
              <ArrowUpRight size={15} />
            </a>

            {/* Email */}
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
