import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">Your Logo</div>
          <ul className="flex space-x-4">
            <li className="text-white hover:text-gray-300 transition duration-300">
              <a href="/">Home</a>
            </li>
            <li className="text-white hover:text-gray-300 transition duration-300">
              <a href="/about">About</a>
            </li>
            <li className="text-white hover:text-gray-300 transition duration-300">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
