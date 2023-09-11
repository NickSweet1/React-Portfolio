import React from "react";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="sticky top-0 z-50 bg-tan">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="hidden lg:block h-16 w-auto"
              src="/images/nick-sweet-logo.png"
              alt="Logo"
            />
          </div>

          {/* Navigation links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#AboutME"
              onClick={() => handlePageChange('AboutMe')}
              className="text-beige hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About Me
            </a>
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className="text-beige hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Portfolio
            </a>
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className="text-beige hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Resume
            </a>
            <a
              href="#Contact"
              onClick={() => handlePageChange('Contact')}
              className="text-beige hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;