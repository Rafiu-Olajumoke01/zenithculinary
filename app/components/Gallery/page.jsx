'use client';

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import galleryImages from '../../data/galleryImages';

export default function Gallery({ limit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imagesToShow = limit ? galleryImages.slice(0, limit) : galleryImages;

  const slides = galleryImages.map((src) => ({ src }));

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="w-[90%] mx-auto">
        {/* Flex container with space between */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">
            <span className="text-green-600">Gallery</span>{' '}
            <span className="text-gray-800">Highlights</span>
          </h2>
          {limit && (
            <a
              href="/gallery"
              className="text-green-600 font-semibold hover:underline"
            >
              View All
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagesToShow.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-[280px] object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
    </section>
  );
}
