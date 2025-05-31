'use client'
import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'galleryImages'; 

export default function Gallery({ limit }) {
  const [images, setImages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gallery');
        if (!response.ok) throw new Error('Failed to fetch images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error loading images:', error);
        setImages([]);
      }
    };

    fetchImages();
  }, []);

  if (images === null) return <p>Loading images...</p>;

  const imagesToShow = limit ? images.slice(0, limit) : images;
  const slides = images.map(img => ({ src: img.url }));

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">
            <span className="text-green-600">Gallery</span>{' '}
            <span className="text-gray-800">Highlights</span>
          </h2>
          {limit && (
            <a href="/gallery" className="text-green-600 font-semibold hover:underline">
              View All
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagesToShow.length > 0 ? (
            imagesToShow.map((image, index) => (
              <div
                key={image._id} // use _id from MongoDB
                className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image.url}
                  alt={image.title || `Gallery ${index}`}
                  className="w-full h-[280px] object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <p className="mt-2 text-center text-gray-700 font-medium">
                  {image.title || 'Untitled'}
                </p>
              </div>
            ))
          ) : (
            <p>No images to display.</p>
          )}
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
