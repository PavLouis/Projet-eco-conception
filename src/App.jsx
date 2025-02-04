import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <p>Hello!</p>
    </div>
  )
}

export default App
