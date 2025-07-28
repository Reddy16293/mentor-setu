import { useState } from 'react';
import { cancelBooking } from '../services/api';

export default function SessionCard({ session, onCancel }) {
  const [isCancelling, setIsCancelling] = useState(false);
  
  const handleCancel = async () => {
    setIsCancelling(true);
    try {
      await cancelBooking(session.id);
      onCancel();
    } catch (error) {
      console.error("Failed to cancel booking:", error);
    } finally {
      setIsCancelling(false);
    }
  };

  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="p-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src={session.mentorImage} 
            alt={session.mentorName} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{session.mentorName}</h3>
            <div className="flex items-center mt-1">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[session.status]}`}>
                {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">{new Date(session.date).toLocaleDateString('en-US', { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric' 
            })}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Time</p>
            <p className="font-medium">
              {new Date(`2000-01-01T${session.time}`).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{session.duration}</p>
          </div>
        </div>
        
        {session.status === 'confirmed' && (
          <button
            onClick={handleCancel}
            disabled={isCancelling}
            className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-all duration-300 font-medium text-sm disabled:opacity-70"
          >
            {isCancelling ? 'Cancelling...' : 'Cancel Session'}
          </button>
        )}
      </div>
    </div>
  );
}