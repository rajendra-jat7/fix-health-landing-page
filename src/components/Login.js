import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // ... (your existing state)
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${formData.city}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="mx-auto mt-8 p-6 bg-white rounded-md shadow-md max-h-[70vh] overflow-y-auto" style={{ backdropFilter: 'blur(5px)' }}>
        <button className="absolute top-0 right-0 p-2 text-xl text-white" onClick={onClose}>X</button>
        <h2 className="text-2xl font-bold mb-4 text-black">Physiotherapy Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center bg-white p-4">
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
{formData.age > 40 && (
  <div className="mb-4">
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
  </div>
)}

          {/* Submit Button */}
          <button className="bg-green-700 px-8 py-4 rounded-lg text-white mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
