import React from 'react' 
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import {Link} from 'react-scroll';


const Footer = () => {
  return (
    <div className='bg-purple-100 py-20'>
        <div className='w-[80%] mx-auto'>
            <img src="" alt="" />
            <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
                <div>
                    <h4 className='font-bold text-xl'>Contact</h4> 
                    <h4 className='text-lg mt-3'>Email: info@sparkteq.com</h4>
                    <p className='text-md'>Call: +0097237647236</p>
                </div>

                <div>
                    <ul className='grid grid-cols-1 sm:grid-col-1 gap-1 my-8 sm:mt-0  md:ml-8 lg:ml-16 text-lg font-semibold'>
                       <li><Link to="home" smooth={true} duration={500}><a href="">Home</a></Link></li>
                       <li><Link to="services" smooth={true} duration={500}><a href="">Services</a></Link></li>
                       <li><Link to="about" smooth={true} duration={500}><a href="">About</a></Link></li>
                       <li><Link to="testimonials" smooth={true} duration={500}><a href="">Testimonials</a></Link></li>
                       <li><Link to="clients" smooth={true} duration={500}><a href="">Clients</a></Link></li>
                       
                    </ul>
                </div>

                <div className=''>
                    <h3 className='font-bold text-xl'>Follow</h3>
                    <p className='text-md mt-2'>Sign up to get the latest news on our product.</p>
                    <div className='flex flex-row'>
                       <input className='border h-[40px] w-[60%] sm:w-full rounded border-r-none mt-4 pl-2' type="email" name="" id=""  placeholder='Email'/>  
                       <button className='px-4 py-2 text-md bg-purple-600 rounded text-white mt-4'>Subscribe</button>
                    </div>
                </div>

                <div>
                    
                    <ul className='flex flex-row gap-6 text-purple-900 sm:ml-16 mt-12 '>
                        <BsFacebook className='text-4xl  lg:text-6xl sm:hidden lg:block' />
                        <AiFillTwitterCircle className='text-4xl lg:text-6xl sm:hidden lg:block' />
                        <AiFillLinkedin className='text-4xl lg:text-6xl sm:hidden lg:block' />
                        <AiFillYoutube className='text-4xl lg:text-6xl sm:hidden lg:block' />
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer