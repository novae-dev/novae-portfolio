import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import skills from '../data/skills'

function Skills() {
  return (
    <section className="section skills">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-number">04 — SKILLS</div>

            <h2 className="section-title">
              What I
              <br />
              work with.
            </h2>
          </div>

          <p className="section-description">
            A broad technical and creative toolkit that lets me move from
            concept to design to working product.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((category) => (
            <motion.article
              className="skill-row"
              key={category.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="skill-number">{category.number}</span>

              <div className="skill-main">
                <h3>{category.title}</h3>
                <p>{category.description}</p>

                <div className="tag-list">
                  {category.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowUpRight className="skill-arrow" size={20} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills