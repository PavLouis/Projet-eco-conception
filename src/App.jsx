import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import Lechef from './Lechef/Lechef'
import NosPatisseries from './NosPatisseries/NosPatisseries'
import Onparledenous from './Onparledenous/Onparledenous'
import OuNousTrouver from './Ounoustrouver/Ounoustrouver'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Lechef />
      <NosPatisseries />
      <Onparledenous />
      <OuNousTrouver/>
    </div>
  )
}

export default App
