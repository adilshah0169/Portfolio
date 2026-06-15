import { FiDownload, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { personal } from '../data/portfolioData.js'

export default function Contact() {
  return (
    <section id="contact" className="section-block">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="contact-panel">
          <div className="max-w-2xl">
            <p className="eyebrow">Contact</p>
            <h2>Available for software engineering and FinTech product work.</h2>
            <p>
              Reach out for .NET backend, Web API, SQL, Vue.js frontend, enterprise modules, and production application delivery.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[430px]">
            <a className="contact-action" href={`mailto:${personal.email}`}>
              <FiMail />
              <span>{personal.email}</span>
            </a>
            <a className="contact-action" href={`tel:${personal.phoneRaw}`}>
              <FiPhone />
              <span>{personal.phone}</span>
            </a>
            <a className="contact-action" href={personal.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
              <span>LinkedIn Profile</span>
            </a>
            <a className="contact-action" href={personal.resumeFile} download>
              <FiDownload />
              <span>Download Resume</span>
            </a>
            <span className="contact-action sm:col-span-2">
              <FiMapPin />
              <span>{personal.location}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
