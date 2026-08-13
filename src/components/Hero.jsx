import {ArrowDownRight, ArrowUpRight} from 'lucide-react';
import {motion} from 'framer-motion';

function Hero () {
  return (
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
            I'm Abdul Mateen — a web developer and brand designer focused on
            building websites, digital products, and visual identities.
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
  );
}

export default Hero;
