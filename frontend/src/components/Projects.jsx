const Projects = () => {
  return (
    <div className="flex min-h-screen pt-20 pb-5">
      <div className="flex flex-col md:flex-row bg-black w-full h-150 justify-between p-8 gap-8 ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src="./Weather.png"
            alt="Project"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Weather</div>
            <p className="text-gray-700 text-base">
              Real-Time Weather Updates – Displays the current temperature,
              humidity, wind speed, and atmospheric pressure for a selected
              location.
            </p>
          </div>
          <div className="px-6 pt-1 pb-2 ">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind
            </span>
            <div className="mt-4">
              <a
                href="https://weather-app-xo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src="./paytm.png"
            alt="Project"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Invertis-payments</div>
            <p className="text-gray-700 text-base">
              Easy Money Transfers – Send and receive money instantly using UPI,
              bank accounts, or wallets.
            </p>
          </div>
          <div className="px-6 pt-8 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind
            </span>
            <div className="mt-4">
              <a
                href="https://ephemeral-youtiao-46cf3b.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src="../Spotify.png"
            alt="Project"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Spotify-Clone</div>
            <p className="text-gray-700 text-base">
              Music Streaming – Play high-quality music on demand with seamless
              streaming.
            </p>
          </div>
          <div className="px-6 pt-12 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind
            </span>
            <div className="mt-4">
              <a
                href="https://spotify-clone-gni9f7xjw-abhinav-sinhas-projects-dd096591.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
