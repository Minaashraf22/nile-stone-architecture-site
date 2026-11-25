import React from 'react'
const IDS = ['projects', 'studio', 'services', 'contact']
export default function Nav({ t, lang, onToggleLang }) {
  return (
    <header className="nav">
      <strong className="brand"><img src="logo.svg" alt="" width="26" height="26" /> {t.brand}</strong>
      <nav>{t.nav.map((n, i) => <a key={n} href={'#' + IDS[i]}>{n}</a>)}
        <button onClick={onToggleLang}>{t.lang}</button></nav>
    </header>
  )
}
