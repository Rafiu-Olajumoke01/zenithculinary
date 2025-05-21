'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const featuredCourses = [
  {
    id: 1,
    title: 'Mastering French Cuisine',
    duration: '12 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    link: '/courses/french-cuisine',
  },
  {
    id: 2,
    title: 'Baking & Pastry Arts',
    duration: '8 weeks',
    level: 'Beginner',
    image: 'https://www.piesandtacos.com/wp-content/uploads/2023/06/pastries-3-scaled.jpg',
    link: '/courses/baking-pastry',
  },
  {
    id: 3,
    title: 'Sushi Making Essentials',
    duration: '6 weeks',
    level: 'Beginner',
    image: 'https://a.storyblok.com/f/286316/9504x6336/74c7cd4ae0/sticks-sushi-04-01-24-0037.jpeg',
    link: '/courses/sushi-making',
  },
  {
    id: 4,
    title: 'Vegetarian Cooking Masterclass',
    duration: '10 weeks',
    level: 'All Levels',
    image: 'https://d1q864mr06oufu.cloudfront.net/farmy-s3/public/spree/products/13664/large/Natural_Cool_Bio_Pizza_Vegetaria_Demeter_gefroren-farmy-ch-01.jpg?1523631315',
    link: '/courses/vegetarian-cooking',
  },
  {
    id: 5,
    title: 'Advanced Knife Skills',
    duration: '4 weeks',
    level: 'Advanced',
    image: 'https://healthybites.weismarkets.com/home/wp-content/gallery/articles/CookingClassKnifeSkills.jpg',
    link: '/courses/knife-skills',
  },
];

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
                  <p className="text-sm text-gray-600">{course.duration} | {course.level}</p>
                  <a
                    href={course.link}
                    className="inline-block mt-4 text-green-600 hover:underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
