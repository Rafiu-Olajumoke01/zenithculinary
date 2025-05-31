'use client';
import React, { useEffect } from 'react';
import { BookOpen, ImageIcon, FileText, LogOut, Menu } from 'lucide-react';
import useAuth from './../hooks/useAuth'; 
import { useRouter } from 'next/navigation';

import CourseManagement from './components/CourseManagement';
import GalleryManagement from './components/GalleryManagement';
import SyllabusManagement from './components/SyllabusManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = React.useState('courses');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  const tabs = [
    { id: 'courses', label: 'Courses', icon: BookOpen, component: CourseManagement },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon, component: GalleryManagement },
    { id: 'syllabus', label: 'Syllabus', icon: FileText, component: SyllabusManagement },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  useEffect(() => {
    if (!loading && (!user || !user.isAdmin)) {
      router.push('/admin-login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-green-700 mt-4 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`bg-white/95 backdrop-blur-sm w-64 p-6 border-r border-green-200 flex flex-col shadow-lg ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="md:hidden text-gray-500 hover:text-red-500 transition-colors duration-200 p-1 rounded"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group
                ${activeTab === id 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md transform scale-[1.02]' 
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-700 hover:shadow-sm'
                }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-200 ${activeTab === id ? 'scale-110' : 'group-hover:scale-105'}`} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent mb-4"></div>
          <button 
            onClick={logout} 
            className="flex items-center gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-3 rounded-lg transition-all duration-200 w-full group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-105 transition-transform duration-200" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.label} Management
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Manage your {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} content
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Active
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                {ActiveComponent && <ActiveComponent />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;