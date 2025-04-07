"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa"; 
import Button from "../commonUI/Buttons/Button";

function RunningFranchise() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [playing, setPlaying] = useState(null);
  const videoRefs = useRef({});
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/data/videos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch videos.");
        }
        return response.json();
      })
      .then((data) => setVideos(data))
      .catch((err) => setError(err.message));
  }, []);

  const togglePlayPause = (videoId) => {
    const video = videoRefs.current[videoId];

    if (!video) return;

    if (playing === videoId) {
      video.pause();
      setPlaying(null);
    } else {
      Object.values(videoRefs.current).forEach((vid) => vid.pause());
      video.play();
      setPlaying(videoId);
    }
  };

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="px-6 lg:px-32 mx-auto relative">
      <h1 className="text-white mt-10 text-xl md:text-4xl font-[800] text-start whitespace-nowrap">
        Running Franchises
      </h1>

      {/* Navigation Buttons */}
      <Button
        label="❮"
        className="absolute left-0 lg:left-16 top-1/2 transform -translate-y-1/2 z-10 border border-white text-white px-4 py-2 rounded-full hover:bg-gray-600"
        onClick={() => swiperRef.current?.slidePrev()}
      />
        
      

      <Button
        label="❯"
        className="absolute right-0 lg:right-16 top-1/2 transform -translate-y-1/2 z-10 border border-white text-white px-4 py-2 rounded-full hover:bg-gray-600"
        onClick={() => swiperRef.current?.slideNext()}
      />
        
     

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3.5}
        spaceBetween={20}
        breakpoints={{
          1024: { slidesPerView: 2.5 },
          768: { slidesPerView: 2.5 },
          640: { slidesPerView: 1.5 },
          320: { slidesPerView: 1 },
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Navigation]}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative">
              {/* Video Element */}
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.url}
                className="w-full h-80 object-cover cursor-pointer mt-6"
                onClick={() => togglePlayPause(video.id)} // Click to play/pause
              />

              {/* Play Button Overlay */}
              {playing !== video.id && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-lg"
                  onClick={() => togglePlayPause(video.id)}
                >
                  <FaRegPlayCircle size={50} />
                </button>
              )}

              {/* Overlay Content */}
              <div className="flex flex-col gap-2 absolute bottom-0 w-full bg-black/70 bg-opacity-40 p-2 text-white text-sm text-center">
                <div className="flex justify-between">
                  <p>{video.subTitle}</p>
                  <p className="text-yellow-400">⭐ {video.rating}</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">{video.title}</h1>
                  <p className="text-gray-300">{video.phone}</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <Image
                    width={30}
                    height={100}
                    src={video.img}
                    alt={video.name}
                    className="rounded-full border border-white"
                  />
                  <p>{video.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RunningFranchise;
