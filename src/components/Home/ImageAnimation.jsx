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
    <div className="flex flex-row md:flex-row justify-center items-center w-full h-auto md:h-96 overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="relative flex-grow transition-all overflow-hidden"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            flexGrow: hoveredIndex === null ? 1 : hoveredIndex === index ? 3 : 0.5, 
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            height: "100%", // Ensures the parent div maintains height
            minHeight: "12rem", // Prevents collapsing on smaller screens
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.img
            src={src}
            className="object-cover transition-all w-full h-48 md:h-full"
            animate={{
              scale: hoveredIndex === index ? 1.5 : 1, 
            }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageAnimation;
