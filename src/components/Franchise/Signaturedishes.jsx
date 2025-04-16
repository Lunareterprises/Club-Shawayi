"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function SignatureDishes() {
  return (
    <div className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      {/* Left Section */}
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-[#991B1B] leading-snug">
          Our Signature <br /> Dishes A Feast <br /> To Remember !
        </h2>
        <p className="text-gray-500 mt-4">
          A high-footfall, clean, and easily accessible location is recommended for maximum profitability
        </p>
        <button className="bg-[#991B1B] text-white px-6 py-2 mt-6 rounded-md font-semibold">
          Contact Now
        </button>
      </div>

      {/* Right Section - Cards */}
      <div className="flex gap-6 flex-wrap justify-center">
        {/* Card 1 */}
        <div className="bg-[#1E1E1E] text-white rounded-xl p-4 w-64 relative">
          <div className="w-24 h-24 mx-auto -mt-16">
            <Image
              src="/chicken1.png" // replace with actual path or URL
              alt="Shawayi Chicken"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <div className="absolute top-4 right-4 flex gap-1">
            <span className="text-yellow-400">★ ★ ★</span>
            <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full">Hot</span>
          </div>
          <h3 className="text-lg font-bold text-[#E63946] mt-6">Shawayi Chicken</h3>
          <p className="text-sm mt-2">
            Unrivaled taste&nbsp;&nbsp;with our <br /> unique masala!
          </p>
          <div className="flex justify-end mt-4 text-red-500">
            <FaHeart />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1E1E1E] text-white rounded-xl p-4 w-64 relative">
          <div className="w-24 h-24 mx-auto -mt-16">
            <Image
              src="/chicken2.png" // replace with actual path or URL
              alt="Shawayi Chicken"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <div className="absolute top-4 right-4 flex gap-1">
            <span className="text-yellow-400">★ ★ ★</span>
            <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full">Hot</span>
          </div>
          <h3 className="text-lg font-bold text-[#E63946] mt-6">Shawayi Chicken</h3>
          <p className="text-sm mt-2">
            Unrivaled taste&nbsp;&nbsp;with our <br /> unique masala!
          </p>
          <div className="flex justify-end mt-4 text-red-500">
            <FaHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
