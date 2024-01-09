import React from 'react';
import backgroundImage from '../assets/Images/hero 1.png';
import YellowButton from '../components/button';
import image_1 from '../assets/Images/Rectangle 1.png'
import image_2 from '../assets/Images/Rectangle 1 (1).png'
import image_3 from '../assets/Images/Rectangle 1 (2).png'
import image_4 from '../assets/Images/Rectangle 1 (3).png'

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center">
        <img src={backgroundImage} alt="flower" className="w-full h-auto rounded-lg" />
        <div className="absolute">
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
      </section>

      {/* Container with Four Images */}
      <section className="container mx-auto mt-10 flex items-center justify-between p-20">
        <div style={{ flex: '1' }} className="p-3">
        <div className="mx-auto relative">
            <img src={image_1} alt="Women" className="w-full h-auto squared-lg" />
            <div className='absolute -bottom-8 left-0 right-0 max-w-40 bg-gray-200 mx-auto px-4 py-4 text-center'>
              For Women
            </div>
          </div>
        </div>
        <div style={{ flex: '1' }} className="p-3">
        <div className="mx-auto relative">
            <img src={image_2} alt="Men" className="w-full h-auto squared-lg" />
            <div className='absolute -bottom-8 left-0 right-0 max-w-40 bg-gray-200 mx-auto px-4 py-4 text-center'>
              For Men
            </div>
          </div>
        </div>
        <div style={{ flex: '1' }} className="p-3">
        <div className="mx-auto relative">
            <img src={image_3} alt="Pregnant" className="w-full h-auto squared-lg" />
            <div className='absolute -bottom-8 left-0 right-0 max-w-40 bg-gray-200 mx-auto px-4 py-4 text-center'>
              For Pregnant
            </div>
          </div>
        </div>
        <div style={{ flex: '1' }} className="p-3">
        <div className="mx-auto relative">
            <img src={image_4} alt="Children" className="w-full h-auto squared-lg" />
            <div className='absolute -bottom-8 left-0 right-0 max-w-40 bg-gray-200 mx-auto px-4 py-4 text-center'>
              For Children
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
