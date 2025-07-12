import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="bg-white  p-6 rounded-2xl shadow-lg shadow-[#2E8B57] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h4 className="text-xl font-semibold text-gray-900">{item.name}</h4>
        <p className="text-gray-600 text-sm">Condition: {item.condition}</p>
        <p className={`text-sm font-medium ${item.status === 'Available' ? 'text-[#2E8B57]' : 'text-yellow-600'}`}>
          Status: {item.status}
        </p>
      </div>
      <div className="flex gap-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm">Edit</button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm">Delete</button>
      </div>
    </div>
  );
};

export default ItemCard;
