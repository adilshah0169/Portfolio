import { personal } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400">
      <p>{personal.name} - Software Engineer</p>
    </footer>
  )
}
