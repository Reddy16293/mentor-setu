import { useState, useEffect } from 'react';
import { fetchMentors } from '../services/api';
import MentorCard from '../components/MentorCard';
import { motion } from 'framer-motion';

export default function MentorDirectory() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    expertise: '',
    minRating: 0,
    availability: 'all'
  });

  useEffect(() => {
    const loadMentors = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMentors(filters);
        setMentors(data);
      } catch (error) {
        console.error("Failed to fetch mentors:", error);
        setError('Failed to load mentors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    const timer = setTimeout(() => {
      loadMentors();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredMentors = mentors.filter(mentor => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    
    // Check name
    const nameMatch = mentor.name?.toLowerCase().includes(searchLower) || false;
    
    // Check title
    const titleMatch = mentor.title?.toLowerCase().includes(searchLower) || false;
    
    // Check expertise (array or string)
    let expertiseMatch = false;
    if (Array.isArray(mentor.expertise)) {
      expertiseMatch = mentor.expertise.some(item => 
        item.toLowerCase().includes(searchLower)
      );
    } else if (typeof mentor.expertise === 'string') {
      expertiseMatch = mentor.expertise.toLowerCase().includes(searchLower);
    }
    
    // Check secondary expertise if exists
    let secondaryExpertiseMatch = false;
    if (mentor.secondaryExpertise) {
      if (Array.isArray(mentor.secondaryExpertise)) {
        secondaryExpertiseMatch = mentor.secondaryExpertise.some(item => 
          item.toLowerCase().includes(searchLower)
        );
      } else if (typeof mentor.secondaryExpertise === 'string') {
        secondaryExpertiseMatch = mentor.secondaryExpertise.toLowerCase().includes(searchLower);
      }
    }
    
    // Check languages
    const languagesMatch = mentor.languages?.some(lang => 
      lang.toLowerCase().includes(searchLower)
    ) || false;
    
    // Check bio
    const bioMatch = mentor.bio?.toLowerCase().includes(searchLower) || false;
    
    return (
      nameMatch || 
      titleMatch || 
      expertiseMatch || 
      secondaryExpertiseMatch || 
      languagesMatch || 
      bioMatch
    );
  });

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 text-sm text-red-700 underline hover:text-red-600"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Mentor</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with industry experts who can guide you on your professional journey
        </p>
      </motion.div>
      
      <div className="mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Mentors
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name, expertise, skills, languages..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
                Expertise
              </label>
              <select
                id="expertise"
                name="expertise"
                value={filters.expertise}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Expertise</option>
                <option value="Career Counseling">Career Counseling</option>
                <option value="Technical Skills">Technical Skills</option>
                <option value="Leadership">Leadership</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Personal Development">Personal Development</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="minRating" className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Rating
              </label>
              <select
                id="minRating"
                name="minRating"
                value={filters.minRating}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="0">Any Rating</option>
                <option value="3">3+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {filteredMentors.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredMentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MentorCard mentor={mentor} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No mentors found</h3>
              <p className="mt-1 text-gray-500">
                {searchTerm ? 
                  `No mentors match your search for "${searchTerm}". Try different keywords.` : 
                  "No mentors match your current filters. Try adjusting your criteria."}
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({
                      expertise: '',
                      minRating: 0,
                      availability: 'all'
                    });
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset filters
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

