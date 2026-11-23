import PuzzlePiece from './PuzzlePiece'
import Reveal from './Reveal'

// Peças soltas no fundo da faixa (decorativas). `sm: true` = também aparecem no mobile.
const PIECES = [
  { v: 'ghost', size: 130, left: '1.5%', top: '7%', rot: -16, sm: true },
  { v: 'line', color: 'blue', size: 92, left: '31%', top: '-7%', rot: 24 },
  { v: 'ghost', size: 150, left: '41%', top: '68%', rot: 12 },
  { v: 'line', color: 'red', size: 84, left: '9%', top: '66%', rot: -28, sm: true },
  { v: 'ghost', size: 170, right: '2%', top: '-9%', rot: 30, sm: true },
  { v: 'line', color: 'yellow', size: 104, right: '-1.5%', top: '66%', rot: -12 },
  { v: 'line', color: 'yellow', size: 70, left: '34%', top: '82%', rot: 40 },
  { v: 'line', color: 'blue', size: 60, left: '22%', top: '9%', rot: -8 },
]

export default function Manifesto() {
  return (
    <section id="manifesto" className="manifesto">
      <div className="manifesto__bg" aria-hidden="true">
        {PIECES.map((p, i) => (
          <PuzzlePiece
            key={i}
            color={p.color || 'blue'}
            size={p.size}
            className={`piece--${p.v} ${p.sm ? '' : 'm-hide'}`}
            style={{
              left: p.left,
              right: p.right,
              top: p.top,
              rotate: `${p.rot}deg`,
              '--d': `${-i * 1.7}s`,
            }}
          />
        ))}
      </div>
      <div className="container manifesto__grid">
        <div className="manifesto__head">
          <Reveal as="p" className="eyebrow eyebrow--light">
            Nosso manifesto
          </Reveal>
          <Reveal as="h2" className="manifesto__title" delay={80}>
            Conscientizar é <span>humanizar.</span>
          </Reveal>
        </div>

        <div className="manifesto__text">
          <Reveal as="p" delay={120}>
            Acreditamos que pessoas autistas não vivem em um mundo separado. Vivem no mesmo mundo que todos
            nós. Sentem, aprendem, amam, se expressam e experimentam a vida de forma única e legítima.
          </Reveal>
          <Reveal as="p" delay={180}>
            Acreditamos que inclusão não é privilégio de poucos territórios — é direito de todos. A
            conscientização precisa alcançar todas as famílias. Todos os bairros. Todas as realidades.
          </Reveal>
          <Reveal as="p" className="manifesto__strong" delay={240}>
            Acreditamos que nenhuma família deve caminhar sozinha.
          </Reveal>
          <Reveal as="p" delay={300}>
            Por isso existimos: para construir pontes, acolher, promover respeito, informar, fortalecer
            famílias e <strong>transformar consciência em ação.</strong>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
