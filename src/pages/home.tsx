import React from 'react';
import backgroundImage from '../assets/Images/hero 1.png'

const sectionStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px', 
};

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h2 className="text-center">Home Page</h2>
      </div>
    </div>
  );
};

export default Home;
