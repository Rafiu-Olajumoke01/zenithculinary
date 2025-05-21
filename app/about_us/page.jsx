'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Culinary Excellence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-black/50"></div>
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About <span className="text-green-400">Zenith Culinary</span></h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-2xl">Crafting culinary excellence through passion, innovation, and tradition since 2010</p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="inline-block p-2 bg-green-100 rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl text-center leading-relaxed">
              At Zenith Culinary, we believe in transforming culinary passion into professional mastery. 
              We don't just teach recipes — we ignite creativity, build confidence, and cultivate 
              excellence in every aspect of the culinary arts.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Our Journey</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">A Legacy of <span className="text-green-600">Culinary Excellence</span></h2>
              <div className="h-1 w-16 bg-green-600 mb-8"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Zenith Culinary was founded with the vision to bridge the gap between raw talent and professional opportunity in the culinary world. Our academy quickly gained recognition for its commitment to hands-on training and industry-relevant education.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we’ve evolved by combining classical techniques with modern innovation. Our ever-adapting curriculum reflects industry trends and draws from the experience of culinary experts from diverse backgrounds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Zenith Culinary alumni can be found leading kitchens, launching successful food ventures, and redefining the culinary scene both locally and globally.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative z-10">
                <img
                  src="https://cheflolaskitchen.com/wp-content/uploads/2015/07/Meat-pie-1-1-640x853.jpg.webp"
                  alt="Our Kitchen"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-lg bg-green-100 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Philosophy */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Core Values</span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Sets Us Apart</h2>
            <div className="h-1 w-24 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Hands-On Excellence',
                desc: 'With 90% practical training, our students learn by doing. Our state-of-the-art kitchens provide the perfect environment to master techniques through repeated practice.',
              },
              {
                title: 'Master Instructors',
                desc: 'Our faculty includes seasoned professionals — from award-winning chefs to globally respected culinary innovators — all dedicated to student success.',
              },
              {
                title: 'Flexible Learning',
                desc: 'We offer weekend intensives, weekday courses, and specialty workshops to accommodate your schedule and learning style.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
                <div className="mb-4 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '5,000+', label: 'Graduates' },
              { number: '97%', label: 'Employment Rate' },
              { number: '25+', label: 'Award-Winning Programs' },
            ].map((stat, i) => (
              <div key={i} className="py-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-200 text-sm md:text-base uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
