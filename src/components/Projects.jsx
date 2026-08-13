import { ArrowUpRight, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'
import projects from '../data/projects'

function Projects() {
  return (
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
            A selection of projects across web development, software,
            marketplaces, and product design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                index === 0 ? 'project-card-featured' : ''
              }`}
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="project-visual">
                <div className="project-visual-grid" />

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

                <div className="project-visual-title">
                  {project.title}
                </div>
              </div>

              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className="project-actions">
                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.link} aria-label={`View ${project.title}`}>
                      View project
                      <ArrowUpRight size={16} />
                    </a>

                    <a href="#" aria-label={`${project.title} GitHub repository`}>
                      <GitBranch size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects