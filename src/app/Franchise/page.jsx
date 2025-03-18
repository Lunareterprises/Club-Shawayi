import ExcitingNews from '@/components/Franchise/ExcitingNews'
import Founder from '@/components/Franchise/Founder'
import FranchiseDetails from '@/components/Franchise/FranchiseDetails'
import FranchiseHero from '@/components/Franchise/FranchiseHero'
import KitchenEquipment from '@/components/Franchise/KitchenEquipment'
import React from 'react'

function page() {
  return (
    <>
      <FranchiseHero />
      <Founder />
      <ExcitingNews />
      <FranchiseDetails />
      <KitchenEquipment />
    </>
    
  )
}

export default page