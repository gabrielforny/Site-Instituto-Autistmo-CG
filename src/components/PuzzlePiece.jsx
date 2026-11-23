// Peça de quebra-cabeça (símbolo do autismo) nas cores da marca.
export default function PuzzlePiece({ color = 'red', size = 72, className = '', style }) {
  return (
    <svg
      className={`piece piece--${color} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      <path d="M10 10H40a10 10 0 1 1 20 0H90V40a10 10 0 1 1 0 20V90H60a10 10 0 1 0-20 0H10V60a10 10 0 1 0 0-20Z" />
    </svg>
  )
}
