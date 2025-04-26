import React, { useState } from "react";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    gender: "",
    age: "",
    contactNumber: "",
    email: "",
    address: "",
    department: "",
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
    medicalConcern: "",
    appointmentType: "OPD",
    paymentMethod: "Cash",
    existingPatientId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment submitted:", formData);
    // You can add your API integration here
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">📅 Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        <input name="patientName" type="text" placeholder="Patient Name" required onChange={handleChange} className="form-input" />
        <select name="gender" onChange={handleChange} className="form-input">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input name="age" type="number" placeholder="Age" onChange={handleChange} className="form-input" />
        <input name="contactNumber" type="tel" placeholder="Contact Number" required onChange={handleChange} className="form-input" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="form-input" />
        <input name="address" type="text" placeholder="Address" onChange={handleChange} className="form-input" />
        <select name="department" onChange={handleChange} className="form-input" required>
          <option value="">Select Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Dermatology">Dermatology</option>
        </select>
        <input name="doctorId" type="text" placeholder="Preferred Doctor (Optional)" onChange={handleChange} className="form-input" />
        <input name="appointmentDate" type="date" onChange={handleChange} className="form-input" required />
        <input name="appointmentTime" type="time" onChange={handleChange} className="form-input" required />
        <input name="medicalConcern" type="text" placeholder="Medical Concern" onChange={handleChange} className="form-input" />
        <select name="appointmentType" onChange={handleChange} className="form-input">
          <option value="OPD">OPD</option>
          <option value="Emergency">Emergency</option>
          <option value="Follow-up">Follow-up</option>
        </select>
        <select name="paymentMethod" onChange={handleChange} className="form-input">
          <option value="Cash">Cash</option>
          <option value="Insurance">Insurance</option>
          <option value="Online">Online</option>
        </select>
        <input name="existingPatientId" type="text" placeholder="Patient ID (if any)" onChange={handleChange} className="form-input" />
        <div className="md:col-span-2 text-center">
          <button type="submit" className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md">
            Submit Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;


