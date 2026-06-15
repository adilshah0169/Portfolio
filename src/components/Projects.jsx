import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/portfolioData.js'

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Representative platforms and modules.</h2>
          <p>Focused on the work already present in the resume, shaped for a portfolio reader.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
              className="project-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="period-label">0{index + 1}</p>
                  <h3>{project.title}</h3>
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="project-link" aria-label={`${project.title} website`}>
                    <FiArrowUpRight />
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm font-bold text-primary dark:text-sky-300">{project.subtitle}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.detail}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
