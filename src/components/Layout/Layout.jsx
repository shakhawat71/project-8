// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../Nav Bar/NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;