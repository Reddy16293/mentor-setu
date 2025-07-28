import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMentorById } from '../services/api';
import MentorProfile from '../components/MentorProfile';

export default function MentorProfilePage() {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const loadMentor = async () => {
      try {
        const data = await fetchMentorById(id);
        setMentor(data);
      } catch (error) {
        console.error("Failed to fetch mentor:", error);
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
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Mentor Not Found</h2>
        <p className="text-gray-600">The mentor you're looking for doesn't exist or may have been removed.</p>
      </div>
    );
  }

  return (
    <div>
      <MentorProfile 
        mentor={mentor} 
        onBookingSuccess={handleBookingSuccess}
      />
    </div>
  );
}