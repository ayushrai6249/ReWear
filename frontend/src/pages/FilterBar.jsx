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
                <option value="">-- Select Category --</option>
            <option value="Shirt">Shirt</option>
            <option value="Jacket">Jacket</option>
            <option value="Jeans">Jeans</option>
            <option value="Kurta">Kurta</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Saree">Saree</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Dress">Dress</option>
            <option value="Trousers">Trousers</option>
            <option value="Blazer">Blazer</option>
            <option value="Shorts">Shorts</option>
            <option value="Sweater">Sweater</option>
            <option value="Lehenga">Lehenga</option>
            </select>
           
            <button
                onClick={onAddCloth}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                List Your Cloth
            </button>
        </div>
    );
};

export default FilterBar;