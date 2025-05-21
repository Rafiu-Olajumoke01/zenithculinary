'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: 'Amaka Johnson',
    role: 'Pastry Graduate',
    quote:
      'This culinary school changed my life! I went from knowing nothing to baking cakes professionally.',
    photo:
      'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'James Okoro',
    role: 'Chef Intern',
    quote:
      'Amazing experience and top-notch instructors. Highly recommend for anyone serious about food.',
    photo:
      'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Chiamaka Eze',
    role: 'Student',
    quote:
      'The training was hands-on, and I loved the supportive environment!',
    photo:
      'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Daniel Musa',
    role: 'Alumni',
    quote:
      'One of the best decisions I’ve made. The skills I gained are invaluable.',
    photo:
      'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Kemi Adeleke',
    role: 'Graduate',
    quote:
      'Top-tier culinary education with great career support.',
    photo:
      'https://randomuser.me/api/portraits/women/72.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-3">
          <span className="text-green-600">What Our</span>{' '}
          <span className="text-gray-800">Students Say</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Hear directly from our graduates and current learners.
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-2 p-6 text-center min-h-[280px] flex flex-col items-center justify-between">
                <div>
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="text-md font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-green-600 mb-4">{testimonial.role}</p>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
