"use client"
import React, { useState }  from 'react';
import Image from 'next/image';

import {  FaBars, FaTimes } from 'react-icons/fa';

const MENU_ITEMS = [
  { id: 1, name: 'Home', link: '/'} ,
   { id: 2, name: 'About Us', link: '/' },
    {id: 3, name: 'Menu', link: '/' },
   { id: 4, name: 'Contact Us', link: '/'} 
  
  
];



const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="shadow-none bg-white z-40 relative">
      <div className="bg-[#D42D21] px-10 lg:px-30 py-5 ">
        <div className="container flex justify-between items-center gap-10 sm:gap-3">
          <a href="#" className="font-bold text-2xl sm:text-3xl text-gray-600">
            <Image src="/Images/Home/logo.png" alt="Logo" width={223.51} height={45}  />

          </a>
     


          <button
            className="text-white text-2xl sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden sm:flex">
            <ul className="flex items-center gap-24">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="text-white hover:text-yellow-800 transition">
                    {item.name}
                  </a>
                </li>
              ))}
              
             
            </ul>
          </nav>


          
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-white  p-4 absolute w-full left-0 top-16 z-50">
          <ul className="flex flex-col gap-4 text-black ">
            {MENU_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="block p-2 hover:text-yellow-800 rounded">
                  {item.name}
                </a>
              </li>
            ))}
            
            
          </ul>
        </div>
      )}


    </header>
  );
};

export default Header;
