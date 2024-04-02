import { RouterConfig } from '../apis/types';
import AppLayout from '../components/layout/appLayout';
import Contact from '../pages/contact';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';

export const routerConfig: RouterConfig[] = [
    // here you can configure the routes as you like
  {
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        element: <Home/>,
        path: '/',
      },
      {
        element: <Contact/>,
        path: '/contact',
      },
    ],
  },
  
];
