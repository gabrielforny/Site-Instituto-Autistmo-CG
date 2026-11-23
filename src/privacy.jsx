import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/noto-sans'
import './index.css'
import Privacy from './pages/Privacy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Privacy />
  </StrictMode>,
)
