'use client'
import { ArrowRight, Code, Users, Award, Play } from 'lucide-react';

export default function LasopLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
              <Code className="w-4 h-4 mr-2" />
              Premium Programming Education
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Master</span>
              <span className="block text-blue-400">Programming</span>
              <span className="block">at LASOP</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Transform your career with industry-leading programming courses designed by experts. Join Nigeria's most trusted coding school.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                Start Learning Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center justify-center px-8 py-4 border-2 border-blue-400/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Right Content - Code Editor Mockup */}
          <div className="relative">
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between p-4 bg-slate-800/80 border-b border-slate-700/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-slate-400 text-sm font-mono">main.py</div>
                <div className="text-slate-500 text-xs">LASOP IDE</div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 space-y-3 font-mono text-sm">
                <div className="flex">
                  <span className="text-slate-500 w-8">1</span>
                  <span className="text-blue-400">class</span>
                  <span className="text-white ml-2">LasopStudent</span>
                  <span className="text-slate-300">:</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">2</span>
                  <span className="text-blue-400 ml-4">def</span>
                  <span className="text-green-400 ml-2">__init__</span>
                  <span className="text-slate-300">(self):</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">3</span>
                  <span className="text-white ml-8">self.skills = []</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">4</span>
                  <span className="text-white ml-8">self.career_ready = </span>
                  <span className="text-red-400">False</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">5</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">6</span>
                  <span className="text-blue-400 ml-4">def</span>
                  <span className="text-green-400 ml-2">learn_at_lasop</span>
                  <span className="text-slate-300">(self):</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">7</span>
                  <span className="text-white ml-8">self.skills.extend([</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">8</span>
                  <span className="text-yellow-300 ml-12">'Python', 'JavaScript',</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">9</span>
                  <span className="text-yellow-300 ml-12">'React', 'Node.js'</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">10</span>
                  <span className="text-white ml-8">])</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">11</span>
                  <span className="text-white ml-8">self.career_ready = </span>
                  <span className="text-green-400">True</span>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-8">12</span>
                  <span className="text-blue-400 ml-8">return</span>
                  <span className="text-yellow-300 ml-2">"Ready for Tech Career!"</span>
                </div>
              </div>
              
              {/* Terminal Output */}
              <div className="bg-slate-900/80 p-4 border-t border-slate-700/50">
                <div className="text-green-400 text-xs font-mono">
                  <span className="text-slate-500">→</span> python main.py
                </div>
                <div className="text-green-400 text-xs font-mono mt-1">
                  Ready for Tech Career! ✨
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-blue-600 p-4 rounded-xl shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-500 p-4 rounded-xl shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            
            {/* Decorative Code Snippets */}
            <div className="absolute top-20 -left-20 bg-slate-800/30 backdrop-blur-sm p-3 rounded-lg border border-slate-600/30 text-xs font-mono text-slate-300 rotate-12">
              <div>console.log('Hello LASOP');</div>
            </div>
            <div className="absolute bottom-32 -right-16 bg-slate-800/30 backdrop-blur-sm p-3 rounded-lg border border-slate-600/30 text-xs font-mono text-slate-300 -rotate-12">
              <div>&lt;div&gt;Future Developer&lt;/div&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}