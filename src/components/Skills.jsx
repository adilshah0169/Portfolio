import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section-block bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="section-heading">
          <p className="eyebrow">Technical Skills</p>
          <h2>Tools and technologies used for day-to-day delivery.</h2>
          <p>Grouped to keep the portfolio easy to scan for recruiters, technical leads, and product teams.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.04 }}
              className="surface-card"
            >
              <h3>{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">
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
