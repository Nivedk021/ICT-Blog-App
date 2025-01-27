import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/a' element={<Homepage/>}/>
    <Route path='/' element={<Blog/>}/>
    </Routes>
    <Navbar />
  </>

  )
}

export default App
