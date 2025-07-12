import React from 'react';

const ClothCard = ({ cloth, onViewDetails, onSwapRequest }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <img
                src={cloth.imageUrl}
                alt={cloth.name}
                className="w-full h-48 object-cover border-b border-gray-200"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cloth.name}</h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow line-clamp-2">{cloth.description}</p>
                <div className="text-gray-700 text-sm mb-2">
                    <p>
                        <span className="font-medium">Size:</span> {cloth.size}
                    </p>
                    <p>
                        <span className="font-medium">Condition:</span> {cloth.condition}
                    </p>
                    <p>
                        <span className="font-medium">Category:</span> {cloth.category}
                    </p>
                </div>
                <p className="text-gray-500 text-xs mb-4">Posted by: {cloth.postedBy}</p>
                <div className="flex gap-3 mt-auto">
                    <button
                        onClick={() => onViewDetails(cloth.id)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        View Details
                    </button>
                    <button
                        onClick={() => onSwapRequest(cloth.id)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Swap
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClothCard;