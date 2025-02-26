import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";

  return (
    <nav
      className={`${
        isProjectsPage ? "bg-gray-900" : "bg-white"
      } shadow-lg fixed w-full z-10 top-0`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4">
              <span
                className={`font-semibold ${
                  isProjectsPage ? "text-white" : "text-gray-500"
                } text-lg`}
              >
                Portfolio
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`py-4 px-2 ${
                isProjectsPage
                  ? "text-white hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-900"
              } transition duration-300`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`py-4 px-2 ${
                isProjectsPage
                  ? "text-white hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-900"
              } transition duration-300`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`py-4 px-2 ${
                isProjectsPage
                  ? "text-white hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-900"
              } transition duration-300`}
            >
              About
            </Link>
            <Link
              to="/contacts"
              className={`py-4 px-2 ${
                isProjectsPage
                  ? "text-white hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-900"
              } transition duration-300`}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className={`w-6 h-6 ${
                  isProjectsPage
                    ? "text-white hover:text-gray-300"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} ${
            isProjectsPage ? "bg-gray-900" : "bg-white"
          } w-full`}
        >
          <Link
            to="/"
            className={`block py-2 px-4 text-sm ${
              isProjectsPage
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-200 text-gray-500"
            } transition duration-300`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`block py-2 px-4 text-sm ${
              isProjectsPage
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-200 text-gray-500"
            } transition duration-300`}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`block py-2 px-4 text-sm ${
              isProjectsPage
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-200 text-gray-500"
            } transition duration-300`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block py-2 px-4 text-sm ${
              isProjectsPage
                ? "hover:bg-gray-800 text-white"
                : "hover:bg-gray-200 text-gray-500"
            } transition duration-300`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
