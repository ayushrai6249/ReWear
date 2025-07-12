import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/AppContext';

const MyCloths = () => {
  const [items, setItems] = useState([]);
  const { user } = useContext(UserContext);

  const fetchMyItems = async () => {
    try {
      const res = await axios.get(`http://localhost:9000/api/items/user/${user._id}`);
      setItems(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to load your items.');
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchMyItems();
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">Your Listed Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item._id} className="bg-white border rounded-lg shadow p-4">
            <img src={item.photo} alt={item.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm"><strong>Category:</strong> {item.category}</p>
            <p className={`text-sm mt-1 ${item.approved ? 'text-green-600' : 'text-red-600'}`}>
              {item.approved ? 'Approved' : 'Pending Approval'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCloths;
