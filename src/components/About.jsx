import foto from '../assets/photos/quem-somos.jpg'
import PuzzlePiece from './PuzzlePiece'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="quem-somos" className="section about">
      <div className="container about__grid">
        <div className="about__head">
          <Reveal as="p" className="eyebrow">
            Quem somos
          </Reveal>
          <Reveal as="h2" className="h2" delay={80}>
            Informação, pertencimento e <em>representatividade</em> para todas as famílias.
          </Reveal>
        </div>

        <Reveal className="about__media">
          <span className="about__arc" aria-hidden="true" />
          <img
            src={foto}
            alt="Mulher e criança abraçadas, sorrindo, usando cordões com o símbolo do quebra-cabeça"
            width="560"
            height="1200"
            loading="lazy"
          />
          <PuzzlePiece color="blue" size={70} className="about__piece" />
        </Reveal>

        <div className="about__text">
          <Reveal as="p" className="prose" delay={140}>
            O Instituto Autismo Campo Grande é um movimento social comunitário voltado à conscientização
            sobre o Transtorno do Espectro Autista (TEA), ao acolhimento de famílias e à promoção da
            inclusão social.
          </Reveal>
          <Reveal as="p" className="prose" delay={200}>
            Nascido na Zona Oeste do Rio de Janeiro, o movimento surgiu da necessidade de tornar a
            conscientização mais acessível às famílias da região, levando informação, pertencimento e
            representatividade para comunidades historicamente menos assistidas.
          </Reveal>
        </div>

        <Reveal as="aside" className="about__aside" delay={260}>
          <PuzzlePiece color="yellow" size={46} className="about__aside-piece" />
          <p>
            Mais do que um evento, o Instituto Autismo Campo Grande representa um movimento de
            transformação social, empatia e construção coletiva.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
