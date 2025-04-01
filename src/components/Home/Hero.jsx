import React from "react";
import Image from "next/image";
import FranchiseForm from "./FranchiseForm";
import Header from "../commonUI/Header/Header";

function Hero({ overrideHeader }) {
  return (
    <div>
      {overrideHeader ? <Header /> : <Header />}
      <div
        className="w-full h-[400px] md:h-[125vh] flex flex-col md:flex-row justify-between  items-center  bg-cover bg-center relative px-10 lg:px-32"
        style={{
          backgroundImage: "url('/images/Home/HomeHero2.png')",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0" />

        <div className="relative z-10 flex flex-col items-center text-center mt-12 ml-10">
          <Image src="/Images/Home/HomeHero1.png" width={200} height={200} alt="bg" />
          <p className="text-5xl font-[600]">A DELICIOUS</p>
          <p className="text-9xl font-bold">DISH</p>
          <p className="text-4xl font-[600]">PREPARED WITH</p>
          <p className="text-5xl font-[600]">OUR UNIQUE</p>
          <p className="text-4xl font-[600]">BLEND OF SPICES</p>
        </div>
        <div className="mt-12 relative z-10 ">
          <FranchiseForm />
        </div>
      </div>
    </div>
  );
}

export default Hero;
