"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/Images/Home/motion1.jpg",
  "/Images/Home/motion2.jpg",
  "/Images/Home/motion3.jpg",
  "/Images/Home/motion4.jpg",
];

const ImageAnimation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-row justify-center items-center w-full h-auto md:h-96 overflow-hidden">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          className="object-cover transition-all"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            width: hoveredIndex === null ? "100%" : hoveredIndex === index ? "80%" : "20%",
          }}
          initial={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          style={{
            height: "auto", 
            maxHeight: "100%", 
            flexGrow: 1, 
          }}
        />
      ))}
    </div>
  );
};

export default ImageAnimation;
