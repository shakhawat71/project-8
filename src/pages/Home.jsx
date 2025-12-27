import { useLoaderData, useNavigate } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  const games = useLoaderData();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-0 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          We Build <br />{' '}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{' '}
          Apps
        </h1>
        <p className="text-lg md:text-xl text-[#627382] max-w-3xl mx-auto mb-8">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-10">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-black font-bold rounded-lg hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-200 w-full sm:w-auto justify-center group"
          >
            <img className="w-7" src="/src/assets/Image/playstore.png" alt="Google Play" />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-black font-bold rounded-lg hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-200 w-full sm:w-auto justify-center group"
          >
            <img className="w-8" src="/src/assets/Image/app store.png" alt="App Store" />
            App Store
          </a>
        </div>

        {/* Mobile Preview Section */}
        <section className="relative w-full flex justify-center items-center mt-20 mb-0">
          {/* Left Icons */}
          <img
            src="/src/assets/Image/Ellipse3.png"
            className="absolute left-[6%] top-[18%] w-16 h-16 hidden lg:block"
            alt=""
          />
          <img
            src="/src/assets/Image/Ellipse2.png"
            className="absolute left-[-1%] top-[45%] w-16 h-16 hidden lg:block"
            alt=""
          />
          <img
            src="/src/assets/Image/Ellipse1.png"
            className="absolute left-[0%] bottom-[10%] w-16 h-16 hidden lg:block"
            alt=""
          />

          {/* iPhone Mockup */}
          <img
            src="/src/assets/Image/iphone.png"
            className="w-65 sm:w-75 md:w-85 lg:w-95 z-10"
            alt="App Preview"
          />

          {/* Right Icons */}
          <img
            src="/src/assets/Image/Ellipse4.png"
            className="absolute right-[6%] top-[18%] w-16 h-16 hidden lg:block"
            alt=""
          />
          <img
            src="/src/assets/Image/Ellipse5.png"
            className="absolute right-[-1%] top-[45%] w-16 h-16 hidden lg:block"
            alt=""
          />
          <img
            src="/src/assets/Image/Ellipse6.png"
            className="absolute right-[0%] bottom-[10%] w-16 h-16 hidden lg:block"
            alt=""
          />
        </section>
      </section>

      {/* Trusted Section */}
      <section className="w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Trusted By Millions, Built For You</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div>
            <p className=" text-sm mt-1">Total Downloads</p>
            <p className="text-4xl font-extrabold">29.6M</p>
            <p className="text-xs mt-1">21% More Than Last Month</p>
          </div>
          <div>
            <p className=" text-sm mt-1">Total Reviews</p>
            <p className="text-4xl font-extrabold">906K</p>
            <p className="text-xs mt-1">46% More Than Last Month</p>
          </div>
          <div>
            <p className=" text-sm mt-1">Active Apps</p>
            <p className="text-4xl font-extrabold">132+</p>
            <p className="text-xs mt-1">31 More Will Launch</p>
          </div>
        </div>
      </section>

      {/* Trending games Section */}
      <section className="w-full py-20 bg-[#F8F9FC]">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Trending games
      </h2>
      <p className="text-[#627382] max-w-2xl mx-auto">
        Explore All Trending games on the Market developed by HERO.IO
      </p>
    </div>

    {/* games Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {games.map((app) => (
        <div
          key={app.id}
          className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 cursor-pointer"
          onClick={() => navigate(`/app/${app.id}`, { state: { app } })}
        >
          {/* App Image */}
          <div className="h-48 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
            <img
              src={app.image}
              alt={app.title}
              className="h-full object-contain"
            />
          </div>

          {/* App Title */}
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            {app.title}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 px-2 rounded-full bg-green-200 text-[#00D390] font-medium">
              <FontAwesomeIcon icon={faDownload} /> {Math.round(app.downloads / 1000)}K
            </div>

            <div className="flex items-center  gap-1 bg-orange-200 px-2 rounded-full text-orange-500 font-medium">
              <FontAwesomeIcon icon={faStar} /> {app.ratingAvg}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="flex justify-center mt-16">
      <button
        className="px-10 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-xl hover:opacity-90 transition"
        onClick={() => navigate("/apps")} >
      Show All
      </button>
    </div>

  </div>
</section>

    </div>
  );
};

export default Home;
