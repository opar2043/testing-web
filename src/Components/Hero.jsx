import React from 'react'
import About from './About'

const Hero = () => {
  return (
<div>
<div
  className="hero min-h-screen my-9"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/3HBbWYh/green.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl md:text-6xl font-extrabold">Digital IT</h1>
      <p className="mb-5 font-semibold">
         An Institute of digital knowladge . where people can grow their Ideas and knowladge of It Sector.
      </p>
      <button className="text-yellow-900 btn  hover:text-black bg-gradient-to-r from-yellow-300 to-yellow-500 hover:bg-yellow-400  px-6 md:px-10 border-0 font-semibold">Learn More</button>
    </div>
  </div>

</div>
<About></About>
</div>

  )
}

export default Hero