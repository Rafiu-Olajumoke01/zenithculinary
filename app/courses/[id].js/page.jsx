import React from 'react';
import featuredCourses from '../../../data/courses'; // adjust path to your data

export async function generateStaticParams() {
  return featuredCourses.map((course) => ({
    id: course.id.toString(),
  }));
}

export default function CourseDetails({ params }) {
  const course = featuredCourses.find((c) => c.id.toString() === params.id);

  if (!course) {
    return <div className="text-center mt-20 text-red-600 text-2xl">Course not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-80 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg text-gray-600 mb-2">Duration: {course.duration}</p>
      <p className="text-lg text-gray-600 mb-2">Level: {course.level}</p>
      <p className="text-xl font-semibold text-green-700 mb-4">₦{course.amount.toLocaleString()}</p>
      <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Enroll Now
      </button>
    </div>
  );
}
