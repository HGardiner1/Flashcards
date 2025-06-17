import { useState } from 'react'
import './App.css'
import Flashcard from './Components/Flashcard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <header>
          <h1>Object Oriented Programming!</h1>
          <h2>Lets see how well you do...</h2>
          <h4>Number of Cards: 20</h4>
        </header>
          <Flashcard />
      </div>
  )
}

export default App
