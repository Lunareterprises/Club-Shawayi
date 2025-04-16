import React from "react";
import { Montez } from "next/font/google"; 
import Image from "next/image";
import Header from "../commonUI/Header/Header";


const montez = Montez({
  subsets: ["latin"],
  weight: "400",
});

function FranchiseHero({overrideHeader}) {
  return (
    <div>
      {overrideHeader ? <Header /> : <Header />}
    
    <div className="flex flex-col justify-center items-center  lg:mt-0 h-auto lg:h-screen bg-black  ">
      
      <h1 className="font-bold text-white text-3xl md:text-5px lg:text-7xl text-center leading-normal lg:leading-22 mt-40 lg:mt-20">
        Join the <span className="text-[#D42D21]">Masala <br /> Shawayi</span> Revolution..!
      </h1>
      <div className="flex text-sm lg:text-xl flex-col items-center gap-2 mt-3">
        <p className=" text-center text-white">Mon-Sun: 11 AM-11 PM</p>
        <p className=" text-center  text-white">Bangalore, India</p>
      </div>
      <p className={` text-white text-2xl lg:text-5xl text-center mt-10 lg:mt-18 ${montez.className}`}>
        The C Club Shawayi <span className="text-[#D42D21]">Franchise</span> Opportunity
      </p>
      <div className="mt-12 border-2 border-[#D42D21] rounded-full p-4 animate-blink-move-circle">
        <Image 
          src="/Images/Franchise/Component.png" 
          alt="arrow" 
          className="animate-blink-move" 
          width={15} 
          height={100}
        />
      </div>
    </div>
    </div>
  );
}

export default FranchiseHero;
