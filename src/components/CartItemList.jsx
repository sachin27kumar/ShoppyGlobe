import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./utiles/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function CartItemList() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // Empty Cart Page Design
  if (cart.items.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 p-6">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-xl mb-6">It looks like you haven’t added anything to your cart yet.</p>
          <img 
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" 
              alt="Empty Cart" 
              className="mx-auto mb-6 max-w-xs"
          />
          <p className="text-lg">Start browsing our products and add items to your cart!</p>
          <div className="mt-6">
            <a href="/" className="bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-3 rounded-lg shadow-md hover:from-gray-500 hover:to-gray-300 transition">
              Browse Products
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Regular Cart Page Design
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Your Cart</h1>
        <div className="grid gap-4">
          {cart.items.map((item) => (
            <CartItem key={item.id} item={item} onRemove={handleRemoveItem} onUpdateQuantity={handleUpdateQuantity} />
          ))}
        </div>
        <div className="mt-6 text-white font-bold">
          <p>{`Total Quantity: ${cart.totalQuantity}`}</p>
          <p>{`Total Price: $${cart.totalPrice.toFixed(2)}`}</p>
        </div>
        <div className="mt-6 flex justify-center w-full">
           <Link to="/checkout" className="w-full">
             <button className="w-full font-semibold text-xl bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-3 rounded-lg shadow-md hover:from-gray-500 hover:to-gray-300 transition">
               Checkout
             </button>
           </Link>
        </div>

      </div>
      
    </div>
  );
}

export default CartItemList;
