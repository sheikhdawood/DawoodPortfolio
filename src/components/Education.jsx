import { motion } from 'framer-motion'
import { education as data } from '../data/content'


export function Education(){
return (
<section id="education" className="section">
<h2 className="section-title">Education</h2>
<div className="grid gap-6">
{data.map((ed, idx) => (
<motion.div key={ed.institute+idx} className="card" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
<div>
<h3 className="text-xl font-semibold">{ed.degree}</h3>
<p className="text-white/70">{ed.institute}</p>
</div>
<span className="badge">{ed.period}</span>
</div>
{ed.details && <p className="mt-3 text-white/80">{ed.details}</p>}
</motion.div>
))}
</div>
</section>
)
}