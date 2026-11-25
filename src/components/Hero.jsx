import React from 'react'
export default function Hero({ t }) {
  return (
    <section className="hero" style={{ backgroundImage: 'url(img/arch-hero.jpg)' }}>
      <div><h1>{t.heroTitle}</h1><p>{t.heroText}</p><a className="btn" href="#projects">{t.cta}</a></div>
    </section>
  )
}
