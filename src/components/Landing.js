import React from 'react'
import DoctorsInCity from './Doctors'
import Hero from './Hero'
import Login from './Login'
import Testimonials from './Testimonials'

const Landing = () => {
  return (
    <div className='relative'>
        <Hero/>
        <Login/>
        <Testimonials/>
        {/* <DoctorsInCity/> */}
    </div>
  )
}

export default Landing