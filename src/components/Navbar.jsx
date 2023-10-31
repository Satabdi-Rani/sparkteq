// import React from 'react';
import React, {useState} from 'react';
import {FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () =>setNav(!nav)

    return (
        <div name='home' className="w-full bg-[#EEE3F1]">
            
            <div className="grid grid-cols-3 pt-6 w-[80%] mx-auto pb-4">

                <div>
                   <h4 className="text-2xl font-bold">Sparkteq</h4>
                </div>

                {/* Large device Menu */}
                <div>
                    <ul className="hidden sm:flex flex-row gap-4 mt-2 text-lg justify-center">
                       <li><Link to="home" smooth={true} duration={500}><a href="">Home</a></Link></li>
                       <li><Link to="services" smooth={true} duration={500}><a href="">Services</a></Link></li>
                       <li><Link to="about" smooth={true} duration={500}><a href="">About</a></Link></li>
                       <li><Link to="testimonials" smooth={true} duration={500}><a href="">Testimonials</a></Link></li>
                       <li><Link to="" smooth={true} duration={500}><a href="">Clients</a></Link></li>
                    </ul>
                </div>

                {/* Hamburger MEnu */}
            <div onClick={handleClick} className='md:hidden z-10 absolute right-12 top-8'>
               {!nav? <FaBars /> : <FaTimes /> }
            </div>

            {/* Mobile Menu */}
                <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'><Link onClick={handleClick}  to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick}  to="services" smooth={true} duration={500}>Services</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick}  to="about" smooth={true} duration={500}>About</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick}  to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick}  to="clients" smooth={true} duration={500}>Clients</Link></li>
                </ul>

                <div className="flex flex-row gap-4 justify-end hidden lg:ml-28 lg:block">
                   <button className="px-4 py-2 text-md bg-purple-600 rounded text-white ">LogIn</button>
                   <button className="px-4 py-2 text-md bg-purple-600 rounded text-white lg:ml-6">Signup</button>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;