import Icon from './Icons'
import Reveal from './Reveal'

export default function Mission() {
  return (
    <section id="missao" className="section mission">
      <div className="container mission__grid">
        <div className="mission__head">
          <Reveal as="p" className="eyebrow">
            Missão e visão
          </Reveal>
          <Reveal as="h2" className="h2" delay={80}>
            O que nos move todos os dias.
          </Reveal>
        </div>

        <Reveal as="article" className="card card--mission" delay={80}>
          <Icon name="target" size={44} className="card__icon" />
          <h3>Missão</h3>
          <p>
            Promover conscientização sobre o autismo, fortalecer famílias e incentivar uma sociedade mais
            inclusiva, empática e acessível.
          </p>
        </Reveal>

        <Reveal as="article" className="card card--vision" delay={160}>
          <Icon name="eye" size={44} className="card__icon" />
          <h3>Visão</h3>
          <p>
            Tornar-se referência em conscientização, inclusão e mobilização social sobre o autismo através
            do esporte no estado do Rio de Janeiro.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
