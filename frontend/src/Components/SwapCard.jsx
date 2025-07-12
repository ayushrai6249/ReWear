import React from 'react';

const SwapCard = ({ swap }) => {
  return (
    <div className=" bg-white p-6 rounded-2xl shadow-lg shadow-[#2E8B57]">
      <h4 className="text-xl font-semibold text-gray-900">{swap.name}</h4>
      <p className="text-gray-600 text-sm mt-1">Date: {swap.date}</p>
      <p className="text-[#2E8B57] font-medium text-sm">{swap.status}</p>
    </div>
  );
};

export default SwapCard;
