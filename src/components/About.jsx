import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { capabilities, competencies, summary } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="section-block bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2>Software engineer focused on practical product delivery.</h2>
          <p>{summary}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
              className="surface-card"
            >
              <span className="card-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {competencies.map((item) => (
            <div key={item} className="competency-chip">
              <FiCheckCircle />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
