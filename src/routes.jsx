import { createBrowserRouter, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Cuchi from './pages/Cuchi';
import Mongsil from './pages/Mongsil';
import Monggun from './pages/Monggun';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/welcome" />,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'cuchi', element: <Cuchi /> },
      { path: 'mongsil', element: <Mongsil /> },
      { path: 'monggun', element: <Monggun /> },
    ],
  },
]);

export default router;
