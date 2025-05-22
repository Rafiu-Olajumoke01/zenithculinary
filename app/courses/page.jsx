'use client';
import React from 'react';
import Link from 'next/link'; // ✅ Import Link
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import featuredCourses from '../data/courses'; // 

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-3">
          <span className="text-green-600">Featured</span>{' '}
          <span className="text-gray-800">Courses</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Explore our handpicked culinary courses to elevate your skills.
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop
        >
          {featuredCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600">
                    {course.duration} | {course.level}
                  </p>
                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-block mt-4 text-green-600 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
