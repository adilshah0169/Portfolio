import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { personal, stats } from '../data/portfolioData.js'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="hero-grid" />
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-14 sm:px-7 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.09 }} className="max-w-3xl">
          <motion.p variants={fadeUp} className="eyebrow">
            .NET Developer - Web API - SQL - Vue.js
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-black leading-[1.02] tracking-normal text-ink dark:text-white sm:text-6xl lg:text-7xl">
            {personal.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-primary dark:text-sky-300">
            {personal.title}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-650 dark:text-slate-300 sm:text-lg">
            {personal.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a className="primary-button" href={personal.resumeFile} download>
              <FiDownload />
              Resume
            </a>
            <a className="secondary-button" href={personal.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
              LinkedIn
            </a>
            <a className="secondary-button" href="#experience">
              <FiArrowDown />
              Experience
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300 sm:flex sm:flex-wrap">
            <a className="contact-chip" href={`mailto:${personal.email}`}>
              <FiMail />
              {personal.email}
            </a>
            <a className="contact-chip" href={`tel:${personal.phoneRaw}`}>
              <FiPhone />
              {personal.phone}
            </a>
            <span className="contact-chip">
              <FiMapPin />
              {personal.location}
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="metric-tile">
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="profile-frame">
            <img src={personal.profileImage} alt={`${personal.name} profile`} className="profile-image" />
          </div>
          <div className="profile-caption">
            <span>FinTech Systems</span>
            <strong>QR Transfers - Disputes - Invoices</strong>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
