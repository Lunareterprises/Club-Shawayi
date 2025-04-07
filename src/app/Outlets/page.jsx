import Footer from '@/components/commonUI/Footer/Footer';
import OpenShortly from '@/components/Outlets/OpenShortly';
import OpenShortlyCarousel from '@/components/Outlets/OpenShortlyCarousel';
import RunningFranchise from '@/components/Outlets/RunningFranchise';
import RunningFranchisePhotos from '@/components/Outlets/RunningFranchisephotos';
import UpcomingFranchise from '@/components/Outlets/UpcomingFranchise';
import React from 'react';

function Page() { 
  return (
    <div className="bg-black min-h-screen">
      <OpenShortly />
      <OpenShortlyCarousel />
      <UpcomingFranchise />
      <RunningFranchise />
      <RunningFranchisePhotos />
      <Footer />
    </div>
  );
}

export default Page;
