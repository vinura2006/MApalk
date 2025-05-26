import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen, Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ta'>('en');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          language={language}
          setLanguage={setLanguage}
        />
        
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/course/:id" element={<CoursePage language={language} />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>

        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;