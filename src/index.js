import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './Home';
import Private from './Private';
import Public from './Public';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicChat from './PublicChat';
import PrivateChat from './PrivateChat';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/private",
        element: <Private/>
    },
    {
      path: "/public",
      element: <Public/>
    },
    {
      path: "/publicChat",
      element: <PublicChat/>
    },
    {
      path: "/privateChat",
      element: <PrivateChat/>
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
