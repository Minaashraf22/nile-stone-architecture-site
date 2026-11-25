import React from 'react'
export default function ProjectModal({ p, lang, closeLabel, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>
        <img src={p.img} alt="" /><h3>{p[lang][0]}</h3><p>{p[lang][2]}</p>
        <button className="btn" onClick={onClose}>{closeLabel}</button>
      </div>
    </div>
  )
}
