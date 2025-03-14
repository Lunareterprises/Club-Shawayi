import Image from "next/image";
import Button from "../commonUI/Buttons/Button";
import { FaArrowRight } from "react-icons/fa";

function HomeAboutUs() {
  return (
    <div className="relative py-12 px-6">
      {/* Background Vector Images */}
      <Image
        src="/Images/Home/Group23.png"
        className="absolute bottom-0 right-20 md:right-80 w-20 md:w-52 opacity-50"
        alt="vector4"
        width={100}
        height={100}
      />
      {/* <Image
        src="/Images/Home/Group2.png"
        className="absolute bottom-0 right-125 w-16 md:w-32 opacity-40"
        alt="vector4"
        width={100}
        height={100}
      /> */}
      <Image
        src="/Images/Home/Group1.png"
        className="absolute bottom-0 left-20 md:left-80 w-20 md:w-28 opacity-50"
        alt="vector1"
        width={100}
        height={100}
      />
      <Image
        src="/Images/Home/Group12.png"
        className="absolute bottom-0 left-5 md:left-50 w-16 md:w-20 opacity-60"
        alt="vector1"
        width={100}
        height={100}
      />
<Image
  src="/Images/Home/Group31.png"
  className="absolute top-0 left-[-30px] md:left-[-50px] w-[400px] md:w-[750px] opacity-60 z-10 -scale-x-100"
  alt="vector3"
  width={550}
  height={350}
/>


      <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-28 relative">
        <div className="relative">
          <Image
            src="/Images/Home/AboutUsimge.jpg"
            alt="About Us"
            className="relative rounded-tl-[100px] rounded-bl-[50px] shadow-lg w-[280px] md:w-[350px] h-[450px] md:h-[550px] z-0"
            width={500}
            height={10}
          />

          <div className="absolute top-0 right-0 bg-black w-32 md:w-32 h-20 md:h-32 opacity-50 blur-2xl rounded-full"></div>

          <Image
            src="/Images/Home/dishAbout.png"
            alt="Our Mission"
            className="absolute bottom-[-80px] left-50 w-32 md:w-40 lg:w-68 rounded-lg shadow-lg"
            width={100}
            height={100}
          />
        </div>

        <div className="md:w-[510px] text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-[#D42D21]">About Us</h2>
          <p className="text-gray-200 mb-4 text-sm leading-5">
            <span className="text-[#D42D21] font-semibold">Welcome to C Club Shawayi</span> – where exquisite cuisine meets a charming ambiance. Nestled in the heart of Trivandrum, this hidden gem is a celebration of authentic flavors and warm hospitality.
          </p>
          <p className="text-gray-200 mb-4 text-sm leading-5">
            At C Club Shawayi, we take immense pride in crafting an exceptional dining experience for our guests. Our menu is a delightful blend of traditional and contemporary dishes, each prepared with the finest ingredients and a touch of culinary artistry.
          </p>
          <p className="text-gray-200 mb-4 text-sm leading-5">
          The inviting décor of our restaurant, adorned with subtle Middle Eastern touches, creates the perfect setting for a memorable meal. Whether you're planning a family dinner, a romantic evening, or a gathering with friends, C Club Shawayi offers the ideal ambiance for any occasion.          </p>
          <div className="flex justify-end mt-20">
            <Button
                className="px-6 py-2 bg-[#D42D21] text-white  hover:bg-[#B1241A] transition-all duration-300"
                label="Learn More"
                rightIcon={<FaArrowRight className="w-5 h-4 stroke-[0.05]" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
