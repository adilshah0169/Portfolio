import { motion } from 'framer-motion'
import { FiExternalLink, FiMapPin } from 'react-icons/fi'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Production work across FinTech, enterprise platforms, and custom software.</h2>
          <p>Each role is arranged from current to earlier experience with the most relevant engineering work surfaced first.</p>
        </div>

        <div className="mt-12 space-y-6">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.04 }}
              className="timeline-card"
            >
              <div className="timeline-dot" />
              <div className="grid gap-5 lg:grid-cols-[0.36fr_0.64fr]">
                <div>
                  <p className="period-label">{job.period}</p>
                  <h3>{job.role}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-sm font-bold text-primary dark:text-sky-300">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                        {job.company}
                        <FiExternalLink />
                      </a>
                    ) : (
                      job.company
                    )}
                    {job.secondUrl && (
                      <a href={job.secondUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                        Zolvat
                        <FiExternalLink />
                      </a>
                    )}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <FiMapPin />
                    {job.location}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="bullet-line">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
