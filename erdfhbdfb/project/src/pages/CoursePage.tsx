import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Download, CheckCircle, Book, Clock, Award } from 'lucide-react';

interface CoursePageProps {
  language: 'en' | 'ta';
}

const CoursePage: React.FC<CoursePageProps> = ({ language }) => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  // Sample course data
  const course = {
    en: {
      title: 'Tamil Alphabet Mastery',
      description: 'Learn to read and write Tamil letters with proper pronunciation',
      lessons: [
        {
          title: 'Introduction to Tamil Alphabet',
          duration: '15 minutes',
          video: 'https://example.com/lesson1.mp4',
          materials: [
            { name: 'Lesson Notes', url: '#' },
            { name: 'Practice Worksheet', url: '#' }
          ]
        },
        {
          title: 'Vowels in Tamil',
          duration: '20 minutes',
          video: 'https://example.com/lesson2.mp4',
          materials: [
            { name: 'Vowels Chart', url: '#' },
            { name: 'Exercise Sheet', url: '#' }
          ]
        }
      ],
      quiz: {
        title: 'Lesson Quiz',
        questions: [
          {
            question: 'How many vowels are there in Tamil?',
            options: ['10', '12', '18', '16'],
            correct: 1
          }
        ]
      }
    },
    ta: {
      title: 'தமிழ் எழுத்துக்கள் பயிற்சி',
      description: 'தமிழ் எழுத்துக்களை சரியான உச்சரிப்புடன் படிக்கவும் எழுதவும் கற்றுக்கொள்ளுங்கள்',
      lessons: [
        {
          title: 'தமிழ் எழுத்துக்கள் அறிமுகம்',
          duration: '15 நிமிடங்கள்',
          video: 'https://example.com/lesson1.mp4',
          materials: [
            { name: 'பாட குறிப்புகள்', url: '#' },
            { name: 'பயிற்சி தாள்', url: '#' }
          ]
        },
        {
          title: 'தமிழ் உயிர் எழுத்துக்கள்',
          duration: '20 நிமிடங்கள்',
          video: 'https://example.com/lesson2.mp4',
          materials: [
            { name: 'உயிர் எழுத்துக்கள் அட்டவணை', url: '#' },
            { name: 'பயிற்சி தாள்', url: '#' }
          ]
        }
      ],
      quiz: {
        title: 'பாட தேர்வு',
        questions: [
          {
            question: 'தமிழில் எத்தனை உயிர் எழுத்துக்கள் உள்ளன?',
            options: ['10', '12', '18', '16'],
            correct: 1
          }
        ]
      }
    }
  };

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Video Player */}
              <div className="bg-gray-800 aspect-video rounded-lg mb-6 flex items-center justify-center">
                <Play className="h-16 w-16 text-white opacity-70" />
              </div>

              {/* Lesson Content */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold mb-4">
                  {course[language].lessons[currentLesson].title}
                </h1>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <Clock className="h-4 w-4 mr-2" />
                  {course[language].lessons[currentLesson].duration}
                </div>
                
                {/* Materials */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Learning Materials</h2>
                  {course[language].lessons[currentLesson].materials.map((material, index) => (
                    <a
                      key={index}
                      href={material.url}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Download className="h-5 w-5 mr-3 text-indigo-600" />
                      <span>{material.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quiz Section */}
              {showQuiz && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">{course[language].quiz.title}</h2>
                  {course[language].quiz.questions.map((q, index) => (
                    <div key={index} className="mb-6">
                      <p className="font-medium mb-3">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option, optIndex) => (
                          <label key={optIndex} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              className="h-4 w-4 text-indigo-600"
                            />
                            <span className="ml-3">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Submit Quiz
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Course Content</h2>
              <div className="space-y-3">
                {course[language].lessons.map((lesson, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      currentLesson === index
                        ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {currentLesson > index ? (
                      <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    ) : (
                      <Book className="h-5 w-5 mr-3" />
                    )}
                    <div className="text-left">
                      <div className="font-medium">{lesson.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {lesson.duration}
                      </div>
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => setShowQuiz(true)}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Award className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">{course[language].quiz.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      5 questions
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;