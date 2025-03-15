import Image from "next/image";
import Button from "../commonUI/Buttons/Button";
import { FaArrowRight } from "react-icons/fa";

function HomeAboutUs() {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-12">
      <Image
        src="/Images/Home/Group23.png"
        className="absolute  bottom-0 right-5  md:right-20 lg:right-10 xl:right-80 w-48  md:w-56 lg:w-68 xl:w-96 "
        alt="vector4"
        width={350}
        height={100}
      />
      <Image
        src="/Images/Home/Group2.png"
        className="absolute bottom-0 left-5 sm:left-16 md:left-32 lg:left-10 xl:left-42 w-14 sm:w-24 "
        alt="vector1"
        width={100}
        height={100}
      />
      <Image
        src="/Images/Home/Group31.png"
        className="absolute top-0 left-[-20px] sm:left-[-30px] md:left-[-50px] w-[300px] sm:w-[500px]   "
        alt="vector3"
        width={550}
        height={350}
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 my-16 md:my-28 relative">
        <div className="relative w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
          <Image
            src="/Images/Home/AboutUsimge.jpg"
            alt="About Us"
            className="relative rounded-tl-[60px] rounded-bl-[40px] shadow-lg w-full object-cover h-[400px] md:h-[500px]"
            width={500}
            height={10}
          />

          <div className="absolute top-0 right-0 bg-black w-24 sm:w-28 md:w-32 h-14 sm:h-16 md:h-20 opacity-50 blur-2xl rounded-full"></div>

          <Image
            src="/Images/Home/dishAbout.png"
            alt="Our Mission"
            className="absolute bottom-[-50px] lg:bottom-[-140px] left-[50%] lg:left-[100%] transform -translate-x-1/2 w-24 sm:w-28 md:w-40 lg:w-68 rounded-lg shadow-lg"
            width={100}
            height={100}
          />
        </div>

        <div className="max-w-full md:w-[510px] text-center md:text-left px-4 sm:px-6 mt-6 lg:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#D42D21]">
            About Us
          </h2>
          <p className="text-gray-200 mb-4 text-sm sm:text-base leading-6">
            <span className="text-[#D42D21] font-semibold">Welcome to C Club Shawayi</span> – where exquisite cuisine meets a charming ambiance. Nestled in the heart of Trivandrum, this hidden gem is a celebration of authentic flavors and warm hospitality.
          </p>
          <p className="text-gray-200 mb-4 text-sm sm:text-base leading-6">
            At C Club Shawayi, we take immense pride in crafting an exceptional dining experience for our guests. Our menu is a delightful blend of traditional and contemporary dishes, each prepared with the finest ingredients and a touch of culinary artistry.
          </p>
          <p className="text-gray-200 mb-4 text-sm sm:text-base leading-6">
            The inviting décor of our restaurant, adorned with subtle Middle Eastern touches, creates the perfect setting for a memorable meal. Whether you're planning a family dinner, a romantic evening, or a gathering with friends, C Club Shawayi offers the ideal ambiance for any occasion.
          </p>
          
          <div className="flex justify-center md:justify-end mt-10 sm:mt-16">
            <Button
              className="px-5 sm:px-6 py-2 bg-[#D42D21] text-white text-sm sm:text-base hover:bg-[#B1241A] transition-all duration-300"
              label="Learn More"
              rightIcon={<FaArrowRight className="w-4 sm:w-5 h-4 stroke-[0.05]" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
