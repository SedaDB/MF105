import { createBrowserRouter } from 'react-router-dom';
import { Home, Search, Reservation, NotFound } from '../pages';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/reservations",
    element: <Reservation />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]); 