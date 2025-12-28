import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import logo from '../../assets/Image/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
    setIsOpen(false);
  };

  const handleContributionClick = () => {
    window.open('https://github.com/shakhawat71', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo  */}
          <div
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : 'text-gray-600'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? 'bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : 'text-gray-600'
              }
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? 'bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
                  : 'text-gray-600'
              }
            >
              Installation
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Contribution Button (Desktop) */}
          <button
            onClick={handleContributionClick}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            <span className="ml-1">Contribute</span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-lg bg-white shadow-lg py-4 flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="px-4 text-gray-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              onClick={() => setIsOpen(false)}
              className="px-4 text-gray-600"
            >
              Apps
            </NavLink>

            <NavLink
              to="/installation"
              onClick={() => setIsOpen(false)}
              className="px-4 text-gray-600"
            >
              Installation
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
