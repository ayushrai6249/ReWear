// RedeemModal.jsx
const RedeemModal = ({ isOpen, onClose, onConfirm, itemPrice, userPoints }) => {
  if (!isOpen) return null;

  const canRedeem = userPoints >= itemPrice;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Confirm Redemption</h2>
        <p>Your Points: <strong>{userPoints}</strong></p>
        <p>Item Price: <strong>{itemPrice}</strong></p>
        <p className="mt-4">
          {canRedeem
            ? "You have enough points to redeem this item."
            : "You don't have enough points."}
        </p>
        <div className="mt-6 flex justify-end space-x-2">
          <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
          <button
            className={`px-3 py-1 rounded ${canRedeem ? "bg-green-600 text-white" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={!canRedeem}
            onClick={onConfirm}
          >
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemModal;
