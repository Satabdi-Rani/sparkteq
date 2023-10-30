import React from 'react'

const Count = () => {
  return (
    <div className='bg-[#16163F] '>
        <div className='w-[80%] mx-auto py-24 text-white '>
            <h1 className='text-3xl sm:text-5xl text-center font-bold mb-12 sm:mb-20 animate-slide-in'>We're Good with Numbers</h1>
            <div className='grid grid-col-1 sm:grid-cols-4 gap-10 sm:gap-2 '>
                <div className='flex flex-col items-center gap-2 sm:gap-4 animate-slide-in'>
                    <h1 className='text-6xl sm:text-5xl  lg:text-7xl font-bold'>15</h1>
                    <p className='text-md sm:text-md lg:text-xl xl:text-2xl'>Years of Experience</p>
                </div>

                <div className='flex flex-col items-center gap-4 animate-slide-in'>
                    <h1 className='text-6xl sm:text-5xl lg:text-7xl font-bold'>36</h1>
                    <p className='text-md sm:text-md lg:text-xl xl:text-2xl'>Qualified Experts</p>
                </div>

                <div className='flex flex-col items-center gap-4 animate-slide-in'>
                    <h1 className='text-6xl sm:text-5xl lg:text-7xl font-bold'>120</h1>
                    <p className='text-md sm:text-md lg:text-xl xl:text-2xl'>Clients Every Year</p>
                </div>

                <div className='flex flex-col items-center gap-4 animate-slide-in'>
                    <h1 className='text-6xl sm:text-5xl lg:text-7xl font-bold'>9</h1>
                    <p className='text-md sm:text-md lg:text-xl xl:text-2xl'>Intl. Partners</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Count