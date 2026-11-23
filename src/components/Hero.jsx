import foto from '../assets/photos/hero.jpg'
import Icon from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__copy">
        <p className="eyebrow hero__in" style={{ '--i': 0 }}>
          Movimento social comunitário · Zona Oeste do Rio
        </p>
        <h1 className="hero__title hero__in" style={{ '--i': 1 }}>
          Nenhuma família deve <em>caminhar</em> sozinha.
        </h1>
        <p className="hero__lead hero__in" style={{ '--i': 2 }}>
          Conscientização sobre o autismo, acolhimento às famílias e promoção de uma sociedade mais
          inclusiva, empática e acessível.
        </p>
        <div className="hero__cta hero__in" style={{ '--i': 3 }}>
          <a className="btn btn--primary" href="#quem-somos">
            Conheça o Instituto
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>

      <div className="hero__media hero__in" style={{ '--i': 1 }}>
        <span className="hero__arc" aria-hidden="true" />
        <img
          src={foto}
          alt="Criança sorrindo de braços erguidos, brincando com bolhas de sabão durante uma ação do Instituto"
          width="741"
          height="1300"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
