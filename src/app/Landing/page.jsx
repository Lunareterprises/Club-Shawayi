import Hero from "@/components/Home/Hero"
import Home from "@/components/Home/Home"
import HomeAboutUs from "@/components/Home/HomeAboutUs"
import ImageAnimation from "@/components/Home/ImageAnimation"
import OfferList from "@/components/Home/OfferList"
import Testimonials from "@/components/Home/Testimonials"


function page() {
  return (
    <div>
      <Home />
      <Hero />
      <ImageAnimation />
      <HomeAboutUs />
      <OfferList />
      <Testimonials />
    </div>
  )
}

export default page

