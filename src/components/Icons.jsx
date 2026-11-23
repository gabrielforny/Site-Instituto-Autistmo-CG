// Ícones de traço simples (24x24). Decorativos: sempre aria-hidden.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

const paths = {
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  arrow: <path d="M9 5l7 7-7 7" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  venn: (
    <>
      <circle cx="9" cy="12" r="6" />
      <circle cx="15" cy="12" r="6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M12 17s-2.5-1.5-2.5-3.2a1.4 1.4 0 0 1 2.5-.8 1.4 1.4 0 0 1 2.5.8C14.5 15.5 12 17 12 17Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9Z" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14.5c1 1.3 2.3 2 4 2s3-.7 4-2" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth="2.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M17 14c2.2 0 4 1.8 4 4" />
    </>
  ),
  puzzle: <path d="M5 5h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v6h-5a2 2 0 1 0-4 0H5v-5a2 2 0 1 0 0-4V5Z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.2-4.2A8 8 0 1 1 8.3 19L4 20Z" />
      <path d="M9 8.5c0 3.3 3.2 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 8.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7.5l8 6 8-6" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
}

export default function Icon({ name, size = 24, className = '', ...rest }) {
  return (
    <svg {...base} width={size} height={size} className={className} {...rest}>
      {paths[name]}
    </svg>
  )
}
