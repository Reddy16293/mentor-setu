import { useState } from 'react';
import { cancelBooking } from '../services/api';

export default function SessionCard({ session, onCancel }) {
  const [isCancelling, setIsCancelling] = useState(false);
  const [error, setError] = useState('');

  const handleCancel = async () => {
    if (window.confirm('Are you sure you want to cancel this session?')) {
      setIsCancelling(true);
      setError('');
      
      try {
        await cancelBooking(session.id);
        if (onCancel) onCancel();
      } catch (err) {
        setError('Failed to cancel booking. Please try again.');
      } finally {
        setIsCancelling(false);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{session.mentorName}</h3>
          <p className="text-gray-600">
            {new Date(session.date).toLocaleDateString()} at {session.time}
          </p>
          <p className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
            session.status === 'confirmed' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {session.status}
          </p>
        </div>
        
        {session.status === 'confirmed' && (
          <button
            onClick={handleCancel}
            disabled={isCancelling}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition disabled:opacity-50"
          >
            {isCancelling ? 'Cancelling...' : 'Cancel'}
          </button>
        )}
      </div>
      
      {error && (
        <div className="mt-3 text-red-600 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}