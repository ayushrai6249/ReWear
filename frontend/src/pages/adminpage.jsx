import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminItemModeration = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:9000/api/admin', {
        headers: {
        //   Authorization: `Bearer ${token}`,
        },
      });
      setItems(res.data);
    } catch (err) {
      toast.error('Failed to fetch items');
    }
  };

  const updateApproval = async (id, approved) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(
        `http://localhost:9000/api/admin/${id}/approve`,
        { approved },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(`Item ${approved ? 'approved' : 'rejected'}`);
      fetchItems();
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const deleteItem = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:9000/api/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Item deleted');
      fetchItems();
    } catch (err) {
      toast.error('Failed to delete item');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">Admin - Moderate Listings</h1>
      {items.map((item) => (
        <div key={item._id} className="border p-4 rounded mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex gap-4 items-start sm:items-center">
            <img src={item.photo} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm">By: {item.user?.name}</p>
              <p className={`text-sm ${item.approved ? 'text-green-600' : 'text-red-500'}`}>
                {item.approved ? 'Approved' : 'Not Approved'}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => updateApproval(item._id, true)}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Approve
            </button>
            <button
              onClick={() => updateApproval(item._id, false)}
              className="px-3 py-1 bg-yellow-500 text-white rounded"
            >
              Reject
            </button>
            <button
              onClick={() => deleteItem(item._id)}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminItemModeration;
