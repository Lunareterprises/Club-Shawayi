"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

function RunningFranchisephotos() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/data/photos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => {
        if (!jsonData || !jsonData.franchisePhotos) {
          throw new Error("Invalid data format");
        }
        setData(jsonData.franchisePhotos);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="relative px-6 lg:px-32 ">
      <h2 className="text-center text-2xl font-semibold mb-4">Franchise Photos</h2>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : data.length === 0 ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button className="absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10" id="prevBtn">
            <FaChevronLeft size={20} />
          </button>
          <button className="absolute right-0 lg:-right-16 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10" id="nextBtn">
            <FaChevronRight size={20} />
          </button>

          <Swiper
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full mx-auto"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => {
                    setSelectedImages(item.images);
                    setIsOpen(true);
                  }}
                >
                  <div className="relative">
                    <Image
                        width={250} // Optional, only needed if using Next.js optimization
                        height={100}
                        src={item.images[0]}
                        alt="Thumbnail"
                        className="w-full h-64 object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                  {/* Number of Photos Overlay */}
                  <div className="absolute top-2 right-0 bg-black/70 bg-opacity-70 text-white px-2 py-1  text-sm">
                    {item.images.length} Photos
                  </div>
                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 bg-opacity-50 text-white text-start flex flex-col p-2">
                    <p>{item.subTitle}</p>
                    <p className="text-base font-semibold">{item.title}</p>
                    <div className="flex justify-start items-center gap-3">
                        <Image
                        width={30}
                        height={100}
                        src={item.img}
                        alt={item.name}
                        className="rounded-full border border-white"
                        />
                        <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Lightbox */}
      {isOpen && selectedImages && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold p-2"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <Swiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full md:w-3/4 lg:w-1/2"
          >
            {selectedImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default RunningFranchisephotos;
