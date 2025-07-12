// ClothCard.jsx
const ClothCard = ({ cloth, onViewDetails, onRedeem }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={cloth.imageUrl} alt={cloth.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{cloth.name}</h3>
        <p className="text-gray-600 text-sm">{cloth.description}</p>
        <p className="text-sm mt-2 text-gray-500">Category: {cloth.category}</p>
        <p className="text-sm text-gray-500">Posted by: {cloth.postedBy}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => onViewDetails(cloth.id)}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            View
          </button>
          <button
            onClick={() => onRedeem(cloth.id)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothCard;
