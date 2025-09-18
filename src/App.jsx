import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Userdetails from './pages/Userdetails'
import ScheduleTherapy from './pages/ScheduleTherapy'
import ScheduleVideo from './pages/ScheduleVideo'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='bg-gray-600'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Userdetails' element={<Userdetails />} />
        <Route path='/sheduletherapy' element={<ScheduleTherapy />} />
        <Route path='/shedulevideo' element={<ScheduleVideo />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      

     
    </div>
  )
}

export default App
