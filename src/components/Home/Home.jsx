import Image from 'next/image'
import Marquee from "react-fast-marquee";
import Button from '../commonUI/Buttons/Button';
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const announcements = [
    "Excited to announce our expansion through new franchising opportunities.",
    "Excited to announce our expansion through new franchising opportunities.",
    "Excited to announce our expansion through new franchising opportunities.",
  ];
  
  return (
    <div className="flex justify-start gap-2 md:gap-3  bg-[#D42D21]">
      <div className="w-[70%] md:w-[75%] lg:w-[85%] bg-white overflow-hidden">
        <Marquee className="h-[42px] shadow-none" speed={100} gradient={false}>
          {announcements.map((text, index) => (
            <div key={index} className="flex items-center gap-3 mx-2">
              <Image src="/Images/Home/Star6.jpg" width={20} height={50} alt="star" />
              <p className="text-[#D42D21]">{text}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <Button className="bg-white md:w-[35%] lg:w-[15%] text-[#D42D21]  items-center justify-center whitespace-nowrap" label="Know More" rightIcon={<FaArrowRight  className="w-5 h-4 stroke-[0.05]"/>}/>
    </div>
  );
}

export default Home;
