import { motion } from 'framer-motion'
import { projects as data } from '../data/content'


export function Projects(){
return (
<section id="projects" className="section">
<h2 className="section-title">Projects</h2>
<div className="grid md:grid-cols-2 gap-6">
{data.map((p, idx) => (
<motion.article key={p.title} className="card" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:idx*0.05}}>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl font-semibold">{p.title}</h3>
<p className="mt-2 text-white/80">{p.description}</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
{p.stack.map(s => (<span key={s} className="badge">{s}</span>))}
</div>
{p.highlights?.length ? (
<ul className="mt-4 list-disc list-inside text-white/75 space-y-1">
{p.highlights.map(h => (<li key={h}>{h}</li>))}
</ul>
) : null}
<div className="mt-5 flex gap-3">
{p.links?.map(l => (
<a key={l.href} href={l.href} className="link-btn hover:bg-white/5">{l.label}</a>
))}
</div>
</motion.article>
))}
</div>
</section>
)
}