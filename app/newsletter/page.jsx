'use client';

import React from 'react';

export default function NewsletterSignup() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
      style={{
        backgroundImage:
          "url('https://cheflolaskitchen.com/wp-content/uploads/2015/07/Meat-pie-1-1-640x853.jpg.webp')",
      }}
    >
      {/* Darker, almost solid black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative w-[90%] max-w-3xl mx-auto text-center z-10">
        <h2 className="text-4xl font-bold mb-4">
          Subscribe to Our <span className="text-green-400">Delicious Newsletter</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Be the first to get our latest recipes, cooking events, and expert tips.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
