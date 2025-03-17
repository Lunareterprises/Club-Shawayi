import React from 'react'
import Button from '../commonUI/Buttons/Button'

function ExcitingNews() {
  return (
    <div className='px-6 md:px-20 lg:px-48 py-12'>
        <div>
            <h1 className='text-5xl font-bold leading-16'>Exciting news—<span className='text-[#D42D21]'>franchise <br /> opportunities</span> are available now!<br />
            Don't miss your chance to bring <br />
            <span className='text-[#D42D21]'>C CLUB SHAWAYI's</span> signature Masala <br /> Shawayi to your community. Let's <br /> grow together!</h1>
        </div>
        <div>
        <p className='mt-10 text-xl'>Franchise opportunities are now open in</p>
        <div className='flex gap-6 mt-6'>
            <div className='bg-[#D42D21] text-white px-4 py-2'>Kerala</div>
            <div className='bg-[#D42D21] text-white px-4 py-2'>Tamil Nadu</div>
            <div className='bg-[#D42D21] text-white px-4 py-2'>Andhra Pradesh</div>
            <div className='bg-[#D42D21] text-white px-4 py-2'>Telangana</div>
            <div className='bg-[#D42D21] text-white px-4 py-2'>Maharashtra</div>
        </div>
        <p className='mt-6 text-xl'>Choose a high-footfall, clean, and easily accessible location to maximize your profitability and success. <br/><span className='text-[#D42D21]'>Let’s bring the taste of authentic Masala Shawayi to your state!</span> </p>
        </div>
    </div>
  )
}

export default ExcitingNews
