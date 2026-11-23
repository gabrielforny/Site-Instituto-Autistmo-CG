import logo from '../assets/logo-horizontal.png'
import Icon from './Icons'
import { CONTACT, NAV } from '../config'
import { openCookiePrefs } from '../consent'

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Instituto Autismo Campo Grande" width="1579" height="461" loading="lazy" />
          <p className="footer__lead">Conscientização, acolhimento e inclusão social.</p>
          <p className="footer__place">Zona Oeste · Rio de Janeiro, RJ</p>
        </div>

        <nav className="footer__nav" aria-label="Rodapé">
          <h2 className="footer__h">Navegue</h2>
          {NAV.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <h2 className="footer__h">Contato</h2>
          <ul>
            <li>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={20} /> {CONTACT.whatsappDisplay}
                <span className="sr-only"> (WhatsApp, abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={20} /> {CONTACT.instagramHandle}
                <span className="sr-only"> (Instagram, abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <Icon name="mail" size={20} /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__legal">
        <small>© {new Date().getFullYear()} Instituto Autismo Campo Grande. Todos os direitos reservados.</small>
        <span className="footer__links">
          <a href="/privacidade.html">Política de Privacidade</a>
          <button type="button" onClick={openCookiePrefs}>
            Preferências de cookies
          </button>
        </span>
      </div>
    </footer>
  )
}
