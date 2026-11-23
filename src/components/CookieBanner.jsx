import { useEffect, useRef, useState } from 'react'
import { getConsent, saveConsent, OPEN_PREFS_EVENT } from '../consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [detail, setDetail] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const firstBtn = useRef(null)

  useEffect(() => {
    const saved = getConsent()
    if (!saved) setVisible(true)
    else setAnalytics(!!saved.analytics)

    const reopen = () => {
      const c = getConsent()
      setAnalytics(!!c?.analytics)
      setDetail(true)
      setVisible(true)
    }
    window.addEventListener(OPEN_PREFS_EVENT, reopen)
    return () => window.removeEventListener(OPEN_PREFS_EVENT, reopen)
  }, [])

  useEffect(() => {
    if (visible && detail) firstBtn.current?.focus()
  }, [visible, detail])

  const decide = (value) => {
    saveConsent({ analytics: value })
    setAnalytics(value)
    setVisible(false)
    setDetail(false)
  }

  if (!visible) return null

  return (
    <section className="consent" role="dialog" aria-modal="false" aria-labelledby="consent-title" aria-describedby="consent-desc">
      <h2 id="consent-title" className="consent__title">
        Sua privacidade importa
      </h2>
      <p id="consent-desc" className="consent__text">
        Seguimos a LGPD. Hoje usamos apenas armazenamento essencial (como guardar esta escolha) e só
        ativaremos estatísticas de acesso com a sua permissão. Veja a{' '}
        <a href="/privacidade.html">Política de Privacidade</a>.
      </p>

      {detail && (
        <div className="consent__detail">
          <div className="consent__row">
            <div>
              <strong>Essenciais</strong>
              <span>Necessários para o site funcionar e lembrar sua escolha.</span>
            </div>
            <span className="consent__always">Sempre ativos</span>
          </div>
          <div className="consent__row">
            <div>
              <strong id="lbl-analytics">Estatísticas de acesso</strong>
              <span>Opcional. Ainda não utilizamos; se usarmos, será de forma anônima e só com sua permissão.</span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={analytics}
              aria-labelledby="lbl-analytics"
              className="switch"
              onClick={() => setAnalytics((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      )}

      <div className="consent__actions">
        {detail ? (
          <button type="button" ref={firstBtn} className="btn btn--primary btn--sm" onClick={() => decide(analytics)}>
            Salvar preferências
          </button>
        ) : (
          <>
            <button type="button" className="btn btn--primary btn--sm" onClick={() => decide(true)}>
              Aceitar
            </button>
            <button type="button" className="btn btn--outline btn--sm" onClick={() => decide(false)}>
              Recusar
            </button>
            <button type="button" className="btn btn--link btn--sm" onClick={() => setDetail(true)}>
              Personalizar
            </button>
          </>
        )}
      </div>
    </section>
  )
}
