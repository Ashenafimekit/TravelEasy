import React from 'react';
import heroImage from '../assets/hero.jpg'; 

function Hero() {
  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-10">
        <h1 className="text-black text-4xl font-bold">Book Your Bus Tickets Effortlessly</h1>
        <h3 className='mt-5'>Experience seamless travel planning with our intuitive booking system, ensuring you get the best routes and prices with ease.</h3>
        <button className='bg-black border-black rounded-md w-24 h-12 text-white mt-10 hover:bg-amber-500 hover:text-black'><a href="#">sign up</a></button>
      </div>
    </div>
  );
}

export default Hero;
