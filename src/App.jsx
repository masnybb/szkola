import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Kalkulator'
import RegistrationForm from './formularz'


function App() {
  const [count, setCount] = useState(0)

  return (
    <RegistrationForm/>
    // <Calculator/>
  )
}

export default App
