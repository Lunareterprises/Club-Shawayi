import React from 'react';

export default function DetailPoint({ detail, index }) {
  const positions = [
    "top-8 left-0 md:-left-32",   // Parking
    "top-8 right-0 md:-right-32", // Rent
    "bottom-8 left-0 md:-left-48", // Location
    "bottom-8 right-0 md:-right-48" // Investment
  ];

  const dotPositions = [
    "top-1/4 left-1/4",
    "top-1/4 right-1/4",
    "bottom-1/4 left-1/4",
    "bottom-1/4 right-1/4"
  ];

  return (
    <>
      {/* Connection dot */}
      <div className={`absolute w-3 h-3 bg-black rounded-full ${dotPositions[index]}`}></div>

      {/* Detail box */}
      <div className={`absolute ${positions[index]} w-48 transition-all duration-300`}>
        <h3 className="text-red-700 font-semibold text-lg md:text-xl">{detail.title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{detail.description}</p>
      </div>
    </>
  );
}
