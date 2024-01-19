import React, { useEffect, useState } from 'react';

const categories = [
  {
    value: "children",
    label: "Children"
  },
  {
    value: "women",
    label: "Women"
  },
  {
    value: "men",
    label: "Men"
  },
  {
    value: "preg-women",
    label: "Pregnant Women"
  }
]

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [data,setData] = useState()
  
  useEffect(() => {
    fetch("https://miralou-api.sagarlama.com/api/products")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  console.log(data)

  const handleChange = (e: any) => {
    if (e.target.value === selectedCategory) {
      setSelectedCategory("");
    }
    else {
      setSelectedCategory(e.target.value)
    }
  }

  return (
    <div className="container mx-auto px-10">
      <div className="flex">
        <div className="w-1/4">
          {
            categories.map(category => (
              <div key={category.value}>
                <label htmlFor={category.value}>
                  <input
                    type="checkbox"
                    name={category.value}
                    id={category.value}
                    onChange={handleChange}
                    value={category.value}
                    checked={selectedCategory === category.value}
                  />
                  <span> {category.label}</span>
                </label>
              </div>
            ))
          }
        </div>
        <div className="flex-1 bg-red-200 grid grid-cols-3 gap-4">
          {data?.data.map(product => (
            <div>
              <img
               src={product.image}
               alt=""
               className='h-20'
               />
              {product.name}
              <span>{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
