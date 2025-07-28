import { useState, useEffect } from 'react';
import { fetchBookings } from '../services/api';
import SessionCard from '../components/SessionCard';

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const data = await fetchBookings();
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadBookings();
  }, [refresh]);

  const handleBookingCancel = () => {
    setRefresh(prev => !prev);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const upcomingSessions = bookings.filter(b => b.status === 'confirmed');
  const cancelledSessions = bookings.filter(b => b.status === 'cancelled');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Your Dashboard</h1>
        <p className="text-gray-600">Manage your mentoring sessions and track your progress</p>
      </div>
      
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Upcoming Sessions</h2>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {upcomingSessions.length} scheduled
          </span>
        </div>
        
        {upcomingSessions.length > 0 ? (
          <div className="space-y-4">
            {upcomingSessions.map(session => (
              <SessionCard 
                key={session.id} 
                session={session} 
                onCancel={handleBookingCancel}
              />
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl text-center border border-blue-100">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No upcoming sessions</h3>
            <p className="text-gray-600 mb-4">You don't have any scheduled mentoring sessions yet.</p>
            <a 
              href="/mentors" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Browse Mentors
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
      
      {cancelledSessions.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Past Sessions</h2>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {cancelledSessions.length} completed
            </span>
          </div>
          <div className="space-y-4">
            {cancelledSessions.map(session => (
              <SessionCard 
                key={session.id} 
                session={session} 
                onCancel={handleBookingCancel}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}