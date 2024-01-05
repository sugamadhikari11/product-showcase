// components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import heartIcon from '../Icons/heart.png';
import searchIcon from '../Icons/search.png';
import shoppingIcon from '../Icons/shopping-cart.png';



const Navigation: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 pl-10 pr-4">
        <div className='ml-10'>
          <Link to="/" className="text-xl font-semibold text-gray-800">Miralou</Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
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
        <div className="flex gap-8">

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
      </div>
    </header>
  );
};

export default Navigation;
