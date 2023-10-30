import React from 'react';
import {BsFillWebcamFill} from 'react-icons/bs';

const Services = () => {
  return (
    <div className='w-[80%] mx-auto'>
         <div className='py-12 sm:py-20'>
            {/* top */}
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-16'>
               <div className='flex flex-col justify-center items-center gap-2 '>
                  <BsFillWebcamFill className='text-purple-500 text-[70px] sm:text-[100px]'></BsFillWebcamFill>
                  <h4 className='font-bold text-lg sm:text-xl '>Web Development Services</h4>
                  <p className='text-gray-600 text-sm sm:text-md md:w-[80%] lg:w-[90%] xl:w-[80%]  text-center'>Web development involves creating and maintaining websites and web applications. This service may include front-end development (HTML, CSS, JavaScript) and back-end development (server-side scripting, databases).</p>
               </div>

               <div className='flex flex-col justify-center items-center gap-2 '>
                  <BsFillWebcamFill className='text-purple-500 text-[70px] sm:text-[100px]'></BsFillWebcamFill>
                  <h4 className='font-bold text-lg sm:text-xl'>Mobile App Development</h4>
                  <p className='text-gray-600 text-sm sm:text-md md:w-[80%] lg:w-[90%] xl:w-[80%]  text-center'>This service focuses on creating applications for mobile devices, such as smartphones and tablets. Developers can build apps for iOS, Android, or and back-end development include front-end include front-end cross-platform solutions .</p>
               </div>

               <div className='flex flex-col justify-center items-center gap-2 '>
                  <BsFillWebcamFill className='text-purple-500 text-[70px] sm:text-[100px]'></BsFillWebcamFill>
                  <h4 className='font-bold text-lg sm:text-xl '>Cloud Computing Services</h4>
                  <p className='text-gray-600 text-sm sm:text-md md:w-[80%] lg:w-[90%] xl:w-[80%]  text-center'>Cloud services involve providing on-demand computing resources over the internet. These services can include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), including network security and Software as a Service (SaaS) offerings.</p>
               </div>

               <div className='flex flex-col justify-center items-center gap-2 '>
                  <BsFillWebcamFill className='text-purple-500 text-[70px] sm:text-[100px]'></BsFillWebcamFill>
                  <h4 className='font-bold text-lg sm:text-xl '>Cybersecurity Services</h4>
                  <p className='text-gray-600 text-sm sm:text-md md:w-[80%] lg:w-[90%] xl:w-[80%]  text-center'>With the increasing importance of online security, cybersecurity services are in high demand. These services encompass various aspects of protecting digital assets from threats, including network security, data protection, and threat detection.</p>
               </div>

               <div className='flex flex-col justify-center items-center gap-2 '>
                  <BsFillWebcamFill className='text-purple-500 text-[70px] sm:text-[100px]'></BsFillWebcamFill>
                  <h4 className='font-bold text-lg sm:text-xl '>Big Data Services</h4>
                  <p className='text-gray-600 text-sm sm:text-md md:w-[80%] lg:w-[90%] xl:w-[80%]  text-center'>Data analytics services involve extracting insights and value from large datasets. This includes data mining, machine learning, and business intelligence services. Big data services handle the storage, processing, and analysis of massive data volumes.</p>
               </div>

               <div className='flex flex-col justify-center items-center gap-2 '>
                  <BsFillWebcamFill className='text-purple-500 text-[70px] sm:text-[100px]'></BsFillWebcamFill>
                  <h4 className='font-bold text-lg sm:text-xl '>IT Consulting Services</h4>
                  <p className='text-gray-600 text-sm sm:text-md md:w-[80%] lg:w-[90%] xl:w-[80%]  text-center'>IT consultants offer advice and expertise on technology-related challenges. They help organizations make informed decisions about their IT infrastructure, software solutions, services handle the storage  and overall technology strategy.</p>
               </div>
            </div>
            {/* top */}

            {/* bottom */}

            {/* bottom */}
         </div>
    </div>
  )
}

export default Services