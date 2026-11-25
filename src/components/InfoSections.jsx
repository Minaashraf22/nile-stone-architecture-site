import React from 'react'
export function Studio({ t }) {
  return <section id="studio" className="wrap split"><h2>{t.studioTitle}</h2><p>{t.studioText}</p></section>
}
export function Services({ t }) {
  return <section id="services" className="wrap"><h2>{t.servicesTitle}</h2><ul className="services">{t.services.map(s => <li key={s}>{s}</li>)}</ul></section>
}
