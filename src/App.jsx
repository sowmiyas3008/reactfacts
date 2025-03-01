import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
    <Header/>
    <Main/>
    </>

  )
}

export default App
