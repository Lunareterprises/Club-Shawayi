import Image from 'next/image'
import React from 'react'

function Founder() {
  return (
    <div >
      <div className='flex ' >
        <div >
          <h1>Ready to own a thriving restaurant?</h1>
          <p>
            Join the{' '}
            <span className="text-[#D42D21]">C CLUB SHAWAYI</span> family—Bangalore's
            favorite Masala Shawayi brand is expanding across India! With our
            unique secret masala and a tried-and-tested business model, we set
            you up for success. Bring the bold, authentic flavors we’re known for
            to your city today. Let’s grow together!
          </p>
        </div>
        <div className="founder-image">
          <Image src="/image.jpg" width={350} height={100} alt="Founder Image" />
        </div>
      </div>
    </div>
  )
}

export default Founder


