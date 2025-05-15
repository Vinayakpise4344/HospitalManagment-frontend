import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Adddoctor = () => {

  const [input, setInput] = useState({
    doctor_id: '',
    name: '',
    age: '',
    email: '',
    phoneno: '',
    fees: '',
    specialization: '',
    experience: ''


  });

const handleChange =(e)=>{
  e.preventDefault();
  setInput({...input,[e.target.name]:e.target.value},
   console.log(input)
  )
}
const navigate = useNavigate();

const handleSubmit = async(e)=>{
  e.preventDefault();
    try{
       const res = await axios.post("http://localhost:8085/adddoctordetails",input,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
       })
       if(res.status==200){
        alert("Doctor Had Been Post");
        console.log("Had been posts")
        navigate("/doctors")
       }
  
    } catch(error){
      console.log(error)
    }  

}



  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
  <h2 className="text-3xl font-bold mb-8 text-center text-blue-600"> Add Doctor Details</h2>
  <form  onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
    <input
      name="doctor_id"
      type="text"
      placeholder="Doctor ID"
      required
      onChange={handleChange}
      className="form-input"
    />
    <input
      name="name"
      type="text"
      placeholder="Name"
      required
      onChange={handleChange}
      className="form-input"
    />
    <input
      name="age"
      type="number"
      placeholder="Age"
      required
      onChange={handleChange}
      className="form-input"
    />
    <input
      name="email"
      type="email"
      placeholder="Email"
      required
      onChange={handleChange}
      className="form-input"
    />
    <input
      name="phoneno"
      type="tel"
      placeholder="Phone Number"
      required
      onChange={handleChange}
      className="form-input"
    />
    <input
      name="fees"
      type="number"
      placeholder="Fees"
      required
      onChange={handleChange}
      className="form-input"
    />
    <input
      name="specialization"
      type="text"
      placeholder="Specialization"
      required
      onChange={handleChange}
      className="form-input"
    />
    <input
      name="experience"
      type="number"
      placeholder="Experience (in years)"
      required
      onChange={handleChange}
      className="form-input"
    />
    <div className="md:col-span-2 text-center">
      <button
        type="submit"
        className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Add Doctor
      </button>
    </div>
  </form>
</div>

  )
}

export default Adddoctor