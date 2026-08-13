import { ArrowUpRight, Code2, Palette } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Modern websites and web applications built with clean code, responsive interfaces, APIs, databases, and scalable foundations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'REST APIs'],
    icon: Code2,
  },
  {
    number: '02',
    title: 'Brand & Graphic Design',
    description:
      'Visual identities and marketing assets that help businesses look professional, recognizable, and consistent.',
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
]

function Services() {
  return (
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
            My primary focus is creating functional digital experiences and
            strong visual identities for individuals, businesses, and
            products.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.article
                className="service-card"
                key={service.number}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
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
                    {service.tags.map((tag) => (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services