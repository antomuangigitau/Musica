import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  SharedLayout,
  Home,
  Collections,
  Albums,
  Error,
  Search,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'collections',
        element: <Collections />,
      },
      {
        path: 'playlist/:id',
        element: <Albums />,
      },
      {
        path: 'search',
        element: <Search />,
      },

      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
