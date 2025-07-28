import { useState } from 'react';
import BookingForm from './BookingForm';

export default function MentorProfile({ mentor, onBookingSuccess }) {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={mentor.image} 
            alt={mentor.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold">{mentor.name}</h2>
            <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded">
              <span className="font-bold mr-1">{mentor.rating}</span>
              <span>★</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {mentor.expertise.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
          
          <p className="text-gray-700 mb-6">{mentor.fullBio}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-500">SESSIONS COMPLETED</h4>
              <p className="text-2xl font-bold">{mentor.sessionsCompleted}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500">PRICE PER SESSION</h4>
              <p className="text-2xl font-bold">${mentor.price}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Availability</h3>
            <div className="flex flex-wrap gap-2">
              {mentor.availability.map((day, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {day}
                </span>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setShowBookingForm(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Book a Session
          </button>
        </div>
      </div>
      
      {showBookingForm && (
        <BookingForm 
          mentor={mentor} 
          onClose={() => setShowBookingForm(false)}
          onBookingSuccess={onBookingSuccess}
        />
      )}
    </div>
  );
}