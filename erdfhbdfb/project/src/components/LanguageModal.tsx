import React from 'react';
import { X } from 'lucide-react';

interface LanguageModalProps {
  onSelectLanguage: (language: string) => void;
  onClose: () => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ onSelectLanguage, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md w-full p-6 animate-fadeIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Select Language</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Choose the language you want to learn or practice
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onSelectLanguage('Tamil')}
            className="bg-white dark:bg-gray-700 border-2 border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900 rounded-xl p-6 text-center transition-all hover:shadow-md flex flex-col items-center"
          >
            <div className="text-4xl mb-2">தமிழ்</div>
            <h3 className="text-lg font-medium mb-1">Tamil</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Classical Dravidian language</p>
          </button>
          
          <button
            onClick={() => onSelectLanguage('English')}
            className="bg-white dark:bg-gray-700 border-2 border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900 rounded-xl p-6 text-center transition-all hover:shadow-md flex flex-col items-center"
          >
            <div className="text-4xl mb-2">A B C</div>
            <h3 className="text-lg font-medium mb-1">English</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Global language of communication</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;