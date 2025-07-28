import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Transform Your Career
          </span><br />
          With Expert Mentorship
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Get personalized 1-on-1 guidance from industry leaders to accelerate your learning and achieve your goals faster.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link 
            to="/mentors" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Find Your Mentor
          </Link>
          <Link 
            to="#" 
            className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Become a Mentor
          </Link>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-blue-100 rounded-3xl opacity-20"></div>
          </div>
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Mentorship session" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose MentorSetu.ai</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Vetted Experts</h3>
            <p className="text-gray-600">
              Our mentors are carefully selected industry professionals with proven track records and exceptional mentoring skills.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Book sessions at your convenience with our easy scheduling system that works across time zones.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Tailored Guidance</h3>
            <p className="text-gray-600">
              Get personalized advice and actionable insights tailored to your specific goals and challenges.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of professionals who have accelerated their growth with personalized mentorship.
          </p>
          <Link 
            to="/mentors" 
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Browse Mentors
          </Link>
        </div>
      </div>
    </div>
  );
}