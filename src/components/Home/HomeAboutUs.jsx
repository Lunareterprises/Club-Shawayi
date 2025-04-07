"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../commonUI/Buttons/Button";
import { FaArrowRight } from "react-icons/fa";

function HomeAboutUs() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("/data/about.json"); // Ensure the path is correct
        
        if (!response.ok) {
          throw new Error("Failed to fetch image data");
        }

        const data = await response.json();

        // Check if the image URL exists in the response
        if (data && data.imageUrl) {
          setImageUrl(data.imageUrl);
        } else {
          throw new Error("Image URL is missing in the response");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  const handleImageError = () => {
    setError("Image failed to load");
  };

  return (
    <div className="relative py-12 px-10 lg:px-32 bg-[#d42d21] flex flex-col justify-center md:justify-between md:flex-row">
      <div>
        <Button label="Our outlets" className="bg-white px-4 py-2 text-gray-950 rounded-lg" />
        {/* Loading State */}
        {loading && <div className="text-white">Loading image...</div>}

        {/* Error State */}
        {error && <div className="text-white">{error}</div>}

        {/* Image Rendering */}
        {imageUrl && !loading && !error ? (
          <Image
            src={imageUrl}
            alt="Image under button"
            width={400}  
            height={400} 
            onError={handleImageError} 
            className="mt-4" 
          />
        ) : null}
      </div>
      <div className="w-full  md:w-1/2 flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-[#1F1F1F]">About Us</h1>
        <p className="text-xl font-bold text-[#1F1F1F]">C Club Shawayi</p>
        <p className="text-[12px] lg:text-sm font-bold text-white">Bangalore’s Favorite Masala Shawayi Brand is Expanding!</p>
        <p className="text-[12px] lg:text-sm font-normal text-white">Do you dream of running a successful restaurant?
        C CLUB SHAWAYI, Bangalore’s go-to Masala shawayi brand, is now offering franchise opportunities across india! With our secret masala and a proven business model, success is guaranteed. join us and bring the taste of authentic flavors to your city!</p>
        <p className="text-[12px] lg:text-sm font-normal text-white">With Expert Training, end - to - end operational support, and a strong brand presence, we guarantee a hassle - free and profitable business model. Our structured partnership system, high - profit margins, and strict quality control make C CLUB SHAWAYI the perfect choice for a spring restaurant. join us and be part of a thriving legacy!</p>
        <p className="text-[12px] lg:text-sm font-normal text-white">C CLUB SHAWAYI is not just a restaurant -- it’s a brand built on authentic flavors, proven business strategies, and an unbreakable commitment to quality. our secret masala blend ensure an unmatched taste that keeps customers coming back for more.</p>
      </div>
    </div>
  );
}

export default HomeAboutUs;
