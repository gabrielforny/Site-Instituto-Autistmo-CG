import { useEffect, useState } from 'react'
import logo from '../assets/logo-horizontal.png'
import Icon from './Icons'
import { CONTACT, NAV } from '../config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
    <header className={`header ${scrolled ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__bar">
        <a href="/" className="header__brand" aria-label="Instituto Autismo Campo Grande — página inicial">
          <img src={logo} alt="Instituto Autismo Campo Grande" width="1579" height="461" />
        </a>

        <nav className="header__nav" aria-label="Principal">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="btn btn--outline header__cta" href={CONTACT.whatsappSupportUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="heart" size={18} />
            Apoie o Instituto
            <Icon name="arrow" size={16} />
            <span className="sr-only"> (abre o grupo de apoio no WhatsApp, em nova aba)</span>
          </a>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

    </header>
    <div id="menu-mobile" className={`drawer ${open ? 'drawer--open' : ''}`}>
      <nav aria-label="Menu mobile">
        {NAV.map((l, i) => (
          <a key={l.href} href={l.href} onClick={close} style={{ '--i': i }} tabIndex={open ? 0 : -1}>
            {l.label}
          </a>
        ))}
        <a
          className="drawer__cta"
          href={CONTACT.whatsappSupportUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ '--i': NAV.length }}
          tabIndex={open ? 0 : -1}
        >
          Apoie o Instituto
        </a>
      </nav>
    </div>
    </>
  )
}
