import React, { useState } from 'react'
export default function ContactForm({ t }) {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="wrap">
      <h2>{t.contactTitle}</h2>
      <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <input required placeholder={t.name} /><input required type="email" placeholder={t.email} />
        <textarea required rows="4" placeholder={t.message} /><button className="btn">{t.send}</button>
        {sent && <p role="status">{t.thanks}</p>}
      </form>
    </section>
  )
}
