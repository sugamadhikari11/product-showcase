import React, { useEffect, useState } from 'react';
import axios from '../api/axios'
import { useProducts } from '../api/products';

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
  const {data,loading} = useProducts()

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
        <div className="flex-1 grid grid-cols-3 gap-4">
          {loading ? "Ruko zara. Sabar karo ..." : null}
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
