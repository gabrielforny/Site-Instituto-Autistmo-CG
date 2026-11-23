import g1 from '../assets/photos/galeria-1.jpg'
import g2 from '../assets/photos/galeria-2.jpg'
import g3 from '../assets/photos/galeria-3.jpg'
import g4 from '../assets/photos/galeria-4.jpg'
import g5 from '../assets/photos/galeria-5.jpg'
import Reveal from './Reveal'

const PHOTOS = [
  { src: g1, w: 1400, h: 916, grow: 1.5, alt: 'Mulher rindo com uma criança no colo durante um evento ao ar livre' },
  { src: g2, w: 1400, h: 972, grow: 1.45, alt: 'Multidão reunida na caminhada de conscientização, com faixa do Dia Mundial de Conscientização do Autismo' },
  { src: g3, w: 1600, h: 781, grow: 2.05, alt: 'Menina desenhando com canetinhas coloridas em uma atividade de acolhimento' },
  { src: g4, w: 1100, h: 1100, grow: 1.2, alt: 'Duas mulheres e uma criança sorrindo, com camisetas verdes do movimento' },
  { src: g5, w: 1400, h: 965, grow: 1.45, alt: 'Criança fazendo carinho em um cachorro durante uma atividade com a comunidade' },
]

export default function Gallery() {
  return (
    <section id="acoes" className="gallery" aria-labelledby="acoes-titulo">
      <div className="container gallery__head">
        <Reveal as="p" className="eyebrow">
          Ações e projetos
        </Reveal>
        <Reveal as="h2" className="sr-only" id="acoes-titulo">
          Imagens de caminhadas, encontros e atividades do movimento
        </Reveal>
      </div>
      <Reveal as="ul" className="gallery__row" delay={80}>
        {PHOTOS.map((p) => (
          <li key={p.src} style={{ '--grow': p.grow }}>
            <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" />
          </li>
        ))}
      </Reveal>
    </section>
  )
}
