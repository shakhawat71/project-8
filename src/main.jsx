// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Apps from './App';
import Installation from './pages/Installation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "apps",
        element: <Apps></Apps>,
      },
      {
        path: "installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);