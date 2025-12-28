import { Outlet } from 'react-router-dom';
import Navbar from '../Nav Bar/NavBar';
import Footer from '../Footer/Footer';
import GlobalLoader from '../GlobalLoader/GlobalLoader';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar />
      <GlobalLoader /> {/* Loader works inside router context */}
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
