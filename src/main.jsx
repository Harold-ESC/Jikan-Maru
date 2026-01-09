import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScheduleWheelApp from './ScheduleWheelApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScheduleWheelApp />
  </StrictMode>,
)
