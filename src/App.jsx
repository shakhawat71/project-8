import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

const Apps = () => {
  const games = useLoaderData();
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Filter games based on search term
    if (value.trim() === "") {
      // If search is empty, show all games
      setFilteredGames(games);
    } else {
      const filtered = games.filter(game =>
        game.title.toLowerCase().includes(value.toLowerCase()) ||
        game.companyName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    setFilteredGames(games); // Reset to show all games
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="w-full py-16 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            All Games
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Explore all {games.length} amazing games developed by HERO.IO
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative w-full md:w-96 mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search games by title or developer..."
              className="text-black w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-black hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          
          {/* Games Count */}
          <p className="text-center mt-4 text-gray-600">
            {searchTerm ? (
              <>Showing {filteredGames.length} results for "<span className="font-semibold">{searchTerm}</span>"</>
            ) : (
              <>Total {games.length} games available</>
            )}
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredGames.map((app) => (
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

                <div className="flex items-center gap-1 bg-orange-200 px-2 rounded-full text-orange-500 font-medium">
                  <FontAwesomeIcon icon={faStar} /> {app.ratingAvg}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredGames.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No games found</h3>
            <p className="text-gray-500">Try a different search term</p>
            <button
              onClick={clearSearch}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;