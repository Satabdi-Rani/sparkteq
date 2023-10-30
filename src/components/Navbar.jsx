// import React from 'react';
// import banner from '../assets/banner.jpeg';

const Navbar = () => {
    return (
        <div className="w-full bg-[#EEE3F1]">
            
            <div className="grid grid-cols-3 pt-6 w-[80%] mx-auto pb-4">

                <div>
                   <h4 className="text-2xl font-bold">Sparkteq</h4>
                </div>
                <div>
                    <ul className="hidden sm:flex flex-row gap-4 mt-2 text-lg justify-center">
                       <li>Home</li>
                       <li>Services</li>
                       <li>About</li>
                       <li>Testimonials</li>
                       <li>Clients</li>
                       <li>Contact</li>
                    </ul>
                </div>
                <div className="flex flex-row gap-4 justify-end">
                   <button className="px-4 py-2 text-md bg-purple-600 rounded text-white ">LogIn</button>
                   <button className="px-4 py-2 text-md bg-purple-600 rounded text-white">Signup</button>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;