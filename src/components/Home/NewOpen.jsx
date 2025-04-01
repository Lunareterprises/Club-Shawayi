import Image from 'next/image'
import React from 'react'

function NewOpen() {
  return (
    <div>
        <div className="relative w-full h-screen flex items-start justify-start text-start mt-12 px-10 lg:px-32">
            <Image 
                src="/Images/Home/Newopen.png" 
                alt="new open" 
                layout="fill" 
                objectFit="contain" 
                className="absolute top-0 left-0 w-full h-full -z-10"
            />
            
            <div className="relative z-10 mt-6">
                <h1 className="text-2xl lg:text-[52px] font-bold drop-shadow-lg text-[#D42D21] w-[413px]">
                Now Open For 
                Franchise In 
                These States!
                </h1>
                <p className="text-lg mt-4 text-[#787878]">
                    We are currently offering franchise <br/> opportunities in:
                </p>
            </div> 
        </div>

        <div className='px-10 lg:px-32'>
            <p className='text-[#D42D21] font-semibold'>(We will expand to other states soon)</p>
            <p className='text-[#787878]'>( A high - footfall, clean, and easily accessible location is recommended for maximum profitability )</p>
        </div>

        {/* Full-screen width image */}
        <div className="relative w-full h-[348px] overflow-hidden mt-12">
            <Image 
                src="/Images/Home/Frame.png" 
                alt="new open" 
                layout="fill" 
                objectFit="cover" 
                className="absolute top-0 left-0 w-full h-full z-10"
            />
        </div>
    </div>
  )
}

export default NewOpen
