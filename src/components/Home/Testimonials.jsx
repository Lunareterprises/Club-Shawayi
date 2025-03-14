"use client"; // Ensure it's a client component

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa"; // Import star icon

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      subhead: "johndoe@gmail.com",
      review: "This product is amazing! I highly recommend it.",
      image: "/Images/Home/testinomial1.png",
      rating: 5,
    },
    {
      name: "Jane Smith",
      subhead: "johndoe@gmail.com",
      review: "Fantastic service and support. Would buy again!",
      image: "/Images/Home/testinomial2.png",
      rating: 4,
    },
    {
      name: "Michael Brown",
      subhead: "johndoe@gmail.com",
      review: "Absolutely wonderful experience, five stars!",
      image: "/Images/Home/testinomial3.png",
      rating: 3,
    },
    {
      name: "Emily Johnson",
      subhead: "johndoe@gmail.com",
      review: "A great experience from start to finish!",
      image: "/Images/Home/testinomial1.png",
      rating: 4,
    },
  
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative  overflow-visible">
      <div className="bg-[#d42d21] h-72 p-6 relative flex flex-col items-center overflow-visible">
        <h2 className="text-center text-xl font-bold text-white">Testimonials</h2>
        <p className="text-center text-sm font-normal text-gray-200 mt-2 ">
          Discover the stories and experiences of our delighted guests
        </p>
        <div className="absolute bottom-[-100px] w-full max-w-6xl mx-auto px-4 overflow-visible">
          <Slider {...settings} className="gap-10 custom-dots overflow-visible ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-5 overflow-visible">
                <div className="relative bg-white shadow-lg p-6 text-center  mt-14 overflow-visible">
                  {/* Image Positioned Half Inside & Half Outside the Card */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full  shadow-lg"
                    />
                  </div>
                  <div className="mt-12 h-32">
                    {/* Star Ratings */}
                    <div className="flex justify-center mt-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`text-yellow-400 ${i < testimonial.rating ? "opacity-100" : "opacity-30"}`} />
                      ))}
                    </div>

                    {/* Name (Head) */}
                    <h4 className="text-lg font-semibold mt-2 text-[#D42D21]">{testimonial.name}</h4>

                    {/* Subhead */}
                    <p className="text-xs text-gray-500">{testimonial.subhead}</p>

                    {/* Description */}
                    <p className="text-gray-800 text-sm mt-2">"{testimonial.review}"</p>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
