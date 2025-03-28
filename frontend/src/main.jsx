import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WorkoutsContextProvider } from './context/WorkoutsContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </StrictMode>,
)
