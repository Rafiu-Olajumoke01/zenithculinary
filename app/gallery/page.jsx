'use client';

import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  'https://cheflolaskitchen.com/wp-content/uploads/2020/04/DSC0447hot-cross-buns-428x640.jpg.webp',
  'https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-17-720x1080.jpg.webp',
  'https://cheflolaskitchen.com/wp-content/uploads/2016/05/DSC0187crispy-fried-chicken-legs.jpg.webp',
  'https://cheflolaskitchen.com/wp-content/uploads/2015/07/Meat-pie-1-1-640x853.jpg.webp',
  'https://cheflolaskitchen.com/wp-content/uploads/2023/03/Sausage-Eggs-and-Potatoes-Breakfast-Muffins-640x853.png.webp',
  'https://cheflolaskitchen.com/wp-content/uploads/2025/01/Crispy-Chicken-Sandwich-03-640x853.png.webp',
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-green-600">Gallery</span>{' '}
          <span className="text-gray-800">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index}`}
                onClick={() => handleImageClick(index)}
                className="w-full h-[280px] object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
}
