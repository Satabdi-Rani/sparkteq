// import React from 'react';
import banner from '../assets/banner.jpeg';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`}} className='w-full h-[40%] md:block content-div shadow-lg  rounded-md pt-12 sm:pt-24 mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[#222249] text-4xl md:text-5xl lg:text-6xl font-extrabold text-center'>The Power of Technology</h1>
                <h4 className='text-purple-600 text-md sm:text-lg font-medium w-[90%] md:w-[70%] lg:w-[50%] mx-auto text-center mt-6'>Technology empowers us to innovate, communicate, and navigate the complexities of the modern age</h4>
                <button className='px-4 py-2 text-md bg-purple-600 rounded text-white mt-4'>Know More</button>
            </div>
        </div>
    );
};

export default Banner; 