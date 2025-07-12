import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../assets/assets';

const Catagory = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="categories">
      <h1 className="text-3xl font-semibold">Find by Category</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Browse through a variety of clothing categories and pick what suits your style.
      </p>

      {/* Scrollable Container */}
      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 px-6 py-4 w-max">
          {categories.map((item, index) => (
            <Link
              onClick={() => scrollTo(0, 0)}
              key={index}
              to={`/clothes/${item.category}`}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gray-200 shadow-md mb-2">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-center text-gray-700">{item.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
