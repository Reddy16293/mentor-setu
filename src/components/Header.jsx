import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHoveringBecomeMentor, setIsHoveringBecomeMentor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/mentors', label: 'Find a Mentor' },
    { path: '/dashboard', label: 'Dashboard' },
    
    // { path: '/about', label: 'About Us' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-3 bg-white/95 shadow-sm backdrop-blur-lg border-b border-gray-100' 
          : 'py-4 bg-gradient-to-b from-indigo-50/80 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent group-hover:from-indigo-700 group-hover:to-blue-700 transition-all duration-300">
                MentorSetu.ai
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div 
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHoveringBecomeMentor(true)}
              onHoverEnd={() => setIsHoveringBecomeMentor(false)}
              className="relative"
            >
              <button
                onClick={() => navigate('/mentor-application')}
                className="ml-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Become a Mentor</span>
                <motion.svg
                  animate={{ x: isHoveringBecomeMentor ? 3 : 0 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </button>
              {isHoveringBecomeMentor && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 right-0 w-64 bg-white p-3 rounded-lg shadow-xl border border-gray-100"
                >
                  <p className="text-sm text-gray-600">Share your knowledge and help others grow in their careers</p>
                </motion.div>
              )}
            </motion.div>
          </nav>
          
          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 inset-x-0 z-40 bg-white shadow-lg md:hidden border-t border-gray-100"
        >
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg font-medium ${
                  location.pathname === link.path
                    ? 'text-white bg-gradient-to-r from-indigo-600 to-blue-500'
                    : 'text-gray-700 hover:bg-indigo-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => navigate('/mentor-application')}
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-medium shadow-md flex items-center justify-center space-x-2"
            >
              <span>Become a Mentor</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="px-4 py-3 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                Sign In
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}