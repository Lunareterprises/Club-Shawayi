import Image from 'next/image'
import React from 'react'

function KitchenEquipment() {
    const equipmentList = [
        { src: '/Images/Franchise/icon1.png', label: 'Proven Success Formula - A business model designed for profitability.' },
        { src: '/Images/Franchise/icon2.png', label: '80%-20% Partnership Model - 80% profit goes to the shop owner, 20% to the company.' },
        { src: '/Images/Franchise/icon3.png', label: 'Full Operational Support - Expert guidance from accountants, managers, and inspectors.' },
        { src: '/Images/Franchise/icon4.png', label: 'Exclusive Secret Masala Supply - Ensuring authentic and uncompromised taste!' },
        { src: '/Images/Franchise/icon5.png', label: 'Comprehensive Training - Shawai masters, helpers, and chefs are trained by us!' },
        { src: '/Images/Franchise/icon6.png', label: 'Tech-Driven Management - Daily income & expenses are recorded via company-provided accounting software.' },
      ];
  return (
    <div>
        <div className='px-6 md:px-20 lg:px-48 py-12 flex flex-col gap-4'>
            <div className=' leading-loose'>
                <h1 className='text-lg font-[500]'>Kitchen & Equipment Requirements—Designed for Maximum Efficiency!</h1>
                <h3 className='text-[#787878] text-[17px]'>The following items are required for smooth operation</h3>
            </div>
            <div className='flex flex-col leading-[34px]'>
                <p><span className='text-sm md:text-lg lg:text-xl text-[#D42D21]'>➢</span> Grill Machines (30 pieces) - 2 Nos.</p>
                <p><span className='text-sm md:text-lg lg:text-xl text-[#D42D21]'>➢</span> Mandi Steamer (25kg) - 1 Nos</p>
                <p><span className='text-sm md:text-lg lg:text-xl text-[#D42D21]'>➢</span> Juice Counter & Cash Counter - 1 each</p>
                <p><span className='text-sm md:text-lg lg:text-xl text-[#D42D21]'>➢</span>  Freezers (500L & 200L) - 1 each</p>
                <p><span className='text-sm md:text-lg lg:text-xl text-[#D42D21]'>➢</span> Freezers (500L & 200L) - 1 each</p>
                <p><span className='text-sm md:text-lg lg:text-xl text-[#D42D21]'>➢</span> Sujata Supermix - 1 Nos</p>
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 mt-6'>
                {equipmentList.map((item, index) => (
                <div key={index} className='flex flex-col items-start text-start gap-8 '>
                    <Image src={item.src} alt={item.label} width={30} height={10} className='rounded-md' />
                    <p className='text-sm md:text-lg lg:text-lg mt-2'>{item.label}</p>
                </div>
                ))}
            </div>
        </div>
        <div>
      <div className='relative'>
        {/* Background Section */}
        <div className=' py-6 flex flex-col gap-4 bg-[#D42D21]'>
          <p className='text-lg ml-10 md:ml-20 lg:ml-48 text-white'>
            Our Signature Dishes—An Unforgettable Culinary Experience! Indulge in the bold, authentic flavors <br/>that make C CLUB SHAWAYI a favorite. Each dish is crafted to leave a lasting impression—get ready for a feast you won’t forget!
          </p>
        </div>
8
        <div className='absolute right-[-30%] sm:right-[-20%] md:right-[-15%] lg:right-[-15%] mt-96 md:mt-52 lg:mt-18 xl:-mt-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[500px]'>
            <Image
                src="/Images/Franchise/footerTopImg.jpg"
                alt="Signature Dish"
                width={550} 
                height={500}
                className="rhombus-image "
            />
        </div>

      {/* <div className="absolute right-[-15%] md:right-[-5%] top-10 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[500px]">
        <Image
          src="/Images/Franchise/footerTopImg.jpg"
          alt="Signature Dish"
          layout="fill"
          objectFit="cover"
          className="rhombus-image"
        />
      </div> */}



      </div>

      {/* Signature Dishes List */}
      <div className='px-6 md:px-20 lg:px-48 py-6 flex flex-col gap-2'>
        <p><span className='text-xl text-[#D42D21]'>➢</span> <span className='font-semibold'>Shawayi Chicken</span> - Relish the unmatched flavors of our signature masala, crafted to perfection!</p>
        <p><span className='text-xl text-[#D42D21]'>➢</span> <span className='font-semibold'>Exclusive Masala Blends</span> - Enjoy the authentic taste of our closely guarded secret recipe!</p>
        <p><span className='text-xl text-[#D42D21]'>➢</span> <span className='font-semibold'>Mandi Rice & Ghee Rice</span> - Dive into the richness of these satisfying, flavorful rice dishes!</p>
        <p><span className='text-xl text-[#D42D21]'>➢</span> <span className='font-semibold'>Rumali Roti & Kuboos</span> - The ideal companions to enhance your meal’s experience!</p>
        <p><span className='text-xl text-[#D42D21]'>➢</span> <span className='font-semibold'>Refreshing Juices</span> - Finish your feast on a fresh and delightful note!</p>
      </div>
    </div>
    </div>
        
  )
}

export default KitchenEquipment
