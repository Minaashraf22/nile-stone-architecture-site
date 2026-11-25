import { useEffect, useState } from 'react'
import { content, projects } from './data.js'

export default function App() {
  const [lang, setLang] = useState('en')
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const [sent, setSent] = useState(false)
  const t = content[lang]
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])
  const list = projects.filter(p => filter === 'all' || p.cat === filter)
  const ids = ['projects', 'studio', 'services', 'contact']
  return (
    <>
      <header className="nav">
        <strong className="brand"><img src="logo.svg" alt="" width="26" height="26" /> {t.brand}</strong>
        <nav>{t.nav.map((n, i) => <a key={n} href={'#' + ids[i]}>{n}</a>)}
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>{t.lang}</button></nav>
      </header>
      <section className="hero" style={{ backgroundImage: 'url(img/arch-hero.jpg)' }}>
        <div><h1>{t.heroTitle}</h1><p>{t.heroText}</p><a className="btn" href="#projects">{t.cta}</a></div>
      </section>
      <section id="projects" className="wrap">
        <h2>{t.projectsTitle}</h2>
        <div className="filters">{Object.entries(t.filters).map(([k, v]) =>
          <button key={k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>{v}</button>)}</div>
        <div className="grid">{list.map(p => (
          <article key={p.id} className="card" onClick={() => setOpen(p)}>
            <img src={p.img} alt={p[lang][0]} loading="lazy" />
            <div><h3>{p[lang][0]}</h3><span>{p[lang][1]} · {p.year}</span></div>
          </article>))}</div>
      </section>
      <section id="studio" className="wrap split"><h2>{t.studioTitle}</h2><p>{t.studioText}</p></section>
      <section id="services" className="wrap"><h2>{t.servicesTitle}</h2>
        <ul className="services">{t.services.map(s => <li key={s}>{s}</li>)}</ul></section>
      <section id="contact" className="wrap">
        <h2>{t.contactTitle}</h2>
        <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
          <input required placeholder={t.name} /><input required type="email" placeholder={t.email} />
          <textarea required rows="4" placeholder={t.message} /><button className="btn">{t.send}</button>
          {sent && <p role="status">{t.thanks}</p>}
        </form>
      </section>
      <footer>{t.footer}</footer>
      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div onClick={e => e.stopPropagation()}>
            <img src={open.img} alt="" /><h3>{open[lang][0]}</h3><p>{open[lang][2]}</p>
            <button className="btn" onClick={() => setOpen(null)}>{t.close}</button>
          </div>
        </div>)}
    </>
  )
}
