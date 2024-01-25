import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: 0,
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });

  const navigate=useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${formData.city}`)
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(formData)

  return (
    <div className=" mx-auto mt-8 p-6 bg-white rounded-md shadow-md w-1/2 bg-black absolute top-0 left-10  ">
      <h2 className="text-2xl font-bold mb-4 text-black">Physiotherapy Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center bg-">
        {/* Name and Phone Number */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Age, City, and Company */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-600">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-600">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Chief Complaints */}
        <div className="mb-4">
          <label htmlFor="chiefComplaints" className="block text-sm font-medium text-gray-600">
            Chief Complaints
          </label>
          <textarea
            id="chiefComplaints"
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Previous Experience */}
        {formData.age>40 && <div className="mb-4">
          <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-600">
            Any previous experience with physiotherapy
          </label>
          <textarea
            id="previousExperience"
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>}
        
        <button className='bg-green-700 px-8 py-4 rounded-lg'>Submit</button>
        </form>
    </div>
)}

export default Login