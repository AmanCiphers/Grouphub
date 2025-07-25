import { useState } from 'react'
import LandingPage from './components/landing.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage></LandingPage>
    </>
  )
}

export default App
