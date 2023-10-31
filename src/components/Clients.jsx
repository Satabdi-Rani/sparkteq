import React from 'react'
import clientBG from '../assets/clientBG.png';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';

const Clients = () => {
  return (
    <div name='clients' style={{backgroundImage: `url(${clientBG})`}} className='client shadow-lg mt-12 sm:mt-20 md:block'>
         <div className='w-[80%] mx-auto'>
            <h1 className='text-4xl sm:text-5xl xl:text-7xl font-bold text-purple-600 text-center mb-9'>Our Clients</h1>
            <div >
                <ul className='grid grid-cols-3 gap-y-5 md:grid-cols-5 justify-center items-center'>
                    <li><img src={client1} alt="" className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[130px] animate-fade-in' /></li>
                    <li><img src={client2} alt="" className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[130px] animate-fade-in' /></li>
                    <li><img src={client1} alt="" className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[130px] animate-fade-in' /></li>
                    <li><img src={client2} alt="" className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[130px] animate-fade-in' /></li>
                    <li><img src={client1} alt="" className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[130px] animate-fade-in' /></li>
                </ul> 
            </div>
         </div>
    </div>
  )
}

export default Clients