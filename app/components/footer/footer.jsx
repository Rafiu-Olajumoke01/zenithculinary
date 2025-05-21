'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4">Culinary's School</h2>
          <p className="text-gray-400 leading-relaxed">
            Bringing you the finest culinary experiences with passion and flavor.  
            Join us and become a master chef in your own kitchen.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-green-400 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-green-400 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
            <li><a href="/courses" className="hover:text-green-400 transition">Courses</a></li>
            <li><a href="/blog" className="hover:text-green-400 transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-green-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>123 Culinary Street</p>
          <p>Foodville, FL 45678</p>
          <p>Email: <a href="mailto:info@cheflola.com" className="hover:text-green-400 transition">info@Culinary's School.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-green-400 transition">+1 234 567 890</a></p>
        </div>

        {/* Newsletter Mini Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="mb-4">Subscribe to get the latest recipes and offers</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-full text-gray-900 focus:outline-none flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Culinary's School. All rights reserved.
      </div>
    </footer>
  );
}
