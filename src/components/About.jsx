import React from 'react'
import aboutImage from '../assets/AboutImage.jpg';

const About = () => {
  return (
    <div name='about' className='py-20 sm:py-32'>
        <div className='w-[80%] mx-auto grid grid-col sm:grid-cols-2  md:grid-cols-2'> 
            <div className='flex flex-col gap-2'>
                <h4 className='text-lg font-bold text-purple-600 text-center sm:text-left'>ABOUT</h4>
                <h2 className='text-3xl sm:text-5xl font-semibold text-center sm:text-left '>Our Experts Are the Finest</h2>
                <p className='text-lg text-justify my-4 sm:mr-6'> Our team of experts is renowned for their exceptional skills and expertise. We take great pride in the fact that our experts are among the finest in their respective fields. Their dedication to their craft, commitment to continuous learning, and unwavering passion for what they do set them apart. Whether it's in the realm of technology, science, business, or any other discipline, our experts consistently demonstrate their ability to tackle complex challenges and deliver innovative solutions. </p>
                 <p className='text-lg text-justify sm:mr-6'> Moreover, our experts are not only knowledgeable but also deeply committed to the success of our clients and partners. They approach each task with a customer-centric mindset, ensuring that the solutions they provide are not only of the highest quality but also tailored to meet the unique needs and goals of our clients. The combination of their technical prowess, dedication, and client-focused approach makes our experts an invaluable asset, and we are proud to have them as part of our team.</p>
            </div>

            <div className='flex justify-center '>
                <img className='w-[300px] h-[300px] sm:w-[600px] sm:h-[400px] sm:ml-32 mt-8 box-shadow shadow-lg' src={aboutImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About