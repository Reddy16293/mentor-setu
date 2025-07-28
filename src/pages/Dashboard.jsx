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
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Sessions</h2>
        
        {bookings.filter(b => b.status === 'confirmed').length > 0 ? (
          <div>
            {bookings
              .filter(b => b.status === 'confirmed')
              .map(session => (
                <SessionCard 
                  key={session.id} 
                  session={session} 
                  onCancel={handleBookingCancel}
                />
              ))}
          </div>
        ) : (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-gray-600">You don't have any upcoming sessions.</p>
            <a 
              href="/mentors" 
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Browse mentors
            </a>
          </div>
        )}
      </div>
      
      {bookings.filter(b => b.status === 'cancelled').length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cancelled Sessions</h2>
          {bookings
            .filter(b => b.status === 'cancelled')
            .map(session => (
              <SessionCard 
                key={session.id} 
                session={session} 
                onCancel={handleBookingCancel}
              />
            ))}
        </div>
      )}
    </div>
  );
}