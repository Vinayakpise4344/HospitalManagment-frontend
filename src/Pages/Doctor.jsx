import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../Component/download.jpeg';

const Doctor = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8085/getDoctors");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
  <div className="flex flex-wrap justify-center gap-4 w-full max-w-7xl">
    {data.map((item, key) => (
      <div
        key={item.id}
        className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-2"
      >
        <div className="bg-white rounded-lg shadow-lg border-2 border-amber-500 overflow-hidden h-full flex flex-col justify-between">
          {/* Header: Image + Basic Info */}
          <div className="flex items-center p-4">
            <div className="flex-shrink-0">
              <img
                src={img || '/default-doctor.jpg'}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 object-cover"
              />
            </div>

            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm">Age: {item.age}</p>
              <p className="text-gray-600 text-sm mb-1">Specialty: {item.specialization}</p>
            </div>
          </div>

          {/* Bio & Experience & Fees */}
          <div className="px-4 pb-4">
            <p className="text-gray-700 text-sm mb-2 line-clamp-5">
              He specializes in treating complex heart conditions using advanced non-invasive techniques. Passionate about patient care, he is known for his compassionate and detail-oriented approach.
            </p>
            <div className="flex justify-between text-sm font-medium text-gray-800">
              <span>Experience: {item.experience} yrs</span>
              <span>Fees: ₹{item.fees}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default Doctor;
