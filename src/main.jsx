import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/home/index.jsx';
import Game from './pages/game'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/game',
        element: <Game />,
      },
      // {
      //   path: '/Blog',
      //   element: <Blog />,
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
