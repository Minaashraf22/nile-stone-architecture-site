import React from 'react'
export default function ProjectCard({ p, lang, onOpen }) {
  return (
    <article className="card" onClick={() => onOpen(p)}>
      <img src={p.img} alt={p[lang][0]} loading="lazy" />
      <div><h3>{p[lang][0]}</h3><span>{p[lang][1]} · {p.year}</span></div>
    </article>
  )
}
