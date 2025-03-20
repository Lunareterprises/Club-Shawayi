import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP,  } from 'react-icons/fa';

const footerLinks = [
  { title: 'Menu', link: '/Home' },
  { title: 'About Us', link: '/ProductList?category=uniform' },
  { title: 'Contact Us', link: '/ProductList?category=t-shirt' },
  { title: 'Main Dishes', link: '/ProductList?category=cap' },
  
];

const footerLinksDishes = [
  { title: 'Shawayi', link: '/Home' },
  { title: 'Mandi Rice', link: '/ProductList?category=uniform' },
  { title: 'Ghee Rice', link: '/ProductList?category=t-shirt' },
  { title: 'Fresh Juices', link: '/ProductList?category=cap' },
  
];

const Footer = () => (
  <footer className="text-white mt-28 w-full py-10">
    <div className=" mx-auto px-4 lg:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      <div className="flex flex-col ">
          <h2 className="text-2xl font-bold mb-3">
            <a href="#">
              <img src="/Images/Home/logo.png" alt="Logo" className="w-56" />
            </a>
          </h2>
          <p className="text-gray-300 text-sm w-full md:w-1/2">
          C Club Shawayi, a proud venture of Red Crown International, brings you the finest flavors of shawayi, crafted with passion and authenticity. As part of the Red crown family, we are committed to delivering excellence in taste and service, ensuring every meal is a delightful experience.
          </p>
          <h1 className='font-semibold mt-6'>OPENING HOURS</h1>
          <div className='mt-6 grid grid-col-1 md:grid-cols-3 gap-4 text-sm'>
            <p className="text-gray-300 flex flex-col"><span>Monday - Friday</span> <span>8:00 AM to 9:00 PM</span> </p>
            <p className="text-gray-300 flex flex-col"><span>Saturday</span> <span>8:00 AM to 9:00 PM</span> </p>
            <p className="text-gray-300 flex flex-col"><span>Sunday</span> <span>CLOSED</span> </p>
          </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      
        <div className="py-4 px-4 ">
          <h1 className="text-md font-semibold mb-3">NAVIGATION</h1>
          <ul className="flex flex-col gap-3">
            {footerLinks.map(({ title, link }) => (
              <li key={title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                <a href={link} className='text-sm'>{title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-4 px-4 ">
          <h1 className="text-md font-semibold mb-3">DISHES</h1>
          <ul className="flex flex-col gap-3">
            {footerLinksDishes.map(({ title, link }) => (
              <li key={title} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                <a href={link} className='text-sm'>{title}</a>
              </li>
            ))}
          </ul>
        </div>


        <div className="py-4 px-4 ">
          <h1 className="text-md font-semibold mb-3">FOLLOW US</h1>
          <div className="flex flex-row gap-3">
            {[FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP].map((Icon, index) => (
                <a key={index} href="#" aria-label={Icon.name} className="text-xl hover:text-primary  p-3 bg-[#222222]">
                  <Icon />
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
