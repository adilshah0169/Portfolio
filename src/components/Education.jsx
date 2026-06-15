import { FiAward } from 'react-icons/fi'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section-block bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation in computer science.</h2>
          <p>Formal study aligned with practical software engineering, web systems, and database-backed application development.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="education-card">
              <span className="education-icon">
                <FiAward />
              </span>
              <div>
                <p className="period-label">{item.period}</p>
                <h3>{item.degree}</h3>
                <p className="mt-2 font-semibold text-primary dark:text-sky-300">{item.school}</p>
                <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
