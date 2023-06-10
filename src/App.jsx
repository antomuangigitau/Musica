import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SharedLayout, Home, Collections, Albums, Error } from './pages';

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
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="m-x" id="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
