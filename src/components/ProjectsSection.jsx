import React, { useState } from 'react'
import { projects } from '../data.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
export default function ProjectsSection({ t, lang }) {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const list = projects.filter(p => filter === 'all' || p.cat === filter)
  return (
    <>
      <section id="projects" className="wrap">
        <h2>{t.projectsTitle}</h2>
        <div className="filters">{Object.entries(t.filters).map(([k, v]) =>
          <button key={k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>{v}</button>)}</div>
        <div className="grid">{list.map(p => <ProjectCard key={p.id} p={p} lang={lang} onOpen={setOpen} />)}</div>
      </section>
      {open && <ProjectModal p={open} lang={lang} closeLabel={t.close} onClose={() => setOpen(null)} />}
    </>
  )
}
