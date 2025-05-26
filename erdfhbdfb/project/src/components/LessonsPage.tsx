import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Clock, Star, ArrowRight } from 'lucide-react';

interface LessonsPageProps {
  language: string;
}

const LessonsPage: React.FC<LessonsPageProps> = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);

  // Sample course data
  const allCourses = [
    // Tamil Courses
    {
      id: 1,
      title: 'Tamil Alphabet Mastery',
      description: 'Learn to read and write Tamil letters with proper pronunciation',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      category: 'beginner',
      language: 'Tamil',
      duration: '4 weeks',
      rating: 4.8,
      lessons: 24
    },
    {
      id: 2,
      title: 'Conversational Tamil',
      description: 'Practice everyday Tamil conversations and build vocabulary',
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg',
      category: 'intermediate',
      language: 'Tamil',
      duration: '6 weeks',
      rating: 4.7,
      lessons: 32
    },
    {
      id: 3,
      title: 'Tamil Literature & Poetry',
      description: 'Explore classical Tamil literature and poetic traditions',
      image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg',
      category: 'advanced',
      language: 'Tamil',
      duration: '8 weeks',
      rating: 4.9,
      lessons: 40
    },
    {
      id: 4,
      title: 'Tamil for Business',
      description: 'Learn professional Tamil for workplace communication',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      category: 'specialized',
      language: 'Tamil',
      duration: '5 weeks',
      rating: 4.6,
      lessons: 28
    },
    {
      id: 5,
      title: 'Tamil Cultural Studies',
      description: 'Understand Tamil traditions, festivals, and cultural practices',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      category: 'specialized',
      language: 'Tamil',
      duration: '6 weeks',
      rating: 4.8,
      lessons: 30
    },
    
    // English Courses
    {
      id: 6,
      title: 'English Pronunciation Basics',
      description: 'Master English sounds and improve your accent',
      image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg',
      category: 'beginner',
      language: 'English',
      duration: '4 weeks',
      rating: 4.7,
      lessons: 24
    },
    {
      id: 7,
      title: 'English Grammar Fundamentals',
      description: 'Build a strong foundation in English grammar rules',
      image: 'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg',
      category: 'beginner',
      language: 'English',
      duration: '5 weeks',
      rating: 4.8,
      lessons: 30
    },
    {
      id: 8,
      title: 'Advanced English Composition',
      description: 'Develop your English writing skills for academic purposes',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      category: 'advanced',
      language: 'English',
      duration: '8 weeks',
      rating: 4.9,
      lessons: 36
    },
    {
      id: 9,
      title: 'English for IELTS Preparation',
      description: 'Prepare for the IELTS exam with targeted practice',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
      category: 'specialized',
      language: 'English',
      duration: '10 weeks',
      rating: 4.9,
      lessons: 48
    },
    {
      id: 10,
      title: 'Business English Communication',
      description: 'Learn professional English for workplace success',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      category: 'specialized',
      language: 'English',
      duration: '6 weeks',
      rating: 4.7,
      lessons: 32
    }
  ];

  // Filter courses based on language, search term, and category
  useEffect(() => {
    let filtered = allCourses;
    
    // Filter by language
    if (language) {
      filtered = filtered.filter(course => course.language === language);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(course => course.category === filterCategory);
    }
    
    setFilteredCourses(filtered);
  }, [language, searchTerm, filterCategory]);

  return (
    <div className="space-y-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {language ? `${language} Courses` : 'All Courses'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {language === 'Tamil' 
            ? 'Explore our comprehensive Tamil language courses designed for all levels'
            : language === 'English'
              ? 'Discover our English language courses to enhance your skills'
              : 'Select a language to view available courses'}
        </p>
      </section>

      {/* Search and Filter */}
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <select
              className="border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="specialized">Specialized</option>
            </select>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden flex flex-col transition-transform hover:translate-y-[-5px] hover:shadow-md">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-full px-2 py-1 text-xs font-medium flex items-center">
                    <Star className="h-3 w-3 text-amber-500 mr-1" fill="#f59e0b" />
                    {course.rating}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      course.category === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      course.category === 'intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      course.category === 'advanced' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                    }`}>
                      {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {course.lessons} lessons
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition flex items-center justify-center">
                    Start Learning
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No courses found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilterCategory('all');
              }}
              className="text-indigo-600 dark:text-indigo-400 font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default LessonsPage;