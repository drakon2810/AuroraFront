import App from './App.tsx'
import { Providers } from './components/Providers.tsx'
import './i18n.ts'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
)
