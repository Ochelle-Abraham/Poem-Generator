import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PoemBox from './PoemBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PoemBox />
  </StrictMode>,
)

