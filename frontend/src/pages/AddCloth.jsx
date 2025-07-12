import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios'; 
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/AppContext';

const AddCloth = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);


const handleSave = async () => {
  console.log(user);
  if (!image || !name || !description || !price) {
    alert("All fields are required.");
    return;
  }

  setLoading(true);

  try {
    const formData = new FormData();
     formData.append('user', user._id); 
    formData.append('image', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);

    const token = localStorage.getItem('token');

    const response = await axios.post('http://localhost:9000/api/items', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    alert('Cloth added successfully!');
    console.log('Item created:', response.data);
    setImage(null);
    setName('');
    setDescription('');
    setPrice('');
  } catch (err) {
    console.error(err);
    alert('Something went wrong while uploading.');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className='max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-800 text-center'>Add New Cloth</h2>

      <div className='flex flex-col items-center gap-2'>
        <label htmlFor="image" className='cursor-pointer relative group'>
          <img
            className='w-40 h-40 object-cover rounded-lg shadow border border-gray-200 group-hover:opacity-80 transition'
            src={image ? URL.createObjectURL(image) : assets.profile_pic}
            alt="Cloth preview"
          />
          <div className='absolute inset-0 flex items-center justify-center text-white text-sm bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 rounded-lg transition'>
            Click to change image
          </div>
          <input
            type="file"
            id="image"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      </div>

      <div className='space-y-4'>
        <div>
          <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Cloth Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
            placeholder="e.g., Cotton Shirt"
          />
        </div>

        <div>
          <label htmlFor="price" className='block text-sm font-medium text-gray-700'>Price (₹)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
            placeholder="e.g., 799"
          />
        </div>

        <div>
          <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none'
            placeholder="Describe the material, size, or other details..."
          ></textarea>
        </div>
      </div>

      <div className='text-center'>
        <button
          onClick={handleSave}
          className='bg-primary text-white px-6 py-2 rounded-full text-base font-medium hover:bg-opacity-90 transition-all duration-300 shadow-sm'
        >
          Save Information
        </button>
      </div>
    </div>
  );
};

export default AddCloth;
