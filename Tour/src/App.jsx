import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Home from './Pages/Home'
import Nearby from './Pages/Nearby'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
       <Route path='/' element={<Hero/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/nearby' element={<Nearby/>}/>
       <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App