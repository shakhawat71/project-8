import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSort, faFilter, faDownload, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("size");
  const [sortOrder, setSortOrder] = useState("desc");
  const navigate = useNavigate();

  // Load installed apps from localStorage on component mount
  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInstalledApps(savedApps);
  }, []);

  // Handle uninstall
  const handleUninstall = (appId, appTitle) => {
    // Remove from localStorage
    const updatedApps = installedApps.filter(app => app.id !== appId);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    
    // Update state
    setInstalledApps(updatedApps);
    
    // Show toast notification
    toast.success(`${appTitle} uninstalled successfully! 🗑️`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Handle sort change
  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortBy(newSortBy);
      setSortOrder("desc");
    }
  };

  // Sort apps based on current sort criteria
  const sortedApps = [...installedApps].sort((a, b) => {
    let valueA, valueB;
    
    switch (sortBy) {
      case "name":
        valueA = a.title.toLowerCase();
        valueB = b.title.toLowerCase();
        break;
      case "date":
        valueA = new Date(a.installedDate);
        valueB = new Date(b.installedDate);
        break;
      case "size":
      default:
        valueA = a.size;
        valueB = b.size;
        break;
    }

    if (sortOrder === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  // Calculate total size
  const totalSize = installedApps.reduce((sum, app) => sum + app.size, 0);

  // Format number for display
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header Section */}
      <div className="w-full py-16 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Installation
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Manage all your installed applications in one place. Update, uninstall, or explore more apps.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats and Controls */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Stats */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {installedApps.length} {installedApps.length === 1 ? 'App' : 'Apps'} Installed
              </h2>
              <p className="text-gray-600">
                Total size: <span className="font-semibold">{(totalSize / 1024).toFixed(1)} GB</span>
              </p>
            </div>

            {/* Sort Controls */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleSortChange("name")}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${sortBy === "name" ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FontAwesomeIcon icon={faSort} />
                Name {sortBy === "name" && (sortOrder === "desc" ? "↓" : "↑")}
              </button>
              <button
                onClick={() => handleSortChange("size")}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${sortBy === "size" ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FontAwesomeIcon icon={faFilter} />
                Size {sortBy === "size" && (sortOrder === "desc" ? "↓" : "↑")}
              </button>
              <button
                onClick={() => handleSortChange("date")}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${sortBy === "date" ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FontAwesomeIcon icon={faSort} />
                Date {sortBy === "date" && (sortOrder === "desc" ? "↓" : "↑")}
              </button>
            </div>
          </div>
        </div>

        {/* Apps List */}
        {sortedApps.length > 0 ? (
          <div className="space-y-6">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* App Image */}
                  <div className="shrink-0">
                    <div 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gray-100 flex items-center justify-center cursor-pointer"
                      onClick={() => navigate(`/app/${app.id}`, { state: { app } })}
                    >
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* App Details */}
                  <div className="grow">
                    {/* Title and Developer */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {app.title}
                      </h3>
                      <p className="text-gray-600">
                        Developed by <span className="font-medium text-purple-600">{app.companyName}</span>
                      </p>
                    </div>

                    {/* App Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Size</p>
                        <p className="text-lg font-semibold text-gray-900">{app.size} MB</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Downloads</p>
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faDownload} className="text-green-500 text-sm" />
                          <p className="text-lg font-semibold text-gray-900">{formatNumber(app.downloads)}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Rating</p>
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faStar} className="text-orange-500 text-sm" />
                          <p className="text-lg font-semibold text-gray-900">{app.ratingAvg}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Installed</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {new Date(app.installedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleUninstall(app.id, app.title)}
                        className="px-6 py-3 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        Uninstall
                      </button>
                      <button 
                        onClick={() => navigate(`/app/${app.id}`, { state: { app } })}
                        className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </button>
                      <button className="px-6 py-3 bg-green-50 text-green-600 font-semibold rounded-lg hover:bg-green-100 transition-colors">
                        Update Available (v{app.version || "1.0.0"})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Apps Installed */
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <div className="text-gray-300 mb-6">
              <FontAwesomeIcon icon={faTimesCircle} className="w-24 h-24 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">No Apps Installed</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              You haven't installed any apps yet. Browse our collection and install your favorite apps to get started.
            </p>
            <a
              href="/apps"
              className="inline-block px-8 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse Apps
            </a>
          </div>
        )}

        {/* Storage Summary */}
        {installedApps.length > 0 && (
          <div className="mt-12 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Storage Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-2">Total Apps</p>
                <p className="text-3xl font-bold">{installedApps.length}</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-2">Total Size</p>
                <p className="text-3xl font-bold">{(totalSize / 1024).toFixed(1)} GB</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-sm opacity-90 mb-2">Average Rating</p>
                <p className="text-3xl font-bold">
                  {(installedApps.reduce((sum, app) => sum + app.ratingAvg, 0) / installedApps.length).toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;