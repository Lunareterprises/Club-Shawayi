import Image from 'next/image'
import React from 'react'

function Founder() {
  return (
    <div className="px-6 md:px-20 lg:px-48 py-12 mt-0 lg:-mt-20 bg-black ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="italic text-md font-semibold text-white">
            Ready to own a thriving restaurant?
          </h1>
          <p className="italic font-light text-sm mt-3 md:w-full text-white">
            Join the{' '}
            <span className="text-[#D42D21] font-semibold text-white">C CLUB SHAWAYI</span>{' '}
            family—Bangalore's favorite Masala Shawayi brand is expanding across
            India! With our unique secret masala and a tried-and-tested business
            model, we set you up for success. Bring the bold, authentic flavors
            we’re known for to your city today. Let’s grow together!
          </p>
        </div>

        <div className=" flex flex-col items-start ">
          <Image
            src="/Images/Franchise/founder.jpg"
            width={300} 
            height={0}  
            alt="Founder Image"
            
          />
          
          <div className="text-center md:text-left mt-4">
            <h1 className="text-3xl font-medium" style={{ fontFamily: "Pecita, cursive" }}>
              Rahul Menon
            </h1>
            <p className="text-sm text-gray-400">Founder, C CLUB SHAWAYI</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Founder
