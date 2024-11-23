import React from "react";

function CartItem({ item, onRemove, onUpdateQuantity }) {
  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow-md">
      <div>
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p>{`Price: $${item.price}`}</p>
        <p>{`Total: $${item.totalPrice.toFixed(2)}`}</p>
      </div>
      <div className="flex items-center space-x-4">
    {/* Increment & Decrement */}
    <button
      onClick={handleDecrement}
      className="bg-gray-300 px-3 py-1 rounded-lg shadow hover:bg-gray-400"
    >
      -
    </button>
    <span className="font-bold text-black">{item.quantity}</span>
    <button
      onClick={handleIncrement}
      className="bg-gray-300 px-3 py-1 rounded-lg shadow hover:bg-gray-400"
    >
      +
    </button>

    {/* Remove Button */}
    <button
      onClick={() => onRemove(item.id)}
      className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
    >
      Remove
    </button>
  </div>
    </div>
  );
}

export default CartItem;
