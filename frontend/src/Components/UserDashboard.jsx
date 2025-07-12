import React from 'react';
import SideBar from './Sidebar';
import ItemCard from './ItemCard';
import SwapCard from './SwapCard';

const UserDashboard = () => {

     const uploadedItems = [
    { name: 'Denim Jacket', condition: 'Good', status: 'Available' },
    { name: 'Printed Kurti', condition: 'Excellent', status: 'Swapped' },
    { name: 'Cotton Saree', condition: 'Good', status: 'Available' },
  ];

    const swapHistory = [
    { name: 'Black Hoodie', date: '2025-06-15', status: 'Completed' },
    { name: 'Cotton Shirt', date: '2025-05-12', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen w-full  py-10 flex gap-10 px-4 sm:px-8 md:px-16 lg:px-60 xl:px-70">
      {/* App Header */}
     <SideBar/>
      <div className='flex-1'>
      {/* User Info */}
      <section className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E8B57]">Rajnandani Gupta</h2>
        <p className="text-[#2E8B57] mt-2 text-lg">Points: <span className="font-semibold">120</span></p>
      </section>

      {/* Uploaded Items */}
      <section className="mb-20">
        <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center">Uploaded Items</h3>

        <div className="space-y-8">
          {uploadedItems.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </section>

      {/* Swap History */}
      <section>
        <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center">Swap History</h3>

        <div className="space-y-8">
           {swapHistory.map((swap, index) => (
            <SwapCard key={index} swap={swap} />
          ))}
        </div>
      </section>
    </div>
          </div>
  );
};

export default UserDashboard;
