'use client';
import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'courseData';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseDescription, setNewCourseDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedCourses = localStorage.getItem(STORAGE_KEY);
      if (savedCourses) {
        const parsedCourses = JSON.parse(savedCourses);
        if (Array.isArray(parsedCourses)) {
          setCourses(parsedCourses);
        } else {
          console.warn('Invalid course data in localStorage');
          setCourses([]);
        }
      } else {
        setCourses([
          { id: 1, title: 'Intro to Web Development', description: 'HTML, CSS, JS basics' },
          { id: 2, title: 'React Crash Course', description: 'Hooks, Components, Props' },
        ]);
      }
    } catch (error) {
      console.error('Error loading courses from localStorage:', error);
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    }
  }, [courses, isLoading]);

  const addCourse = () => {
    if (!newCourseTitle.trim()) return;
    const newCourse = {
      id: Date.now(),
      title: newCourseTitle.trim(),
      description: newCourseDescription.trim() || 'No description',
    };
    setCourses(prev => [...prev, newCourse]);
    setNewCourseTitle('');
    setNewCourseDescription('');
  };

  const deleteCourse = (id) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  };

  if (isLoading) return <p>Loading courses...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>

      {/* Add course */}
      <div className="mb-4 flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="Course Title"
          className="p-2 border rounded"
          value={newCourseTitle}
          onChange={e => setNewCourseTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course Description (optional)"
          className="p-2 border rounded"
          value={newCourseDescription}
          onChange={e => setNewCourseDescription(e.target.value)}
        />
        <button
          onClick={addCourse}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 self-start"
        >
          Add Course
        </button>
      </div>

      {/* Course list */}
      <div className="space-y-4">
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.id} className="bg-white rounded shadow p-4 flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
              <button
                onClick={() => deleteCourse(course.id)}
                className="text-red-600 hover:text-red-800"
                title="Delete Course"
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CourseManagement;
