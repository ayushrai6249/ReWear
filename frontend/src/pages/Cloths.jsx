import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBar from './FilterBar';
import ClothCard from './ClothCard';

const Cloths = () => {
    const [allClothes, setAllClothes] = useState([]);
    const [filteredClothes, setFilteredClothes] = useState([]);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        size: '',
    });

    // ✅ Moved inside component
    useEffect(() => {
        const fetchApprovedClothes = async () => {
            try {
                const res = await axios.get('http://localhost:9000/api/items/approved');
                const mapped = res.data.map(item => ({
                    id: item._id,
                    name: item.name,
                    description: item.description,
                    category: item.category,
                    size: item.size || '',
                    condition: item.condition || '',
                    imageUrl: item.photo,
                    postedBy: item.user?.name || 'Anonymous',
                }));
                setAllClothes(mapped);
                setFilteredClothes(mapped);
            } catch (err) {
                console.error('Failed to fetch approved items:', err);
            }
        };

        fetchApprovedClothes();
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            let updatedClothes = [...allClothes];

            if (filters.search) {
                const searchTerm = filters.search.toLowerCase();
                updatedClothes = updatedClothes.filter(
                    (cloth) =>
                        cloth.name.toLowerCase().includes(searchTerm) ||
                        cloth.description.toLowerCase().includes(searchTerm) ||
                        (cloth.category && cloth.category.toLowerCase().includes(searchTerm))
                );
            }

            if (filters.category) {
                updatedClothes = updatedClothes.filter(
                    (cloth) => cloth.category === filters.category
                );
            }

            if (filters.size) {
                updatedClothes = updatedClothes.filter((cloth) => cloth.size === filters.size);
            }

            setFilteredClothes(updatedClothes);
        };

        applyFilters();
    }, [filters, allClothes]);

    const handleFilterChange = (newFilters) => {
        setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    };

    const handleAddCloth = () => {
        alert('Navigating to Add Cloth page!');
        // navigate('/upload-cloth'); // If using React Router
    };

    const handleViewDetails = (clothId) => {
        alert(`Viewing details for cloth ID: ${clothId}`);
    };

    const handleSwapRequest = (clothId) => {
        alert(`Initiating swap request for cloth ID: ${clothId}`);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Available Clothes for Exchange
            </h1>

            <FilterBar onFilterChange={handleFilterChange} onAddCloth={handleAddCloth} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {filteredClothes.length > 0 ? (
                    filteredClothes.map((cloth) => (
                        <ClothCard
                            key={cloth.id}
                            cloth={cloth}
                            onViewDetails={handleViewDetails}
                            onSwapRequest={handleSwapRequest}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-600 text-lg">
                        No clothes found matching your criteria.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Cloths;
