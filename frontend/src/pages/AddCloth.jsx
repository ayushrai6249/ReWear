import React, { useState } from 'react';
import { assets } from '../assets/assets';

const AddCloth = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    console.log({
      name,
      price,
      description,
      image,
    });
  };

  return (
    <div className='max-w-lg flex flex-col gap-4 text-sm'>
      <label htmlFor="image" className='font-medium'>
        Upload Image
        <div className='inline-block relative cursor-pointer mt-2'>
          <img
            className='w-36 h-36 object-cover rounded opacity-75'
            src={image ? URL.createObjectURL(image) : assets.profile_pic}
            alt="Cloth preview"
          />
        </div>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id='image'
          hidden
        />
      </label>

      <label htmlFor="name" className='font-medium'>Name</label>
      <input
        className='bg-gray-50 text-lg p-2 rounded'
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter cloth name'
      />

      <label htmlFor="price" className='font-medium'>Price (in ₹)</label>
      <input
        className='bg-gray-50 text-lg p-2 rounded'
        type='number'
        id='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Enter price'
      />

      <label htmlFor="description" className='font-medium'>Description</label>
      <textarea
        id='description'
        className='bg-gray-50 text-base p-2 rounded'
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Enter description'
      ></textarea>

      <button
        className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300'
        onClick={handleSave}
      >
        Save Information
      </button>
    </div>
  );
};

export default AddCloth;
