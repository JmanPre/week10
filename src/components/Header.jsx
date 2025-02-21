import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/team"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Team
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/resources"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Resources
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
