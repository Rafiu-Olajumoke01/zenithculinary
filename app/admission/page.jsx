'use client';

import React, { useState } from 'react';

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    'Mastering French Cuisine',
    'Baking & Pastry Arts',
    'Sushi Making Essentials',
    'Vegetarian Cooking Masterclass',
    'Advanced Knife Skills',
    'Baking',
    'Decorating',
    'Pastry'
  ];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your submission logic here (API call etc)
    setSubmitted(true);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-600">Admission Form</h1>
      <p className="text-center text-gray-700 mb-10">
        Ready to start your culinary journey? Fill in the form below to apply.
      </p>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded text-center">
          Thank you for your application! We will get back to you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow-md">
          <div>
            <label htmlFor="fullName" className="block font-semibold mb-2">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold mb-2">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+123456789"
            />
          </div>

          <div>
            <label htmlFor="course" className="block font-semibold mb-2">Select Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Choose a course
              </option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">Additional Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Any questions or information you'd like to share"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
          >
            Submit Application
          </button>
        </form>
      )}

      <div className="mt-12 bg-gray-50 p-6 rounded shadow text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Admission Requirements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Must be at least 18 years old.</li>
          <li>Completed secondary school education or equivalent.</li>
          <li>Fill the application form accurately.</li>
          <li>Submit any required documents upon request.</li>
          <li>Application review takes 3-5 business days.</li>
        </ul>
      </div>
    </section>
  );
}
