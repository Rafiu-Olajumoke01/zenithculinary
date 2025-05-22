import featuredCourses from '../../data/courses';

export default function CourseDetails({ params }) {
  const course = featuredCourses.find(course => course.id === params.id);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 font-semibold text-xl">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-24 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-10">
        {/* Image with margin top */}
        <img
          src={course.image}
          alt={course.title}
          className="rounded-xl w-full h-80 object-cover shadow-lg mb-10 mt-6"
        />

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          {course.title}
        </h1>

        {/* Course Info */}
        <div className="flex flex-wrap gap-10 text-gray-700 mb-10">
          {/* Duration */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
            </svg>
            <span className="font-semibold text-lg">Duration:</span>
            <span className="text-green-700 font-medium">{course.duration}</span>
          </div>

          {/* Level */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-semibold text-lg">Level:</span>
            <span className="text-green-700 font-medium">{course.level}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.333-2.667-4-6-8-6s-4 3-4 6c0 3 1 6 4 6s8 0 8-6z"
              />
            </svg>
            <span className="font-semibold text-lg">Price:</span>
            <span className="text-green-700 font-bold text-2xl">
              ₦{course.amount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-800 text-lg leading-relaxed mb-12">
          Learn everything you need to become an expert in <strong>{course.title}</strong>. This course offers hands-on experience and practical lessons to sharpen your skills and boost your culinary expertise.
        </p>

        {/* Enroll Button */}
        <a
          href="/transaction"
          className="inline-block bg-green-600 text-white font-semibold py-4 px-14 rounded-xl shadow-xl hover:bg-green-700 transition transform hover:scale-105 text-center"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}
