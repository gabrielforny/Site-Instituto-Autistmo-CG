// Preferências de privacidade (LGPD). Guardadas apenas no navegador do visitante.
// Hoje o site NÃO usa cookies de terceiros nem ferramentas de estatística.
// Se algum dia for incluído (ex.: analytics), carregue o script SOMENTE se
// getConsent().analytics === true e escute o evento 'consent-change'.

const KEY = 'iacg-consent-v1'

export function getConsent() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveConsent({ analytics }) {
  const value = { necessary: true, analytics: !!analytics, savedAt: new Date().toISOString() }
  try {
    localStorage.setItem(KEY, JSON.stringify(value))
  } catch {
    /* navegador bloqueou o armazenamento: a escolha vale só nesta visita */
  }
  window.dispatchEvent(new CustomEvent('consent-change', { detail: value }))
  return value
}

export const OPEN_PREFS_EVENT = 'open-cookie-prefs'
export const openCookiePrefs = () => window.dispatchEvent(new Event(OPEN_PREFS_EVENT))
