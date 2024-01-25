import React, { useState } from 'react';
import Login from './Login';

const Hero = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className='h-1/4 object-cover w-screen'>
      <img
        alt="hero"
        className='object-cover w-screen h-full'
        src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      {showForm && <Login onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Hero;
