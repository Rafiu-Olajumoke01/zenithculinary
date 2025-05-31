'use client';
import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const GalleryManagement = () => {
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [gallery, setGallery] = useState([]);

  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch existing images on page load
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/gallery');
      const data = await response.json();
      setGallery(data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  // Upload new image
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: imageTitle,
          url: imageUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Image uploaded successfully!');
        setImageTitle('');
        setImageUrl('');
        fetchGallery(); // Refresh gallery
      } else {
        setMessage(data.message || 'Upload failed.');
      }
    } catch (error) {
      setMessage('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  // Prepare slides for lightbox
  const slides = gallery.map((img) => ({
    src: img.url,
    title: img.title,
  }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload New Gallery Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={imageTitle}
            onChange={(e) => setImageTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
        {message && <p className="text-sm text-gray-700 mt-2">{message}</p>}
      </form>

      <hr className="mb-6" />

      <h3 className="text-lg font-semibold mb-4">Gallery Images</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gallery.length > 0 ? (
          gallery.map((item, index) => (
            <div
              key={item._id}
              className="border rounded shadow p-2 cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-sm mt-2 text-center">{item.title}</p>
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
      />
    </div>
  );
};

export default GalleryManagement;
