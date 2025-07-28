import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMentorById } from '../services/api';
import MentorProfile from '../components/MentorProfile';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';

export default function MentorProfilePage() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const loadMentor = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMentorById(id);
        setMentor(data);
      } catch (error) {
        console.error("Failed to fetch mentor:", error);
        setError('Failed to load mentor profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadMentor();
  }, [id, bookingSuccess]);

  const handleBookingSuccess = () => {
    setBookingSuccess(prev => !prev);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Profile</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  if (!mentor) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
            <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Mentor Not Found</h2>
          <p className="text-gray-600 mb-6">The mentor you're looking for doesn't exist or may have been removed.</p>
          <a
            href="/mentors"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
          >
            Browse Mentors
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MentorProfile 
          mentor={mentor} 
          onBookingSuccess={handleBookingSuccess}
        />
      </div>
    </motion.div>
  );
}