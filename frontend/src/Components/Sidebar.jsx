import React from 'react';

const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-[#2E8B57] shadow-lg hidden md:block rounded-md">
      <div className="p-6">
        <h2 className="text-2xl font-extrabold text-green-700 mb-6  text-white">ReWear</h2>
        <nav className="space-y-2">
          <a href="#" className="block text-zinc-100 font-semibold hover:bg-[#72cc9a] py-3 px-2 rounded-md  hover:text-white">Dashboard</a>
          <a href="#" className="block text-zinc-100 font-semibold hover:bg-[#72cc9a] py-3 px-2 rounded-md  hover:text-white ">Uploaded Items</a>
          <a href="#" className="block text-zinc-100 font-semibold hover:bg-[#72cc9a] py-3 px-2 rounded-md  hover:text-white">Swap History</a>
          <a href="#" className="block text-zinc-100 font-semibold hover:bg-[#72cc9a] py-3 px-2 rounded-md  hover:text-white">Settings</a>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
