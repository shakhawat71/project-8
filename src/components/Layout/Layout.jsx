// src/components/Layout.jsx - Update this file
import { Outlet } from 'react-router-dom';
import Navbar from '../Nav Bar/NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;