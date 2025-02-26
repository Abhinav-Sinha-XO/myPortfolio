const Projects = () => {
  return (
    <div className="min-h-screen pt-20 pb-5 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Weather Project Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700">
            <div className="relative group">
              <img
                className="w-full h-56 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300"
                src="./Weather.png"
                alt="Weather Project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl text-white mb-3">
                Weather App
              </h3>
              <p className="text-gray-300 mb-4">
                Real-Time Weather Updates – Displays the current temperature,
                humidity, wind speed, and atmospheric pressure for a selected
                location.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                  #react
                </span>
                <span className="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full">
                  #tailwind
                </span>
              </div>
              <a
                href="https://weather-app-xo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Visit Website
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Invertis-payments Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700">
            <div className="relative group">
              <img
                className="w-full h-56 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300"
                src="./paytm.png"
                alt="Payments Project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl text-white mb-3">
                Invertis-payments
              </h3>
              <p className="text-gray-300 mb-4">
                Easy Money Transfers – Send and receive money instantly using
                UPI, bank accounts, or wallets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                  #react
                </span>
                <span className="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full">
                  #tailwind
                </span>
              </div>
              <a
                href="https://ephemeral-youtiao-46cf3b.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Visit Website
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Spotify Clone Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700">
            <div className="relative group">
              <img
                className="w-full h-56 object-contain brightness-90 group-hover:brightness-100 transition-all duration-300"
                src="../Spotify.png"
                alt="Spotify Clone"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl text-white mb-3">
                Spotify Clone
              </h3>
              <p className="text-gray-300 mb-4">
                Music Streaming – Play high-quality music on demand with
                seamless streaming.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                  #react
                </span>
                <span className="px-3 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full">
                  #tailwind
                </span>
              </div>
              <a
                href="https://spotify-clone-gni9f7xjw-abhinav-sinhas-projects-dd096591.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Visit Website
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
