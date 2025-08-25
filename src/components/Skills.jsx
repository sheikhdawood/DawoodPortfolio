import { motion } from 'framer-motion'
import { skills as data } from '../data/content'


export function Skills(){
return (
<section id="skills" className="section">
<h2 className="section-title">Skills</h2>
<div className="grid md:grid-cols-3 gap-6">
{data.map((group, idx) => (
<motion.div key={group.group} className="card" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}}>
<h3 className="text-lg font-semibold mb-3">{group.group}</h3>
<div className="flex flex-wrap gap-2">
{group.items.map(item => (
<span key={item} className="badge">{item}</span>
))}
</div>
</motion.div>
))}
</div>
</section>
)
}