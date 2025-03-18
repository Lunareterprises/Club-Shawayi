import Image from 'next/image'
import React from 'react'

function FranchiseDetails() {
  return (
    <div 
      className="flex flex-col lg:flex-row items-center justify-between mt-6 px-6 md:px-20 lg:px-0  gap-12"
      style={{
        background: "radial-gradient(104.11% 100.17% at 28.27% 7.59%, rgba(10, 1, 0, 0.1) 0%, rgba(255, 163, 143, 0.112) 100%)"
      }}
    >
      
        <div className="w-full lg:w-1/2 lg:ml-48">
            <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
            Franchise Details—Your <br /> 
            <span className="text-[#D42D21]">Gateway to Success!</span>
            </h1>
            
            <div className="flex flex-col gap-6  mt-12">
            {[
                "➢ Franchise Fee - INR. 3,00,000/- (Non-refundable)",
                "➢ Partnership Model - 80% profit to the shop owner, 20% to the company",
                "➢ Daily Accounting - All transactions must be recorded in the company-provided software",
                "➢ Monthly Profit Sharing - The company calculates profits on the 2nd of every month, and the franchisee pays the 20% company share by the 10th."
            ].map((text, index) => (
                <div key={index} className="bg-[#D42D21] text-white px-2 py-2 ">
                <p>{text}</p>
                </div>
            ))}
            </div>
        </div>
        <div className="w-1/2 flex justify-start">
        <Image 
          src="/Images/Franchise/FranchaiseDetails.jpg" 
          width={550} 
          height={500} 
          className="w-full h-auto object-cover "
          alt="Franchise Details"
        />
      </div>
    </div>
  )
}

export default FranchiseDetails
