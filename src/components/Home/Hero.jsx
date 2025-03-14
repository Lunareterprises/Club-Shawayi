import React from "react";
import Button from "../commonUI/Buttons/Button";

function Hero() {
  return (
    <div className="bg-[#D42D21] w-full h-[400px] md:h-[400px]  flex flex-col gap-4 md:gap-6 justify-center items-center text-center px-4">
      <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        We Proudly Serve the Finest Food,
      </h1>
      <h3 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
        Crafted with care. Just for you, every time.
      </h3>
      <Button
        label="Contact Us"
        className="bg-white text-[#D42D21] font-semibold py-2 px-6 sm:px-10 mt-2 text-lg sm:text-lg"
      />
    </div>
  );
}

export default Hero;
