import { motion } from 'framer-motion'
import { certificates as data } from '../data/content'


export function Certificates(){
return (
<section id="certificates" className="section">
<h2 className="section-title">Certificates</h2>
<div className="grid md:grid-cols-2 gap-6">
{data.map((c, idx) => (
<motion.div key={c.title+idx} className="card" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold">{c.title}</h3>
<p className="text-white/70">{c.issuer}</p>
</div>
<span className="badge">{c.year}</span>
</div>
</motion.div>
))}
</div>
</section>
)
}