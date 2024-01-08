import React from 'react';
import backgroundImage from '../assets/Images/hero 1.png';
import YellowButton from '../components/button'; 

const Home: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <img src={backgroundImage} alt="flower" />
      <div className="absolute w-full">
        <div className="container mx-4 md:mx-20 lg:mx-40 flex h-full">
          <div className="max-w-full lg:max-w-80">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 pb-2 md:pb-4">
              Scandinavian Supremacy
            </h1>
            <p className="font-semibold mt-3 mb-8 text-xs md:text-sm">
                At Miralou we have turned traditional skin care ingredients lists on its head
            </p>
            <YellowButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
