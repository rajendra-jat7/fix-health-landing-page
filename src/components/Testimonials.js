import React from 'react'
import { testimonialsData } from '../utils/constants';

const Testimonials = () => {
  
    return (
        <div className="w-4/5 mx-auto mt-8">
          <h2 className="text-3xl font-bold mb-4">Patient Testimonials</h2>
          <div className="flex space-x-4 overflow-x-scroll">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 mb-4 rounded-md shadow-md">
              <p className="text-gray-700 mb-2">{testimonial.content}</p>
              <p className="text-gray-500 text-sm">- {testimonial.author}</p>
            </div>
          ))}
          </div>
          {testimonialsData.length === 0 && <p>No testimonials available.</p>}
        </div>
      );
}

export default Testimonials