import { useState, useEffect } from 'react';
import { fetchMentors } from '../services/api';
import MentorCard from '../components/MentorCard';

export default function MentorDirectory() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    expertise: '',
    minRating: 0
  });

  useEffect(() => {
    const loadMentors = async () => {
      try {
        const data = await fetchMentors(filters);
        setMentors(data);
      } catch (error) {
        console.error("Failed to fetch mentors:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadMentors();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Find Your Mentor</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
              Expertise
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={filters.expertise}
              onChange={handleFilterChange}
              placeholder="e.g. Career Counseling"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="0">Any Rating</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
      
      {mentors.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No mentors found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}