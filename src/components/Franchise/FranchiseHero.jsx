import React from "react";
import { Montez } from "next/font/google"; 
import Image from "next/image";

const montez = Montez({
  subsets: ["latin"],
  weight: "400",
});

function FranchiseHero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-[72px] text-center leading-22">
        Join the <span className="text-[#D42D21]">Masala <br /> Shawayi</span> Revolution..!
      </h1>
      <div className="flex flex-col items-center gap-2 mt-3">
        <p className="text-xl text-center">Mon-Sun: 11 AM-11 PM</p>
        <p className="text-xl text-center">Bangalore, India</p>
      </div>
      <p className={`text-5xl text-center mt-18 ${montez.className}`}>
        The C Club Shawayi <span className="text-[#D42D21]">Franchise</span> Opportunity
      </p>
      <div className="mt-12">
        <Image src="/Images/Franchise/Component.png" alt="arrow" className="border border-[#D42D21] rounded-full p-4 " width={50} height={100}/>
      </div>
    </div>
  );
}

export default FranchiseHero;
