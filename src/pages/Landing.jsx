import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
        Find the Perfect Mentor for Your Journey
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
        Get personalized 1-on-1 guidance from industry experts to accelerate your learning and career growth.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          to="/mentors" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg"
        >
          Find a Mentor
        </Link>
        <Link 
          to="#" 
          className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition shadow-lg"
        >
          Become a Mentor
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 text-4xl mb-4">👨‍🏫</div>
          <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
          <p className="text-gray-600">Connect with experienced professionals across various industries.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 text-4xl mb-4">⏱️</div>
          <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
          <p className="text-gray-600">Book sessions at your convenience with our easy scheduling system.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 text-4xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
          <p className="text-gray-600">Get tailored advice to help you achieve your specific goals.</p>
        </div>
      </div>
    </div>
  );
}