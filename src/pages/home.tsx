import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/Images/hero 1.png';
import YellowButton from '../components/button';
import product from '../assets/Images/cream.png';
import { CategoryCard} from '../components/CategoryCard';
import { AboutCard } from '../components/AboutCard';
import NormalButton from '../components/button_normal';
import about_image from '../assets/Images/Home.png';
import contact_image from '../assets/Images/black_creams.png'

type Data = {
  categories:{
    id: number
    image: string
    name: string
  }[]
  new_arrivals:{
    id: number
    image: string
    name: string
    price: number
  }[]
}
const Home: React.FC = () => {

  const about_categories = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    category: 'product',
    img: product,
  }));


  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch("https://miralou-api.sagarlama.com/api/home")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData({
          categories: [],
          new_arrivals: [],
        });
      });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center">
        <img src={backgroundImage} alt="flower" className="w-full h-auto squared-lg" />
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

      <section className="container mx-auto mt-10 flex flex-wrap justify-between p-5">
  {data?.categories ? (
    data.categories.map((category, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
        <div className="mx-auto relative">
          <img src={category.image} alt={category.name} className="w-full h-auto mt-5 squared-lg" />
          <div className='absolute -bottom-8 left-0 right-0 max-w-40 bg-gray-200 mx-auto px-4 py-4 text-center'>
            {category.name}
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  )}
</section>

<section>
  <div className='container mx-auto py-9 mt-10'>
    <div className='relative flex flex-col items-center justify-center text-center'>
      <h1 className="text-3xl font-bold mb-4">New Arrivals</h1>
      <p className="text-gray-600 pl-20 pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi enim. Duis in tortor sit amet turpis rutrum fermentum in non arcu. Praesent porta auctor odio a suscipit. Quisque sagittis suscipit ultricies.</p>
    </div>
  </div>

  
  <div className="container mx-auto mt-10 flex flex-wrap justify-center p-5">
          {data?.new_arrivals.map((new_arrival) => (
            <CategoryCard new_arrival={new_arrival} />
          ))}
          <div className='mt-5'>
            <NormalButton/>
          </div>
        </div>

</section>

<section>


<div className="flex flex-col md:flex-row items-center md:items-start p-4 mt-10 md:p-20">
  <div className="mb-2 md:mr-8 md:w-1/2 md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto md:mx-0">
    <img src={about_image} alt="About us" className="w-full md:w-10/12 h-auto" />
  </div>
  <div className="w-full md:w-1/2 md:ml-0 md:mt-10 text-center md:text-left md:ml-10 lg:ml-5 xl:ml-10">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">About Miralou</h1>
    <p className="text-sm md:text-base lg:text-lg pt-2 md:pt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. Donec pharetra turpis sit amet felis tempus placerat. Suspendisse cursus fringilla sapien ut mattis. Aenean bibendum metus est, vitae egestas massa elementum vitae. Fusce eleifend urna nec est finibus, nec
    </p>
    <p className="text-sm md:text-base lg:text-lg pt-4 md:pt-6">
      Duis neque velit, posuere sed mauris eu, ullamcorper convallis elit. Sed posuere volutpat mauris, non venenatis est ultrices a. Ut sit amet sapien dapibus lectus suscipit gravida. Fusce a justo dolor.
    </p>
    <p className="text-sm md:text-base lg:text-lg pt-4 md:pt-6">
      Pellentesque nec neque in augue vulputate congue at sit amet ante. Pellentesque euismod est at sapien suscipit, at blandit diam gravida. In est lacus, convallis eget dui ut, bibendum fermentum velit. Praesent et consequat elit.
    </p>
  </div>
</div>

</section>

<section>
<div className='container mx-auto py-9 mt-10'>
    <div className='relative flex flex-col items-center justify-center text-center'>
      <h1 className="text-3xl font-bold mb-4">About Mirlaou</h1>
      <p className="text-gray-600 pl-20 pr-20 md:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. </p>
    </div>
  </div>

  <div className="container mx-auto flex flex-wrap justify-center p-5">
          {about_categories.map((category) => (
            <AboutCard key={category.id} category={category} />
          ))}
          </div>
  
</section>

<section>
<div className="flex flex-col md:flex-row h-auto">
  {/* Left side */}
  <div className="flex-1 bg-blue-900 text-white p-4 md:p-8 flex flex-col justify-center items-center ">
    <h2 className="text-2xl max:w-1/3 font-bold mb-2 md:mb-4 max-w-md">Get Our Emails For Info On New
Items, Sales and More</h2>
    <p className="hidden md:block max-w-md">Subscribe to receive 10% off your next purchase.
Plus hear about new arrivals and offers</p>
    <form className="flex flex-row w-full max-w-md mt-4 bg-white">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full mr-2 py-2 px-8 mb-2 border-none border-0 text-black"
      />
      <button
        type="submit"
        className="w-full bg-blue-900 text-white m-1  hover:bg-blue-900"
      >
        Subscribe
      </button>
    </form>
  </div>

  {/* Right side */}
  <div className="flex-2 bg-cover bg-center h-48 md:h-64 lg-h-auto">
    <img src={contact_image} alt="Contact" className="w-full h-full object-cover" />
  </div>
</div>

</section>

<section>
<footer className="bg-gray-900 text-white p-8">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0">
        <h3 className="text-2xl font-bold">Miralou</h3>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex flex-wrap">
        <div className="mr-4 mb-2">
          <a href="#" className="text-sm hover:text-gray-500">Home</a>
        </div>
        <div className="mr-4 mb-2">
          <a href="#" className="text-sm hover:text-gray-500">About Us</a>
        </div>
        <div className="mr-4 mb-2">
          <a href="#" className="text-sm hover:text-gray-500">Services</a>
        </div>
        <div className="mr-4 mb-2">
          <a href="#" className="text-sm hover:text-gray-500">Contact</a>
        </div>
      </div>
    </div>
  </div>
</footer>

</section>
    </div>
  );
};

export default Home;
