import { motion } from 'framer-motion'
import { profile } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="section pt-36 md:pt-44">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge">{profile.location}</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              {profile.name} <span className="text-brand-500">— {profile.title}</span>
            </h1>
            <p className="mt-4 text-white/80 leading-relaxed max-w-xl">{profile.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {profile.heroCTAs.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="link-btn hover:bg-white/5"
                  {...(c.download ? { download: true } : {})}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-600/30 to-brand-500/10 ring-1 ring-white/10" />
          <div className="absolute inset-6 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
        </motion.div>
      </div>
    </section>
  )
}
