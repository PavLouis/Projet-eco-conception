import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import Lechef from './Lechef/Lechef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Lechef />
      <p>Hello!</p>
    </div>
  )
}

export default App
