'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Mock database with expanded course information
const coursesDatabase = [
  {
    id: 'french-cuisine',
    title: 'Mastering French Cuisine',
    duration: '12 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    description: 'Dive deep into the world of French cuisine, from classic sauces to sophisticated entrees. Learn authentic techniques used in top restaurants across France.',
    instructor: 'Chef Marie Dubois',
    price: '$1,299',
    startDate: 'June 15, 2025',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 9:00 PM',
    location: 'Main Campus, Kitchen 3',
    syllabus: [
      { week: 1, topic: 'Introduction to French Cooking Fundamentals' },
      { week: 2, topic: 'The Five Mother Sauces' },
      { week: 3, topic: 'Soups and Broths' },
      { week: 4, topic: "Appetizers and Hors d'oeuvres" },
      { week: 5, topic: 'Poultry Preparation and Techniques' },
      { week: 6, topic: 'Meat Preparation and Techniques' },
      { week: 7, topic: 'Seafood in French Cuisine' },
      { week: 8, topic: 'Vegetable Preparations and Side Dishes' },
      { week: 9, topic: 'Regional French Specialties' },
      { week: 10, topic: 'Classic French Desserts' },
      { week: 11, topic: 'Wine Pairing and Service' },
      { week: 12, topic: 'Final Project: Complete French Menu' },
    ],
    prerequisites: 'Basic cooking skills required. Previous experience with knife skills recommended.',
    materials: 'Professional knife set, apron, and food containers for taking home creations. Recipe book included.',
  },
  // ... other courses ...
];

export default function CourseDetails() {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Access courseId param from URL
    const courseId = params.courseId;
    const foundCourse = coursesDatabase.find(c => c.id === courseId);

    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      setCourse(null);
    }

    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
        <Link href="/courses" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Return to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero section with course image */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative w-[90%] mx-auto h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
          <div className="flex flex-wrap items-center text-white">
            <span className="mr-4">{course.duration}</span>
            <span className="mr-4">|</span>
            <span className="mr-4">{course.level}</span>
            <span className="mr-4">|</span>
            <span>{course.instructor}</span>
          </div>
        </div>
      </div>

      {/* Course details content */}
      <div className="w-[90%] mx-auto mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-gray-700 mb-6">{course.description}</p>

              <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-2">Course Syllabus</h4>
                <div className="space-y-4">
                  {course.syllabus.map((item) => (
                    <div key={item.week} className="flex">
                      <div className="w-16 font-medium">Week {item.week}</div>
                      <div className="flex-1">{item.topic}</div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
              <p className="text-gray-700 mb-6">{course.prerequisites}</p>

              <h3 className="text-xl font-semibold mb-3">Materials</h3>
              <p className="text-gray-700">{course.materials}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 mb-6 sticky top-8">
              <div className="text-3xl font-bold text-green-600 mb-4">{course.price}</div>
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 mb-6">
                Enroll Now
              </button>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Start Date</h4>
                  <p className="text-gray-600">{course.startDate}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Schedule</h4>
                  <p className="text-gray-600">{course.schedule}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">{course.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instructor</h4>
                  <p className="text-gray-600">{course.instructor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
