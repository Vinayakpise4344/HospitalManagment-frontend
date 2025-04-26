import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg border border-gray-200 space-y-5">
      <h2 className="text-2xl font-bold text-center text-blue-800">Contact Us</h2>
      <p className="text-center text-gray-500 text-sm">Fill out the form below and we’ll get back to you shortly.</p>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Age"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Address"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Tell us what’s going on..."
        rows="4"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-3 text-lg font-semibold rounded-full hover:bg-blue-800 transition-all"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default Contact