import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from './Hero';

const DoctorsInCity = ({ allDoctors }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const {city}=useParams()
  

  useEffect(()=>{
      setSelectedCity(city)
    getDoctors(city)
  },[city])

  const getDoctors=async (city)=>{
        const response=await fetch("https://8b753df0-d1ee-47c4-8916-b78c2965475e-00-18ag0gsaa8d1y.pike.replit.dev/doctors/"+city)
        const data=await response.json()
        setFilteredDoctors(data)    
  }

  return (
    <div className=" mx-auto  h-screen bg-black w-scrren">
        <Hero/>
      <h2 className="text-3xl font-bold mb-4 text-white mx-4">Doctors in {city.toUpperCase()}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {selectedCity && filteredDoctors.length === 0 && <p className='text-white font-bold text-2xl'>No doctors found in {selectedCity}.</p>}
        {filteredDoctors.map((doctor, index) => (
          <div key={index} className="bg-white p-6 mb-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
            <p className="text-gray-700 mb-2">{doctor.speciality}</p>
            <p className="text-gray-700 mb-2">{doctor.Degree}</p>
            <p className="text-gray-500 text-sm">{doctor.city}</p>
            <p className="text-gray-500 text-sm">{doctor.Experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsInCity;
