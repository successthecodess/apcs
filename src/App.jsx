import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import APCSQuestionGenerator from './APCSQuestionGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <APCSQuestionGenerator/>
    </>
  )
}

export default App
