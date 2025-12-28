import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import downloadIcon from '../assets/Image/download.png';
import starIcon from '../assets/Image/star.png';
import reviewIcon from '../assets/Image/review.png';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AppDetails = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const app = location.state?.app;
  const [installed, setInstalled] = useState(false);

  // Check if app is already installed on component mount
  useEffect(() => {
    if (app) {
      const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
      const isInstalled = installedApps.some(installedApp => installedApp.id === app.id);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInstalled(isInstalled);
    }
  }, [app]);

  if (!app) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-purple-500 mb-6 animate-bounce">Oops! App Not Found</h1>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        The app you are looking for does not exist or has been removed. 
        Please check out our collection of amazing apps.
      </p>
      <button
        onClick={() => navigate("/apps")}
        className="px-8 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:opacity-90 transition transform hover:scale-105"
      >
        Browse Apps
      </button>
    </div>
  );
}


  const handleInstall = () => {
    // Get existing installed apps
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    
    // Check if already installed
    const isAlreadyInstalled = installedApps.some(installedApp => installedApp.id === app.id);
    
    if (!isAlreadyInstalled) {
      // Add to installed apps
      const appWithTimestamp = {
        ...app,
        installedDate: new Date().toISOString(),
        version: "1.0.0" // You can make this dynamic if needed
      };
      
      installedApps.push(appWithTimestamp);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully! 🎮`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const formatDownloads = (num) =>
    num >= 1000000 ? (num / 1000000).toFixed(1) + "M" : (num / 1000).toFixed(0) + "K";

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-col gap-10">
      
      {/* App Image, info and install */}
      <div className="flex flex-col lg:flex-row gap-10 justify-left items-center">
        <div className="shrink-0">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-80 object-contain rounded-xl border border-gray-200" />
      </div>

      <div>
            <div className="border-b border-black mb-4">
                <h1 className="text-4xl text-black font-bold mb-4">{app.title}</h1>
                <p className="mb-6"><span className="text-gray-700 ">Developed by</span> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold ">{app.companyName}</span></p>
            </div>
          <div className="flex flex-wrap gap-4 mb-4">
            
            <div className="px-3 flex justify-center flex-col text-black font-medium">
                <img className="w-10 mb-3 h-10" src={downloadIcon} alt="" />
                <p className="mb-3">Downloads</p>
                <p className="text-4xl font-bold">{formatDownloads(app.downloads)}</p>
            </div>
            <div className="px-3 flex justify-center  flex-col text-black font-medium">
                <img className="w-10 mb-3 h-10" src={starIcon} alt="" />
                <p className="mb-3">Average Ratings</p>
                <p className="text-4xl font-bold">{app.ratingAvg}</p>
            </div>
            <div className="px-3 text-black flex flex-col justify-center">
                <img className="h-10 mb-3 w-10" src={reviewIcon} alt="" />
                <p className="mb-3">Total Reviews</p>
                <p className="text-4xl font-bold">{app.reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-[40%] md:px-[20%] py-3 rounded-lg font-semibold text-white transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90"
            }`}
          >
            {installed ? "Installed ✓" : "Install"}
          </button>

          {/* Toast */}
          <ToastContainer position="top-right" autoClose={3000} />
      </div>
      </div>

      
    <div className="flex-1 flex flex-col justify-between">
        

        {/* App Reviews Chart */}
        <div className="w-full lg:w-full mt-10 lg:mt-6 justify-center md:justify-left">
            <h2 className="text-2xl font-bold mb-4 text-black">Ratings</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical"
            data={app.ratings.slice().reverse().map(r => ({
            name: r.name,
            count: r.count}))}
            margin={{ top: 10, right: 30, left: 60, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            width={60}
            tick={{ fontSize: 14 }}/>
            <Tooltip />
            <Bar dataKey="count" fill="#632EE3" barSize={24} radius={[0, 4, 4, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
        <div>
            <p className="text-black text-2xl font-bold mb-2">Description</p>
            <p className="text-gray-700">{app.description}</p>
        </div>
    
    </div>
    
  );
};

export default AppDetails;