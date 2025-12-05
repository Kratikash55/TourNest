import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Home from './Pages/Home'
import Nearby from './Pages/Nearby'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Admin from './AdminFolder/AdminPanel'
import UserManagement from './AdminFolder/UserManagement'
import BookingManagement from './AdminFolder/BookingManagement'

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
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/users' element={<UserManagement/>}/>
      <Route path='/bookings' element={<BookingManagement/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App