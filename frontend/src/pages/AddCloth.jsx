import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserContext } from '../context/AppContext';

const AddCloth = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const { user } = useContext(UserContext);

  const handleSave = async () => {
    if (!image || !name || !description || !price || !category) {
      toast.error("All fields are required.");
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
      formData.append('category', category);

      const token = localStorage.getItem('token');

      const response = await axios.post('http://localhost:9000/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Cloth added successfully!');
      console.log('Item created:', response.data);

      // Reset form
      setImage(null);
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong while uploading.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-2xl mx-auto mt-12 p-6 bg-white shadow-2xl rounded-2xl space-y-6'>
      <h2 className='text-3xl font-bold text-center text-gray-800'>Add New Cloth</h2>

      {/* Image Upload */}
      <div className='flex justify-center'>
        <label htmlFor="image" className='cursor-pointer relative group'>
          <img
            className='w-44 h-44 object-cover rounded-xl shadow border border-gray-300 group-hover:opacity-80 transition'
            src={image ? URL.createObjectURL(image) : assets.profile_pic}
            alt="Preview"
          />
          <div className='absolute inset-0 flex items-center justify-center text-white text-sm bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-xl transition'>
            Click to change image
          </div>
          <input
            type="file"
            id="image"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </label>
      </div>

      {/* Form Fields */}
      <div className='space-y-4'>
        {/* Name */}
        <div>
          <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Cloth Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary'
            placeholder="e.g., Cotton Shirt"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className='block text-sm font-medium text-gray-700'>Price (₹)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary'
            placeholder="e.g., 799"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className='block text-sm font-medium text-gray-700'>Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-primary'
            required
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
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary resize-none'
            placeholder="Describe the material, size, color, or any defects..."
            required
          ></textarea>
        </div>
      </div>

      {/* Button */}
      <div className='text-center'>
        <button
          onClick={handleSave}
          disabled={loading}
          className='bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {loading ? 'Uploading...' : 'List Item'}
        </button>
      </div>
    </div>
  );
};

export default AddCloth;
