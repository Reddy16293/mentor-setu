import { Link } from 'react-router-dom';

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img 
        src={mentor.image} 
        alt={mentor.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{mentor.name}</h3>
          <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">
            <span className="font-bold mr-1">{mentor.rating}</span>
            <span>★</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{mentor.bio}</p>
        <p className="text-lg font-semibold mb-4">${mentor.price}/session</p>
        
        <Link 
          to={`/mentors/${mentor.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}