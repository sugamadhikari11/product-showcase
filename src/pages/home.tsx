import React from 'react';
import backgroundImage from '../assets/Images/hero 1.png'



const Home: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <img src= {backgroundImage} alt="Background Image"></img>
       <div className="absolute">
        <div className="container mx-auto">
          <div className='max-w-48'>
          <h1 className='text-5xl font-bold text-gray-800 ml-20'>Scandinavian Supremacy</h1>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Home;
