import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Apps from './App';
import Installation from './pages/Installation';
import AppDetails from './pages/AppDetails';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => (await fetch("/data8.json")).json(),
      },
      {
        path: "apps",
        element: <Apps />,
        loader: async () => (await fetch("/data.json")).json(),
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "app/:id",
        element: <AppDetails />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
