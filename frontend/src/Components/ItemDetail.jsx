import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemDetail() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    '/images/item1.jpg',
    '/images/item2.jpg',
    '/images/item3.jpg',
  ];

  const item = {
    name: 'Vintage Denim Jacket',
    description:
      'Stylish vintage denim jacket. Perfect for layering in all seasons. Lightly worn and well maintained.',
    uploader: {
      name: 'Rajnandani Gupta',
      email: 'rajnandanigupta09@gmail.com',
    },
    points: 120,
    available: true,
  };

  return (
    <div className="min-h-screen bg-white p-6 sm:p-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left: Image Gallery */}
        <div className="flex-1">
          <img
            src={images[selectedImage]}
            alt="Selected"
            className="w-full h-80 object-cover rounded-lg border"
          />
          <div className="flex space-x-3 mt-4 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(i)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                  selectedImage === i ? 'border-[#2E8B57]' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Item Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#2E8B57]">{item.name}</h2>
            <p className="text-gray-700 mt-4">{item.description}</p>

            {/* Uploader Info */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#2E8B57]">Uploader Info</h3>
              <p className="mt-1"><strong>Name:</strong> {item.uploader.name}</p>
              <p><strong>Email:</strong> {item.uploader.email}</p>
            </div>

            {/* Status */}
            <div className="mt-6">
              <p>
                <strong>Redeem Points:</strong>{' '}
                <span className="text-[#2E8B57] font-bold">{item.points}</span>
              </p>
              <p>
                <strong>Availability:</strong>{' '}
                <span className={`font-bold ${item.available ? 'text-green-600' : 'text-red-500'}`}>
                  {item.available ? 'Available' : 'Not Available'}
                </span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/swap-request"
              className="text-center px-6 py-2 rounded-md bg-[#2E8B57] text-white hover:bg-green-700"
            >
              Request Swap
            </Link>
            <Link
              to="/redeem"
              className="text-center px-6 py-2 rounded-md bg-white border border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57]/10"
            >
              Redeem via Points
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
