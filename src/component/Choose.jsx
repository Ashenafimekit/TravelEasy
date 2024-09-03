import React from 'react'
import bus from '../assets/bus.jpg'

const Choose = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#F5F5F5] gap-5 mt-5'>
        <div className='font-bold text-lg pt-3'>
            <h1>Why Choose TravelEase?</h1>
        </div>
        <div className='flex flex-row px-20 pb-6'>
            <div className='w-1/2  p-20 bg-white rounded-lg shadow-xl'>
                <ul className='list-disc font-bold pl-5 flex flex-col gap-4'>
                    <li>Convenient Booking Process</li>
                    <li>Wide Selection of Routes</li>
                    <li>Real-Time Updates</li>
                    <li>Customer Support</li>
                    <li>Enhanced Travel Experience</li>
                    <li>Comfort and Safety</li>
                </ul>
            </div>
            <div className='w-1/2 '>
                <img src={bus} alt="bus" className='rounded-lg shadow-xl' />
            </div>
        </div>
    </div>
  )
}

export default Choose