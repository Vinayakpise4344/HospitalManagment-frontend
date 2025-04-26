import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const[input,setinput] = useState({
    email:"",
    password:"",
    role:""
   })
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handlechange = (e)=>{
      setinput({
        ...input,[e.target.name]:e.target.value,
      })
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
   

     

        try {
            // Replace with your backend login endpoint
            const response = await axios.post('http://localhost:8085/auth/register', input,{
              headers:{
                "Content-Type":"application/json"
              },withCredentials:true
            });
            
            if (response.status === 200) {
                // Save tokens in localStorage (or wherever you want)
               navigate("/")

            }
               
        } catch (error) {
            setError('Invalid credentials or an error occurred.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
    
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              value={input.email}
              onChange={handlechange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              value={input.password}
              onChange={handlechange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
    
          <div className="form-group">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              name='role'
              value={input.role}
              onChange={handlechange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select your role</option>
              <option value="Doctor">Doctor</option>
              <option value="Management">Management</option>
            </select>
          </div>
    

    
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
    
    
    );
};

export default Login;
