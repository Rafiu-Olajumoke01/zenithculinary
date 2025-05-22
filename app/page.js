import Image from "next/image";
import HeroSection from "./herosection/page";
import WhyChooseUs from "./why_choose_us/page";
import FeaturedCourses from "./courses/page";
import Testimonials from "./testimonials/page";
import Chef from "./dchefs/page";
// Import reusable Gallery component, not the page
import Gallery from "./components/Gallery/page";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCourses />
      <Chef />
      {/* Show only 6 images + View All link */}
      <Gallery limit={6} />
      <Testimonials />
    </div>
  );
}
