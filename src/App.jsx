import { useEffect, useState } from 'react'
import './index.css'
import Doctor from './Pages/Doctor'
import Contact from './Pages/Contact'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import BookAppointment from './Pages/BookAppointment'
import Adddoctor from './Pages/Adddoctor'

function App() {
  const[authenticated , setauthenticated] = useState(false);

  useEffect(()=>{
     const token = localStorage.getItem("token");
     setauthenticated(!!token)


  },[])
  



  return (
    <>
    <BrowserRouter>
    
            <Navbar/>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login setauthenticated={setauthenticated}/>}/>
                <Route path="/" element={<Home />} />
                <Route path='/bookappointment' element={<BookAppointment/>}/>
                <Route path='/doctors' element={<Doctor/>} />
                
                <Route path="/contact" element={<Contact/>} />
              
                {/* Protected Route */}

                <Route path='/adddoctor'
                element={
                  authenticated ? <Adddoctor/> : <Navigate to ="/login"/>
                }
           />
      
       </Routes>
             
    
    </BrowserRouter>

     
     
    </>
  )
}

export default App
