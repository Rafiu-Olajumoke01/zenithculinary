'use client';

import React from 'react';

const chefs = [
  {
    id: 1,
    name: 'Chef Marie Dupont',
    specialty: 'French Cuisine Expert',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    speech: 'Cooking French cuisine allows me to blend tradition with creativity, and I love sharing this passion with my students.',
  },
  {
    id: 2,
    name: 'Chef Marco Rossi',
    specialty: 'Italian Pasta Master',
    image: 'https://images.unsplash.com/photo-1516685304081-de7947d419d2?auto=format&fit=crop&w=600&q=80',
    speech: 'The art of pasta making is all about patience and love. Teaching this craft gives me immense joy.',
  },
  {
    id: 3,
    name: 'Chef Akira Tanaka',
    specialty: 'Sushi & Japanese Cuisine',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=600&q=80',
    speech: 'Sushi is an art form that teaches precision and respect for ingredients. I love inspiring others to master it.',
  },
  {
    id: 4,
    name: 'Chef Amina Hassan',
    specialty: 'Vegetarian & Vegan Dishes',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80',
    speech: 'Creating delicious plant-based meals is my passion because it nurtures both health and the planet.',
  },
];

export default function MeetTheChefs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-green-600">Meet the</span>{' '}
          <span className="text-gray-800">Chefs</span>
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {chefs.map((chef) => (
            <div key={chef.id} className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-lg transition">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{chef.name}</h3>
              <p className="text-green-600 font-medium mb-2">{chef.specialty}</p>
              <p className="text-gray-700 italic text-sm">"{chef.speech}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
