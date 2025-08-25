import { motion } from 'framer-motion'
import { experience as data } from '../data/content'


export function Experience(){
return (
<section id="experience" className="section">
<h2 className="section-title">Experience</h2>
<div className="grid gap-6">
{data.map((e, idx) => (
<motion.div key={e.company+idx} className="card" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
<div>
<h3 className="text-xl font-semibold">{e.role}</h3>
<p className="text-white/70">{e.company}</p>
</div>
<span className="badge">{e.period}</span>
</div>
<ul className="mt-3 list-disc list-inside text-white/75 space-y-1">
{e.bullets.map(b => (<li key={b}>{b}</li>))}
</ul>
</motion.div>
))}
</div>
</section>
)
}