import React from 'react';
import { BarChart2, BookOpen, Award, Clock, ArrowRight, Zap } from 'lucide-react';

const Dashboard = () => {
  // Sample data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: 'Tamil Beginner Course',
      description: 'Learn the basics of Tamil language',
      progress: 65,
      image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg',
      language: 'Tamil'
    },
    {
      id: 2,
      title: 'English Grammar Essentials',
      description: 'Master the fundamentals of English grammar',
      progress: 42,
      image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg',
      language: 'English'
    },
    {
      id: 3,
      title: 'Tamil Conversation Practice',
      description: 'Improve your Tamil speaking skills',
      progress: 28,
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg',
      language: 'Tamil'
    }
  ];

  // Sample data for statistics
  const statistics = {
    totalLessonsCompleted: 42,
    totalHoursSpent: 28,
    currentStreak: 7,
    achievements: 12
  };

  // Sample data for upcoming lessons
  const upcomingLessons = [
    {
      id: 1,
      title: 'Tamil Verb Conjugation',
      date: 'Today, 3:00 PM',
      duration: '45 min'
    },
    {
      id: 2,
      title: 'English Idioms and Phrases',
      date: 'Tomorrow, 5:30 PM',
      duration: '30 min'
    }
  ];

  return (
    <div className="space-y-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
        <p className="text-gray-600 dark:text-gray-300">Continue your language learning journey</p>
      </section>

      {/* Statistics Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-center space-x-4">
          <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
            <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Lessons Completed</p>
            <h3 className="text-2xl font-bold">{statistics.totalLessonsCompleted}</h3>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-center space-x-4">
          <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
            <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Hours Spent</p>
            <h3 className="text-2xl font-bold">{statistics.totalHoursSpent}</h3>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-center space-x-4">
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
            <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Current Streak</p>
            <h3 className="text-2xl font-bold">{statistics.currentStreak} days</h3>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex items-center space-x-4">
          <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
            <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Achievements</p>
            <h3 className="text-2xl font-bold">{statistics.achievements}</h3>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Progress</h2>
          <button className="text-indigo-600 dark:text-indigo-400 flex items-center text-sm">
            View detailed stats <BarChart2 className="ml-1 h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Tamil Proficiency</span>
              <span className="text-sm font-medium">58%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">English Proficiency</span>
              <span className="text-sm font-medium">72%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '72%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-medium">65%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Enrolled Courses</h2>
          <button className="text-indigo-600 dark:text-indigo-400 text-sm">View all</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map(course => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="h-40 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-5 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{course.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${course.language === 'Tamil' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'}`}>
                    {course.language}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{course.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium">Progress</span>
                    <span className="text-xs font-medium">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${course.language === 'Tamil' ? 'bg-indigo-600' : 'bg-purple-600'}`} 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition flex items-center justify-center">
                  {course.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Lessons */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Upcoming Lessons</h2>
        
        <div className="space-y-4">
          {upcomingLessons.map(lesson => (
            <div key={lesson.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                  <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium">{lesson.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{lesson.date} • {lesson.duration}</p>
                </div>
              </div>
              <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;