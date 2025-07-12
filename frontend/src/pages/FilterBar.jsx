import React, { useState } from 'react';


const FilterBar = ({ onFilterChange, onAddCloth }) => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');


    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        onFilterChange({ search: e.target.value });
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        onFilterChange({ category: e.target.value });
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
        onFilterChange({ size: e.target.value });
    };


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Search by type, color..."
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow max-w-xs"
                value={search}
                onChange={handleSearchChange}
            />
            <select
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white flex-grow max-w-[150px]"
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="">All Categories</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Dresses">Dresses</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Accessories">Accessories</option>
            </select>
           
            <button
                 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                List Your Cloth
            </button>
        </div>
    );
};

export default FilterBar;