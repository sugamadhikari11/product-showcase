import React from 'react';

const YellowButton: React.FC = () => {
  return (
    <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-4 md:py-2 md:px-12 squared">
      Buy Now
    </button>
  );
};

export default YellowButton;
