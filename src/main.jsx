import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Apps from './App';
import Installation from './pages/Installation';
import AppDetails from './pages/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
                const res = await fetch("/data8.json");
                return res.json();
                },
      },
      {
        path: "apps",
        element: <Apps></Apps>,
      },
      {
        path: "installation",
        element: <Installation></Installation>,
      },
      {
        path: "app/:id",
        element: <AppDetails></AppDetails>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);