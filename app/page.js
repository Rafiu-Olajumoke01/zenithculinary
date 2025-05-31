'use client'
import { useEffect } from 'react'; // Add this import
import Image from "next/image";
import HeroSection from "./herosection/page";
import WhyChooseUs from "./why_choose_us/page";
import FeaturedCourses from "./courses/page";
import Testimonials from "./testimonials/page";
import Chef from "./dchefs/page";
import Gallery from "./components/Gallery/page";

export default function Home() {

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => {
        console.log('Backend response:', data);
      })
      .catch(error => {
        console.error('Backend connection error:', error);
      });
  }, []);

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