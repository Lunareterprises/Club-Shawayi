import React from "react";
import Button from "../commonUI/Buttons/Button";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-[#D42D21] w-full h-[400px] md:h-[400px]  flex flex-col  justify-center items-center text-center px-4">
      {/* <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap">
        A DELICIOUS DISH
      </h1>
      <h3 className="text-white text-xl sm:text-3xl  font-medium">
        PREPARED WITH OUR UNIQUE BLEND OF SPICES.
      </h3> */}
      <Image src="/Images/Home/heroText.svg" alt="img" width={900} height={100} />
      <Button
        label="Contact Us"
        className="bg-white text-[#D42D21] font-semibold py-2 px-6 sm:px-10  mt-16 text-lg sm:text-lg"
      />
    </div>
  );
}

export default Hero;