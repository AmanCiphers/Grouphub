import { useState } from 'react'
import LandingPage from './components/landing/landing.jsx'
import Landing2 from './components/landing-2/landing-2.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <LandingPage className=></LandingPage>
      <Landing2></Landing2>
    </>
  )
}



export default App
