import Footer from "@/components/commonUI/Footer/Footer";
import Benefits from "@/components/Home/Benefits";
import Hero from "@/components/Home/Hero";
import HomeAboutUs from "@/components/Home/HomeAboutUs";
import NewOpen from "@/components/Home/NewOpen";

function page() {
  return (
    <div >
      <Hero overrideHeader={true} /> 
      <HomeAboutUs />
      <Benefits />
      <NewOpen />
      <Footer />
    </div>
  );
}

export default page;
