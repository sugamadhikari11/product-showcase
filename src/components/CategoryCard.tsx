// CategoryCard.tsx
import React from 'react';

export const CategoryCard = (props: any) => {
  const new_arrival = props.new_arrival;

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-3">
      <div className="mx-auto relative">
        <img className="w-full h-48 object-cover squared-lg" src={new_arrival.image} alt={new_arrival.name} />
        <div className="flex items-center mt-2 ml-2">
          <p className="text-xs md:text-sm lg:text-base">{new_arrival.rating}</p>
        </div>
        <h2 className='font-semibold text-xs md:text-base lg:text-lg'>{new_arrival.name}</h2>
        <h2 className='font-semibold text-xs md:text-base lg:text-lg'>$ {new_arrival.price}</h2>
      </div>
    </div>
  );
};


