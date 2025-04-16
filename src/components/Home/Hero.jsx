import React from "react";
import Image from "next/image";
import FranchiseForm from "./FranchiseForm";
import Header from "../commonUI/Header/Header";

function Hero({ overrideHeader }) {
  return (
    <div>
      {overrideHeader ? <Header /> : <Header />}
      <div
        className="w-full h-auto lg:h-[125vh] flex flex-col lg:flex-row justify-between  items-center   bg-cover bg-center relative px-2 lg:px-32"
        style={{
          backgroundImage: "url('/images/Home/HomeHero2.png')",
        }}
        >

        <div className="absolute inset-0 bg-black opacity-60 z-0" />

        <div className="relative z-10 flex flex-col items-center text-white text-center mt-36 lg:mt-12 xl:ml-10">
        <Image
            src="/Images/Home/HomeHero1.png"
            alt="bg"
            width={200}
            height={200}
            className="w-[150px] h-auto md:w-[200px] xl:w-[250px]"
          />
          <p className="text-2xl lg:text-3xl xl:text-5xl font-[600] whitespace-nowrap">A DELICIOUS</p>
          <p className="text-5xl lg:text-7xl xl:text-9xl font-bold">DISH</p>
          <p className="text-xl lg:text-2xl xl:text-4xl font-[600] whitespace-nowrap">PREPARED WITH</p>
          <p className="text-2xl lg:text-3xl xl:text-5xl font-[600] whitespace-nowrap">OUR UNIQUE</p>
          <p className="text-xl lg:text-2xl xl:text-4xl font-[600] whitespace-nowrap">BLEND OF SPICES</p>
        </div>
        <div className="mt-20 relative z-10 ">
          <FranchiseForm />
        </div>
      </div>
    </div>
  );
}

export default Hero;
