import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/photo1.jpg"
                alt="Abhinav Sinha"
                className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-indigo-600 object-cover"
              />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block animate-fade-in-up">
                Hi, I'm Abhinav Sinha
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
                Full Stack Developer
              </span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl leading-relaxed">
              I build modern web applications with React, Node.js, and MongoDB.
              Passionate about creating beautiful, responsive, and user-friendly
              experiences.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
              <div className="rounded-md shadow">
                <Link
                  to="/projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition duration-200 md:py-4 md:text-lg md:px-10"
                >
                  View Projects
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/contacts"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transform hover:scale-105 transition duration-200 md:py-4 md:text-lg md:px-10"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/Abhinav-Sinha-XO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transform hover:scale-110 transition duration-200"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinav-sinha-08487a1a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transform hover:scale-110 transition duration-200"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a
            href="https://x.com/Shiva_n0t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 transform hover:scale-110 transition duration-200"
          >
            <FaTwitter className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
