"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const UpcomingFranchise = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await fetch("/data/openshorlydata.json");
        if (!response.ok) {
          throw new Error("Failed to load carousel data.");
        }
        const data = await response.json();
        setSlides(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCarouselData();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div className="relative w-full mx-auto py-8">
      <h1 className="text-white mt-10  text-xl md:text-4xl font-[800] text-start whitespace-nowrap px-6 lg:px-32">
        Upcoming Franchise
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        slidesPerView={1}
        speed={1000} 
        spaceBetween={20}
        breakpoints={{
            320: { slidesPerView: 1 },  
            480: { slidesPerView: 1 },  
            640: { slidesPerView: 2 },  
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
            1280: { slidesPerView: 4 },
          }}
        className="w-full h-[500px] mt-6"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="bg-white shadow-lg overflow-hidden h-auto md:h-[500px]">
              <div className="w-full h-56 relative">
                <Image
                  src={slide.image}
                  alt={slide.mainHead}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-gray-900 text-start p-6 mt-4 flex flex-col gap-2">
                <div className="flex justify-between items-center mt-2">
                  <h3 className="text-base font-medium">{slide.subHead}</h3>
                  <span className="text-gray-900 text-lg">⭐ {slide.rating}</span>
                </div>
                <h2 className="text-2xl font-bold">{slide.mainHead}</h2>
                <p className="mt-2 text-[14px]">{slide.description}</p>

                {/* Contact Section */}
                <div className="flex flex-col lg:flex-row items-center justify-start gap-10 mt-4">
                  <a
                    href={slide.contactLink}
                    className="px-6 py-2 bg-transparent whitespace-nowrap text-gray-900 border border-black font-medium text-base hover:bg-gray-100 transition"
                  >
                    Contact Us
                  </a>
                  <span className="text-sm text-gray-700">{slide.phone}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpcomingFranchise;
