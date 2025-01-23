import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]); // State to store fetched categories

  // Fetch categories on component mount using useEffect
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen">
      <div className="border-b pb-1 text-xl font-bold">CATEGORY</div>
      <div className="capitalize">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              onClick={() => setCategory(category)}
              className="text-lg cursor-pointer hover:bg-gray-200 hover:ps-4 hover:transition hover:rounded ps-0 p-2"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default Categories;