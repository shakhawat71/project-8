import { Outlet } from 'react-router-dom';
import Navbar from '../Nav Bar/NavBar';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;