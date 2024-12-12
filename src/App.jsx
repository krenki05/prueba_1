//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Navbar from './components/navbar/Navbar'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
   <>
   
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    <div>
      <h5>Franco Casafus</h5>
    </div>
    </>
  )
}

export default App
