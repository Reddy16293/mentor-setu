import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Landing from './pages/Landing';
import MentorDirectory from './pages/MentorDirectory';
import MentorProfilePage from './pages/MentorProfilePage';
import Dashboard from './pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/mentors',
        element: <MentorDirectory />
      },
      {
        path: '/mentors/:id',
        element: <MentorProfilePage />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
]);