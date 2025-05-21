import Image from "next/image";
import HeroSection from "./herosection/page";
import WhyChooseUs from "./why_choose_us/page";
import FeaturedCourses from "./courses/page";
import Testimonials from "./testimonials/page"
import NewsletterSignup from "./newsletter/page";
import CourseDetails from "./courses/courseDetails";
import Details from './details/page'
import Chef from "./dchefs/page"
import Gallery from "./gallery/page";
export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <WhyChooseUs/>
      <FeaturedCourses/>
      <Chef/>
      <Gallery/>
      <Testimonials/>
      {/* <NewsletterSignup/> */}
      <Details/>
    </div>
  );
}
