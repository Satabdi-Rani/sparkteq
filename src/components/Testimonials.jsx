import React from 'react'

const Testimonials = () => {
  return (
    <div name='testimonials' className= 'my-24 w-[80%] mx-auto'>
        <h1 className='text-4xl sm:text-5xl xl:text-7xl font-bold text-purple-600 text-center mb-16'>Testimonials</h1>
        <div className='grid grid-col-1 sm:grid-cols-3 justify-center items-cenetr' >
             <div className='flex flex-col items-center sm:w-[80%] mb-12'>
                <h2 className='text-lg sm:text-lg lg:text-xl'>"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage."</h2> 
                <h3 className='text-lg text-left mt-4 font-semibold'>Jason Momoa</h3>
                <p className='text-md text-left'><i>Founder</i></p>
             </div>

             <div className='flex flex-col items-center sm:w-[90%] mb-12'>
                <h2 className='text-lg sm:text-lg lg:text-xl'>"Employees' work performance is vital to a company's overall growth. This is why managers and leaders must evaluate their team members' performance and help them improve." </h2> 
                <h3 className='text-lg text-left mt-9 font-semibold'>Mark Tison</h3>
                <p className='text-md text-left'><i>Founder</i></p>
             </div>

             <div className='flex flex-col items-center sm:w-[90%]'>
                <h2 className='text-lg sm:text-lg lg:text-xl'>"A performance review template is a valuable tool to help managers and human resources leaders objectively evaluate an employee's work performance." </h2> 
                <h3 className='text-lg text-left mt-9 font-semibold'>Elon Tucker</h3>
                < p className='text-md text-left'><i>Founder</i></p>
             </div>
        </div>
    </div>
  )
}

export default Testimonials