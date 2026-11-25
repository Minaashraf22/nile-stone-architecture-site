import { useState } from 'react'
import { content } from './data.js'
import { useDocumentLang } from './hooks/useDocumentLang.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import { Studio, Services } from './components/InfoSections.jsx'
import ContactForm from './components/ContactForm.jsx'

export default function App() {
  const [lang, setLang] = useState('en')
  const t = content[lang]
  useDocumentLang(lang, t.dir)
  return (
    <>
      <Nav t={t} lang={lang} onToggleLang={() => setLang(lang === 'en' ? 'ar' : 'en')} />
      <Hero t={t} />
      <ProjectsSection t={t} lang={lang} />
      <Studio t={t} />
      <Services t={t} />
      <ContactForm t={t} />
      <footer>{t.footer}</footer>
    </>
  )
}
