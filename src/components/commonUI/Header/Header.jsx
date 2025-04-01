"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaEnvelope, FaPhoneSquare, FaTwitter, FaFacebook,FaInstagram, FaYoutube } from "react-icons/fa";

const MENU_ITEMS = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/" },
  { id: 3, name: "Menu", link: "/" },
  { id: 4, name: "Contact Us", link: "/" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isFranchisePage = pathname === "/Franchise";

  return (
    <header 
    className="absolute top-0 left-0 w-full z-10"
      // className={`z-40 relative transition-all duration-300 ${
      //   isFranchisePage ? "bg-transparent" : "bg-transparent"
      // }`}
    >
      <div className=" bg-transparent px-10 lg:px-32  py-5" >
        <div className="flex justify-between gap-3 mb-6 ">
          <div className="flex gap-3 text-sm">
            <p className=" flex items-center gap-2"><FaPhoneSquare />+1 0000000000  </p>
            <p className=" flex items-center gap-2"><FaEnvelope />cclubshawayi.1221@.com </p>
          </div>
          <div className="flex gap-12 items-center text-xl">
            <FaFacebook /> 
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div className="container flex justify-end items-center gap-10 sm:gap-3 ">
          {/* <a href="#" className="font-bold text-2xl sm:text-3xl text-gray-600">
            <Image src="/Images/Home/logo.png" alt="Logo" width={223.51} height={45} />
          </a> */}

          <button
            className="text-white text-2xl sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden sm:flex">
            <ul className="flex items-center md:gap-8 lg:gap-16 xl:gap-28">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="text-white hover:font-semibold transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-white p-4 absolute w-full left-0 top-16 z-50">
          <ul className="flex flex-col gap-4 text-black">
            {MENU_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="block p-2 hover:font-semibold rounded">
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
