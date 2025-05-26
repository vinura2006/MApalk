import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ta';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      quickLinks: 'Quick Links',
      about: 'About Us',
      courses: 'Courses',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      contactUs: 'Contact Us',
      address: '123 Education Street, Learning City, 12345',
      newsletter: 'Subscribe to Newsletter',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved'
    },
    ta: {
      quickLinks: 'விரைவு இணைப்புகள்',
      about: 'எங்களைப் பற்றி',
      courses: 'பாடங்கள்',
      contact: 'தொடர்பு',
      privacy: 'தனியுரிமைக் கொள்கை',
      terms: 'பயன்பாட்டு விதிமுறைகள்',
      contactUs: 'எங்களை தொடர்பு கொள்ள',
      address: '123 கல்வி தெரு, கற்றல் நகரம், 12345',
      newsletter: 'செய்திமடலுக்கு குழுசேர',
      emailPlaceholder: 'மின்னஞ்சலை உள்ளிடவும்',
      subscribe: 'குழுசேர',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை'
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">{content[language].about}</Link></li>
              <li><Link to="/courses" className="hover:text-indigo-600 transition-colors">{content[language].courses}</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">{content[language].contact}</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-600 transition-colors">{content[language].privacy}</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-600 transition-colors">{content[language].terms}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].contactUs}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>contact@lingualear.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>{content[language].address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{content[language].newsletter}</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={content[language].emailPlaceholder}
                className="w-full px-4 py-2 rounded-md border dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                {content[language].subscribe}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t dark:border-gray-700 text-center">
          <p>&copy; 2024 LinguaLearn. {content[language].rights}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;