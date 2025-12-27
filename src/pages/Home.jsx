// src/pages/Home.jsx
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section for Home.jsx */}
      <section className="text-center py-12 md:py-20 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps
        </h1>
        <p className="text-lg md:text-xl text-[#627382] max-w-3xl mx-auto mb-8">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
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
        <section className="relative w-full flex justify-center items-center mt-20 mb-20">

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
    </div>
  );
};

export default Home;