import React from 'react'
import Image from "next/image";

function CallNowSection() {
  return (
    <div className="px-6 md:px-20 lg:px-44  bg-transparent">
        <div className="relative bg-red-600 rounded-[72px] px-18 mt-28 flex items-center justify-between overflow-hidden">

            {/* Text and Button Section */}
            <div className="mt-10 mb-10">
            <div className="text-white ">
                <h2 className="text-[32px] font-semibold leading-snug w-[607px]">
                A Delicious Dish Prepared With Our <br />
                Unique Blend Of Spices
                </h2>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded-md shadow">
                Call Now
                </button>
            </div>
            </div>

            {/* Chicken Image */}
            <div className="flex mt-34 -ml-40 ">
            <Image
            src="/Images/Franchise/Chicken-img.png"
            alt="Roasted Chicken"
            width={300}
            height={300}
            className=" h-auto"
            />

            {/* Dots Image positioned at the bottom */}
            {/* <Image
            className="bg-amber-300"
            src="/Images/Franchise/frame299.png"
            alt="dots"
            width={25} 
            height={25} 
            /> */}


            </div>

        </div>
    </div>
  )
}

export default CallNowSection
