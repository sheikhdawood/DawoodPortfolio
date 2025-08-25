import { motion } from 'framer-motion'


export function About(){
return (
<section id="about" className="section">
<h2 className="section-title">About</h2>
<div className="grid md:grid-cols-3 gap-6">
<motion.div className="card md:col-span-2" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
<p className="text-white/85 leading-relaxed">
I’m a hands‑on engineer who loves taking ideas from 0→1 and 1→N. I design data pipelines, train models, and ship delightful products.
I care about reliability, simplicity, and measurable impact.
</p>
</motion.div>
<motion.ul className="card space-y-3" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
<li className="flex items-center gap-3"><span className="badge">Strength</span> System thinking</li>
<li className="flex items-center gap-3"><span className="badge">Focus</span> LLMs, RAG, MLOps</li>
<li className="flex items-center gap-3"><span className="badge">Hobby</span> Teaching, open source</li>
</motion.ul>
</div>
</section>
)
}