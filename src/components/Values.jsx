import { useEffect, useRef, useState } from 'react'
import Icon from './Icons'
import Reveal from './Reveal'

const VALUES = [
  { icon: 'venn', tone: 'orange', name: 'Inclusão', text: 'Oportunidade e pertencimento para todos.' },
  { icon: 'shield', tone: 'blue', name: 'Respeito', text: 'Valorização das diferenças e das singularidades.' },
  { icon: 'heart', tone: 'red', name: 'Empatia', text: 'Escuta ativa e cuidado real com as famílias.' },
  { icon: 'eye', tone: 'navy', name: 'Transparência', text: 'Gestão responsável e comunicação clara.' },
  { icon: 'home', tone: 'orange', name: 'Acolhimento', text: 'Rede de apoio e suporte contínuo.' },
  { icon: 'globe', tone: 'blue', name: 'Responsabilidade social', text: 'Compromisso com a transformação da comunidade.' },
  { icon: 'smile', tone: 'red', name: 'Humanização', text: 'Olhar para cada pessoa na sua história.' },
  { icon: 'users', tone: 'navy', name: 'Pertencimento comunitário', text: 'A comunidade como parte essencial do projeto.' },
  { icon: 'puzzle', tone: 'orange', name: 'Compromisso com família', text: 'Caminhar junto com quem vive o autismo.' },
]

export default function Values() {
  const listRef = useRef(null)
  const [active, setActive] = useState(0)

  // No mobile a lista é um carrossel: descobre qual cartão está no centro.
  useEffect(() => {
    const el = listRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const mid = el.scrollLeft + el.clientWidth / 2
      let best = 0
      let bestDist = Infinity
      Array.from(el.children).forEach((child, i) => {
        const d = Math.abs(child.offsetLeft + child.offsetWidth / 2 - mid)
        if (d < bestDist) {
          bestDist = d
          best = i
        }
      })
      setActive(best)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const goTo = (i) => {
    const el = listRef.current
    const child = el?.children[i]
    if (!child) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  return (
    <section id="valores" className="section values">
      <div className="container values__grid">
        <div className="values__head">
          <Reveal as="p" className="eyebrow">
            Nossos valores
          </Reveal>
          <Reveal as="h2" className="h2" delay={80}>
            Princípios que guiam cada ação do Instituto.
          </Reveal>
        </div>

        <Reveal className="values__wrap" delay={100}>
          <ul
            className="values__list"
            ref={listRef}
            tabIndex={0}
            aria-label="Valores do Instituto. Deslize para o lado para ver todos."
          >
            {VALUES.map((v) => (
              <li key={v.name} className={`value value--${v.tone}`}>
                <Icon name={v.icon} size={34} className="value__icon" />
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>

          <div className="values__dots" role="group" aria-label="Escolher valor">
            {VALUES.map((v, i) => (
              <button
                key={v.name}
                type="button"
                aria-label={`Ir para ${v.name}`}
                aria-current={i === active}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
