import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MentorSetu.ai</Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/mentors" className="hover:underline">Find a Mentor</Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <a href="#" className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition">
                Become a Mentor
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}