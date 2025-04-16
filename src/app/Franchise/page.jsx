"use"
import React from 'react'
import CallNowSection from '@/components/Franchise/CallNowSection'
import ExcitingNews from '@/components/Franchise/ExcitingNews'
import Founder from '@/components/Franchise/Founder'
import FranchiseDetails from '@/components/Franchise/FranchiseDetails'
import FranchiseHero from '@/components/Franchise/FranchiseHero'
import KitchenEquipment from '@/components/Franchise/KitchenEquipment'
import SignatureDishes from '@/components/Franchise/Signaturedishes'
import Franchise from '@/components/Franchise/FranchiseDetails/Franchise'
import InvestmentEstimate from '@/components/Franchise/FranchiseDetails/InvestmentEstimate'
import Pathtosuccess from '@/components/Franchise/FranchiseDetails/Pathtosuccess'
import StaffDetails from '@/components/Franchise/StaffDetails'
import Footer from '@/components/commonUI/Footer/Footer'



function page() {
  return (
    <>
      <FranchiseHero />
      <Founder />

      <div className="relative">
        <ExcitingNews />

        {/* <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10">
          <CallNowSection />
        </div> */}
        <SignatureDishes/>

        <FranchiseDetails />
        <Franchise/>
        <InvestmentEstimate/>
        <Pathtosuccess/>
        <StaffDetails/>
      </div>
          <Footer />
      {/* <KitchenEquipment /> */}

     
    </>
  )
}

export default page
