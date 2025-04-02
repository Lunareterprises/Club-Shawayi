import Image from 'next/image'
import React from 'react'

function NewOpen() {
  return (
    <div>
        <div className="relative w-full h-[500px] md:h-[550px] lg:h-screen flex items-start justify-start text-start mt-6 lg:mt-12 px-10 lg:px-32">
            <Image 
                src="/Images/Home/Newopen.png" 
                alt="new open" 
                layout="fill" 
                objectFit="contain" 
                className="absolute top-0 left-0 w-full h-full -z-10"
            />
            
            <div className="relative z-10 mt-6">
                <h1 className="text-2xl lg:text-[52px] font-bold  text-[#D42D21] w-full lg:w-[413px]">
                Now Open For 
                Franchise In 
                These States!
                </h1>
                <p className="text-sm md:text-base lg:text-lg mt-4 text-[#787878]">
                    We are currently offering franchise <br/> opportunities in:
                </p>
            </div> 
        </div>

        <div className='px-10 lg:px-32 -mt-20 md:-mt-0'>
            <p className='text-[#D42D21] font-semibold'>(We will expand to other states soon)</p>
            <p className='text-[#787878]'>( A high - footfall, clean, and easily accessible location is recommended for maximum profitability )</p>
        </div>

        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden mt-6 lg:mt-12">
            <Image 
                src="/Images/Home/Frame.png" 
                alt="new open" 
                width={1200} 
                height={300} 
                objectFit="contain" 
                className="w-full h-full"
            />
            {/* Text over the image */}
            <div className="absolute inset-0 flex items-center justify-center z-20 text-center px-6">
                <h2 className="text-white text-sm md:text-lg lg:text-2xl drop-shadow-lg w-4/5 md:w-3/6 ml-20 sm:ml-44 md:ml-56 lg:ml-64 xl:ml-80">
                    Don’t miss this golden opportunity! Become a part of the C CLUB SHAWAYI family & bring authentic flavors to your city. Apply for a franchise today!
                </h2>
            </div>
        </div>



        <div className="relative w-full h-[200px] -mb-20 lg:-mb-0  sm:h-[500px] md:h-[600px] lg:h-screen lg:mt-12">
            <Image 
                src="/Images/Home/lastSectionImg.png" 
                alt="last section image" 
                layout="fill" 
                objectFit="contain"  // Show full image without cropping
                priority
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>


    </div>
  )
}

export default NewOpen
