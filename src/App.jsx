import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor: 'red'}}>
      <NavBar />
      <p>Hello!</p>
    </div>
  )
}

export default App
