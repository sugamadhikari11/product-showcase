
import star from '../assets/Icons/star.png';

export const CategoryCard = (props: any) => {
  const category = props.category;

  return (
    <div className="w-full sm:p-2 md:w-1/2 lg:w-1/4 p-4">
      <img className="w-full h-auto squared-lg" src={category.img} alt={category.category} />
      <div className="flex items-center mt-2">
        <img src={star} alt="Review Icon" className="mr-2" />
        <p className="text-xs md:text-sm lg:text-base">1 Review</p>
      </div>
      <h2 className='font-semibold text-xs md:text-base lg:text-lg'>Anti-Acne serum</h2>
      <h2 className='font-semibold text-xs md:text-base lg:text-lg'>$4.99</h2>
    </div>
  );
};

