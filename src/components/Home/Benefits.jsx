"use client"; // Ensures this component runs as a Client Component

import Image from "next/image";
import React, { useState } from "react";

const benefitsData = [
  {
    id: 1,
    imageUrl: "/Images/Home/benefit1.png",
    description: "Best Investment & Profit Safty",
  },
  {
    id: 2,
    imageUrl: "/Images/Home/benefit2.png",
    description: "Very Small Investment",
  },
  {
    id: 3,
    imageUrl: "/Images/Home/benefit3.png",
    description: "Operational Expense",
  },
  {
    id: 4,
    imageUrl: "/Images/Home/benefit4.png",
    description: "Get Faster ROI",
  },
  ,
  {
    id: 5,
    imageUrl: "/Images/Home/benefit5.png",
    description: "Quick Breakeven",
  },
  ,
  {
    id: 6,
    imageUrl: "/Images/Home/benefit6.png",
    description: "Marketing & Social media Support",
  },
];

function Benefits() {
  return (
    <div className="bg-white text-gray-950 flex flex-col items-center justify-center py-10 px-10 lg:px-32 ">
      <h1 className="font-bold text-4xl text-center mb-6">
        BENEFITS OF C CLUB SHAWAYI FRANCHISE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full ">
        {benefitsData.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </div>
  );
}

const BenefitCard = ({ benefit }) => {
  const [imgSrc, setImgSrc] = useState(benefit.imageUrl);

  return (
    <div className="bg-[#D42D21] p-6 flex flex-row items-center gap-6 rounded-lg">
      <Image
        src={imgSrc}
        width={40}
        height={100}
        alt={benefit.description}
        className="mb-4"
        onError={() => setImgSrc("/images/placeholder.png")} // Set fallback image on error
      />
      <p className="text-white text-center text-xl font-normal">{benefit.description}</p>
    </div>
  );
};

export default Benefits;
