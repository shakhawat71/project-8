import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/Image/logo.png"
                alt="Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </span>
            </div>
            <p className="text-gray-400">
              Crafting innovative apps designed to make everyday life simpler, smarter, and more exciting.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/shakhawat71" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition hover:pl-2 duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/apps" className="text-gray-400 hover:text-white transition hover:pl-2 duration-200">
                  All Apps
                </a>
              </li>
              <li>
                <a href="/installation" className="text-gray-400 hover:text-white transition hover:pl-2 duration-200">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition hover:pl-2 duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition hover:pl-2 duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>support@hero.io</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FontAwesomeIcon icon={faPhone} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get notifications about new apps and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              />
              <button className="px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2024 HERO.IO. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;