import { Link } from 'react-router-dom';

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <img 
          src={mentor.image} 
          alt={mentor.name} 
          className="w-full h-40 object-contain p-2"

        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full">
            <span className="font-bold mr-1">{mentor.rating}</span>
            <span className="text-yellow-300">★</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
          <span className="text-blue-600 font-semibold">${mentor.price}/hr</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{mentor.bio}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
          {mentor.sessionsCompleted}+ sessions
        </div>
        
        <Link 
          to={`/mentors/${mentor.id}`}
          className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-center py-2 rounded-lg transition-all duration-300 font-medium"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}