import { useEffect } from 'react'
// Keeps <html lang> and dir in sync with the chosen language (EN left-to-right, AR right-to-left).
export function useDocumentLang(lang, dir) {
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])
}
