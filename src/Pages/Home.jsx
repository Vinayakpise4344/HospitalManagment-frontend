import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="font-sans max-h-screen">
        
    {/* Hero Section */}
    <section className="mt-0 h-[60vh] bg-blue-50 flex flex-col justify-center items-center text-center p-8 mb-20">
    <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4 p-4">
  Welcome to Vinayak Healthcare Center
</h1>
<p className="text-lg text-xl text-gray-700 max-w-2xl ">
  Committed to Excellence in Healthcare, Compassionate Care for All.
</p>

<Link to="/bookappointment" className="mt-6 bg-blue-700 text-white text-xl rounded-full w-72 h-14 flex items-center justify-center hover:bg-blue-800 ">
  Book Appointment
</Link>

</section>

 
<section className= "  mt-3 mb-20 px-6">
  
  <h2 className="text-3xl font-semibold text-center text-blue-800 mb-10">Our Services</h2>
     <br/>
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-16 mb-4">
      {[
        { 
          title: "Emergency Care", 
          description: "We provide fast and reliable emergency medical services 24/7, ensuring that you and your loved ones receive prompt care during urgent situations. Our medical team is highly trained to handle all kinds of emergencies, from accidents to sudden medical issues, ensuring peace of mind during critical moments."
        },
        { 
          title: "Outpatient Services", 
          description: "Our outpatient services cover a wide range of healthcare needs, from routine check-ups to specialized treatments, all aimed at delivering top-tier care. Whether it's a minor consultation or an advanced procedure, we ensure you're comfortable and well-cared for throughout the process."
        },
        { 
          title: "Diagnostics", 
          description: "We utilize cutting-edge diagnostic technology to provide accurate and timely results, aiding in early disease detection and effective treatment planning. Our expert medical team interprets the results to guide you on the right path to recovery."
        }
      ].map((service, idx) => (
        <div key={idx} className="service-card p-5 border-2 border-blue-300 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 flex flex-col justify-between text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">{service.title}</h3>
          <p className="text-gray-700 mb-3">{service.description}</p>
          
        </div>
      ))}
    </div> 
     <br/>
     <br/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
      {[
        { 
          title: "Surgical Services", 
          description: "Our expert surgeons specialize in minimally invasive techniques to ensure a quicker recovery, reduced pain, and minimal scarring. We offer a wide range of surgical services, from elective surgeries to urgent procedures, with a focus on your comfort and well-being."
        },
        { 
          title: "Maternity Care", 
          description: "We offer comprehensive maternity care services, including prenatal and postnatal care, ensuring a healthy and safe experience for both mothers and babies. Our specialized team supports mothers every step of the way from conception to delivery, providing the highest level of care for both mother and child."
        },
        { 
          title: "Pediatric Care", 
          description: "We provide specialized pediatric care for children, ensuring their health and well-being through expert medical attention. Our pediatricians are experienced in diagnosing and treating childhood illnesses, ensuring your child receives the best care possible in a warm and welcoming environment."
        }
      ].map((service, idx) => (
        <div key={idx} className="service-card p-5 border-2 border-blue-300 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 flex flex-col justify-between text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">{service.title}</h3>
          <p className="text-gray-700 mb-3">{service.description}</p>
          
        </div>
      ))}
  </div>
</section>
<br></br>
    
    <section className="bg-blue-700 py-6 text-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Need Medical Assistance?</h2>
      <p className="mb-6">Call us 24/7 at <span className="font-bold">+91 12345 67890</span></p>
      <button className="bg-white text-blue-700 h-10 font-serif w-32 border-2 rounded-2xl hover:bg-gray-100">Contact Us</button>
    </section>

  </div>
  )
}

  

export default Home