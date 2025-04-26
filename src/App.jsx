import { useState } from 'react'
import './index.css'
import Doctor from './Pages/Doctor'
import Contact from './Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import BookAppointment from './Pages/BookAppointment'

function App() {


  return (
    <>
    <BrowserRouter>
    <div>
        <Navbar/>
        <div >
          <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/" element={<Home />} />
            <Route path='/bookappointment' element={<BookAppointment/>}/>
            <Route path='/doctors' element={<Doctor/>} />
            
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

     
     
    </>
  )
}

export default App
