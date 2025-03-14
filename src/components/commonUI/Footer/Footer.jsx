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
    <div className=" mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      <div className="flex flex-col ">
        {/* <div className="py-4 px-4 w-full bg-green-500 "> */}
          <h2 className="text-2xl font-bold mb-3">
            <a href="#">
              <img src="/Images/Home/FooterLogo.png" alt="Logo" className="w-56" />
            </a>
          </h2>
          <p className="text-gray-300 text-sm w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Learn more
          </p>
          <h1 className='font-semibold mt-6'>OPENING HOURS</h1>
          <div className='mt-6 grid grid-cols-3 gap-4 text-sm'>
            <p className="text-gray-300 flex flex-col"><span>Monday - Friday</span> <span>8:00 AM to 9:00 PM</span> </p>
            <p className="text-gray-300 flex flex-col"><span>Saturday</span> <span>8:00 AM to 9:00 PM</span> </p>
            <p className="text-gray-300 flex flex-col"><span>Sunday</span> <span>CLOSED</span> </p>
          </div>
        {/* </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Logo and About Section */}
        

        {/* Important Links */}
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

        {/* Additional Links */}
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


        {/* Contact Info & Social Media */}
        {/* <div className="py-4 px-4 flex flex-col justify-between ">
          
          <div className="flex flex-col space-x-4 mb-4">
          <h1 className="text-xl font-bold mb-3">FOLLOW US</h1>
            <div className="flex flex-row space-y-4">
              {[FaTwitter, FaFacebookF, FaGooglePlusG].map((Icon, index) => (
                <a key={index} href="#" aria-label={Icon.name} className="text-3xl hover:text-primary">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
