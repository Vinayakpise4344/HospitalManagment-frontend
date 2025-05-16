import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = () => {

  const[input , setinput] = useState(
    {
      name:"",
      email:"",
      password:"",
      phoneno:"",
      role:"",
      employeeID:""
    }
  )
  const handleChanges =(e)=>{
    setinput({
      ...input,
      [e.target.name]:e.target.value,
    })

  }
  
  const navigate = useNavigate();

  const Handlesubmit = async(e)=>{
    e.preventDefault();
    try{

      const response =await axios.post("https://hospitalmanagementserver-3430.onrender.com/auth/register",input,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true,

      })
     if(response.data.statuscode == 200){
         alert("You Have Sucessfully SignUp In");
         navigate("/login");
     }

    }catch(error){
      alert("Invalid Credentials");
       console.log("Hello bro u gotcha n error",error)
    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
    
      <form className="space-y-4" onSubmit={Handlesubmit} >
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="name"
          value={input.name}
          onChange={handleChanges}
          placeholder="Full Name"
       
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="email"
          type="email"
          value={input.email}
          onChange={handleChanges}
          placeholder="Email"
         
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="employeeID"
          placeholder="Employee ID"
          value={input.employeeID}
          onChange={handleChanges}
        
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="phoneno"
          placeholder="Phone Number"
          value={input.phoneno}
          onChange={handleChanges}
         
        />
            <select
                className="w-full px-4 py-2 bg-transparent border border-white/30 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={input.role}
                name="role"
                onChange={handleChanges}
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="Doctor">Doctor</option>
                <option value="Management">Management</option>
              </select>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="password"
          type="password"
          value={input.password}
          onChange={handleChanges}
          placeholder="Password"
      
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}

export default Signup