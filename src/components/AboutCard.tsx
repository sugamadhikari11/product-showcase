

export const AboutCard = (props: any) => {
  const category = props.category;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
        <div className="mx-auto relative">
      <img className="w-full h-auto squared-lg md:w-10/12" src={category.img} alt={category.category} />
      </div>
      <div className="flex items-center mt-2">
        
        <p className="text-xs md:text-sm lg:text-base">25th July</p>
      </div>
      <h2 className='font-semibold text-xs md:text-base lg:text-lg'>Anti-Acne serum</h2>
      <p className='text-xs md:text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis</p>
    </div>
  );
};

