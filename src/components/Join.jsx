import Icon from './Icons'
import PuzzlePiece from './PuzzlePiece'
import Reveal from './Reveal'
import { CONTACT } from '../config'

export default function Join() {
  return (
    <section id="participe" className="join-wrap">
      <Reveal className="container join">
        <PuzzlePiece color="yellow" size={120} className="join__piece join__piece--a" />
        <PuzzlePiece color="red" size={80} className="join__piece join__piece--b" />
        <h2 className="join__title">Faça parte desse <br className="join__br" />movimento.</h2>
        <p className="join__text">
          Famílias, profissionais e apoiadores são parte essencial da construção do projeto. Entre no
          nosso grupo de apoio no WhatsApp e conheça as formas de participar das iniciativas do Instituto.
        </p>
        <a className="btn btn--white" href={CONTACT.whatsappSupportUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="heart" size={20} />
          Apoie o Instituto
          <Icon name="arrow" size={16} />
          <span className="sr-only"> (abre o grupo de apoio no WhatsApp, em nova aba)</span>
        </a>
      </Reveal>
    </section>
  )
}
