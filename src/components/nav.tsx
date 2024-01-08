import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heartIcon from '../assets/Icons/heart.png';
import searchIcon from '../assets/Icons/search.png';
import shoppingIcon from '../assets/Icons/shopping-cart.png';
import hamburgerIcon from '../assets/Icons/hamburger.png';

const Navigation: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    // Toggle overflow hidden on the body to prevent scrolling of main content
    if (!showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-5 px-4 pl-4 lg:px-40">
        <div className="flex items-center">
          <Link to="/" className="text-2xl lg:text-2xl  mr-auto">Miralou</Link>
        </div>
        <nav className="lg:flex w-full lg:w-auto hidden lg:block">
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
            </li>
            <li>
              <Link to="/product" className="text-gray-600 hover:text-gray-800">Product</Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <div className="lg:flex hidden gap-4 lg:gap-8">
            <button>
              <img src={heartIcon} alt="Heart Icon" />
            </button>
            <button>
              <img src={searchIcon} alt="Search Icon" />
            </button>
            <button>
              <img src={shoppingIcon} alt="Shopping Icon" />
            </button>
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            <img src={hamburgerIcon} alt="Menu Icon" style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      </div>
      {/* Sidebar menu for smaller screens */}
      {showMenu && (
        <div className="lg:hidden fixed top-0 left-0 w-56 bg-white h-full z-50 shadow-lg">
          <ul className="flex flex-col py-6 pl-6 mt-4">
            <li className='pb-2'>
              <Link to="/" className="text-gray-800 hover:text-gray-900 py-3 text-lg">Home</Link>
            </li>
            <li className='pb-2'>
              <Link to="/shop" className="text-gray-800 hover:text-gray-900 py-3 text-lg">Shop</Link>
            </li>
            <li className='pb-2'>
              <Link to="/product" className="text-gray-800 hover:text-gray-900 py-3 text-lg">Product</Link>
            </li>
            <li className='pb-2'>
              <Link to="/blog" className="text-gray-800 hover:text-gray-900 py-3 text-lg">Blog</Link>
            </li>
            <li className='pb-2'>
              <Link to="/about" className="text-gray-800 hover:text-gray-900 py-3 text-lg">About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
