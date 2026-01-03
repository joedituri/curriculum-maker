import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfo />
    <Education />
  </StrictMode>,
)
