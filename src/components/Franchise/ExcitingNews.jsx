import React from 'react'
import Button from '../commonUI/Buttons/Button'

function ExcitingNews() {
  return (
    <div className='px-6 md:px-20 lg:px-48 py-12'>
        <div>
            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold leading-normal lg:leading-16'>Exciting news—<span className='text-[#D42D21]'>franchise <br /> opportunities</span> are available now!<br />
            Don't miss your chance to bring <br />
            <span className='text-[#D42D21]'>C CLUB SHAWAYI's</span> signature Masala <br /> Shawayi to your community. Let's <br /> grow together!</h1>
        </div>
        <div>
        <p className='mt-10 text-xl'>Franchise opportunities are now open in</p>

        <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-6">
          {["Kerala", "Tamil Nadu", "Andhra Pradesh", "Telangana", "Maharashtra"].map((state) => (
            <div key={state} className="bg-[#D42D21] text-white px-4 py-2 text-center whitespace-nowrap">
              {state}
            </div>
          ))}
        </div>
        <p className='mt-6 text-xl'>Choose a high-footfall, clean, and easily accessible location to maximize your profitability and success. <br/><span className='text-[#D42D21] font-medium'>Let’s bring the taste of authentic Masala Shawayi to your state!</span> </p>
        </div>
    </div>
  )
}

export default ExcitingNews
