import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Star, Users, Clock, ArrowRight } from 'lucide-react';

interface HomePageProps {
  language: 'en' | 'ta';
}

const HomePage: React.FC<HomePageProps> = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'Learn Tamil & English in a Fun Way!',
        subtitle: 'Embark on an exciting language journey with interactive lessons, games, and cultural insights.',
        startLearning: 'Start Learning',
        exploreCourses: 'Explore Courses'
      },
      stats: {
        lessons: 'Lessons',
        students: 'Students',
        rating: 'Rating'
      },
      features: {
        title: 'Why Choose LinguaLearn?',
        items: [
          {
            icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
            title: 'Interactive Lessons',
            description: 'Learn through engaging multimedia content and activities.'
          },
          {
            icon: <Users className="h-8 w-8 text-indigo-600" />,
            title: 'Community Learning',
            description: 'Connect with peers and practice together.'
          },
          {
            icon: <Clock className="h-8 w-8 text-indigo-600" />,
            title: 'Learn at Your Pace',
            description: 'Flexible schedule that fits your lifestyle.'
          }
        ]
      },
      testimonials: {
        title: 'What Our Students Say',
        items: [
          {
            text: "The interactive lessons made learning Tamil so much fun! I can now speak with my grandparents!",
            author: "Priya S.",
            role: "Student"
          },
          {
            text: "Great platform for learning English. The lessons are well-structured and engaging.",
            author: "John D.",
            role: "Student"
          }
        ]
      }
    },
    ta: {
      hero: {
        title: 'தமிழ் & ஆங்கிலத்தை மகிழ்ச்சியாக கற்றுக்கொள்ளுங்கள்!',
        subtitle: 'விளையாட்டு மற்றும் கலாச்சார அறிவுடன் கூடிய இணையவழி பாடங்கள் மூலம் மொழியை கற்றுக்கொள்ளுங்கள்.',
        startLearning: 'கற்க தொடங்குங்கள்',
        exploreCourses: 'பாடங்களை ஆராயுங்கள்'
      },
      stats: {
        lessons: 'பாடங்கள்',
        students: 'மாணவர்கள்',
        rating: 'மதிப்பீடு'
      },
      features: {
        title: 'ஏன் LinguaLearn-ஐ தேர்வு செய்ய வேண்டும்?',
        items: [
          {
            icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
            title: 'இணைய வழி கற்றல்',
            description: 'பல்லூடக உள்ளடக்கம் மற்றும் செயல்பாடுகள் மூலம் கற்றுக்கொள்ளுங்கள்.'
          },
          {
            icon: <Users className="h-8 w-8 text-indigo-600" />,
            title: 'சமூக கற்றல்',
            description: 'சக மாணவர்களுடன் இணைந்து பயிற்சி செய்யுங்கள்.'
          },
          {
            icon: <Clock className="h-8 w-8 text-indigo-600" />,
            title: 'உங்கள் வேகத்தில் கற்றுக்கொள்ளுங்கள்',
            description: 'உங்கள் வாழ்க்கை முறைக்கு ஏற்ற நெகிழ்வான அட்டவணை.'
          }
        ]
      },
      testimonials: {
        title: 'எங்கள் மாணவர்கள் என்ன சொல்கிறார்கள்',
        items: [
          {
            text: "இணையவழி பாடங்கள் தமிழ் கற்பதை மிகவும் சுவாரஸ்யமாக்கியது! இப்போது என் தாத்தா பாட்டியுடன் பேச முடிகிறது!",
            author: "பிரியா ச.",
            role: "மாணவி"
          },
          {
            text: "ஆங்கிலம் கற்க சிறந்த தளம். பாடங்கள் நன்கு கட்டமைக்கப்பட்டு கவர்ச்சிகரமாக உள்ளன.",
            author: "ஜான் டி.",
            role: "மாணவர்"
          }
        ]
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              {content[language].hero.title}
            </h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              {content[language].hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                {content[language].hero.startLearning}
              </Link>
              <Link
                to="/courses"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors text-center"
              >
                {content[language].hero.exploreCourses}
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg"
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{content[language].stats.lessons}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">10,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{content[language].stats.students}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">4.9/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{content[language].stats.rating}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{content[language].features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{content[language].testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content[language].testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;