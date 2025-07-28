import { useState } from 'react';
import BookingForm from './BookingForm';

export default function MentorProfile({ mentor, onBookingSuccess }) {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <img 
            src={mentor.image} 
            alt={mentor.name} 
            className="w-full h-full min-h-96 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-lg">
            <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full">
              <span className="font-bold mr-1">{mentor.rating}</span>
              <span className="text-yellow-300">★</span>
            </div>
          </div>
        </div>
        
        <div className="p-8 md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{mentor.name}</h2>
              <p className="text-blue-600 font-medium">{mentor.title}</p>
            </div>
            <span className="text-2xl font-bold text-blue-600">${mentor.price}/hr</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {mentor.expertise.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="prose max-w-none text-gray-700 mb-8">
            {mentor.fullBio.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-600 mb-1">SESSIONS COMPLETED</h4>
              <p className="text-2xl font-bold text-gray-800">{mentor.sessionsCompleted}+</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-600 mb-1">EXPERIENCE</h4>
              <p className="text-2xl font-bold text-gray-800">{mentor.experienceYears} years</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-600 mb-1">LANGUAGES</h4>
              <p className="text-2xl font-bold text-gray-800">{mentor.languages.join(', ')}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Availability</h3>
            <div className="flex flex-wrap gap-3">
              {mentor.availability.map((day, index) => (
                <span 
                  key={index} 
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setShowBookingForm(true)}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg"
          >
            Book a Session
          </button>
        </div>
      </div>
      
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowBookingForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <BookingForm 
              mentor={mentor} 
              onClose={() => setShowBookingForm(false)}
              onBookingSuccess={onBookingSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
}