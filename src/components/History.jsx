import foto from '../assets/photos/fundadores.jpg'
import Reveal from './Reveal'

const STEPS = [
  {
    tag: 'A origem',
    color: 'navy',
    text: 'Joyce Novarino e Maicon Alarcão, profissionais da educação física e das artes marciais, são sócios da MA TEAM, escola de artes marciais voltada ao desenvolvimento esportivo e humano.',
  },
  {
    tag: 'O preparo',
    color: 'sky',
    text: 'Diante da crescente demanda por inclusão de pessoas autistas, estudaram e se prepararam para acolher esse público de forma consciente. Dessa experiência surgiu o Instituto Desenvolva, que atua com artes marciais.',
  },
  {
    tag: 'O desejo',
    color: 'red',
    text: 'Na convivência com famílias atípicas, perceberam a falta de visibilidade e apoio. Nasceu o desejo de ampliar a conscientização.',
  },
  {
    tag: '2024',
    color: 'orange',
    text: 'Surge a Caminhada pela Conscientização do Autismo em Campo Grande, movimento criado para levar informação, acolhimento e pertencimento à Zona Oeste do Rio de Janeiro.',
  },
  {
    tag: 'O vínculo',
    color: 'yellow',
    text: 'Durante a construção do projeto, o autismo também passou a fazer parte da realidade familiar da idealizadora, fortalecendo ainda mais sua conexão com a causa.',
  },
]

export default function History() {
  return (
    <section id="nossa-historia" className="section history">
      <div className="container">
        <div className="history__top">
          <div>
            <Reveal as="p" className="eyebrow">
              Nossa história
            </Reveal>
            <Reveal as="h2" className="h2" delay={80}>
              Da academia à causa: como tudo começou.
            </Reveal>
          </div>
          <Reveal as="figure" className="history__photo" delay={140}>
            <img
              src={foto}
              alt="Joyce Novarino e Maicon Alarcão sorrindo, de camisetas brancas com mãos coloridas e a palavra Autonomia"
              width="758"
              height="1200"
              loading="lazy"
            />
            <figcaption>Joyce Novarino e Maicon Alarcão, idealizadores do movimento.</figcaption>
          </Reveal>
        </div>

        <ol className="timeline">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.tag} className={`step step--${s.color}`} delay={i * 70}>
              <span className="step__dot" aria-hidden="true" />
              <h3 className="step__tag">{s.tag}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
