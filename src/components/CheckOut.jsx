import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  // If the cart is empty, show a message
  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-lg text-gray-300 mb-6">
          Add some items to proceed to checkout!
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt="Empty Cart"
          className="max-w-xs mb-6"
        />
        <Link
           to="/"
           className="bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-3 rounded-lg shadow-md hover:from-gray-500 hover:to-gray-300 transition"
         >
           Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>

        {/* Order Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="grid gap-6">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg p-4 shadow-md"
              >
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-300">{`Quantity: ${item.quantity}`}</p>
                  <p className="text-gray-300">{`Price: $${item.price}`}</p>
                </div>
                <p className="font-bold text-lg">{`$${(item.quantity * item.price).toFixed(2)}`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Total Summary */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-lg font-bold border-t border-gray-500 pt-4">
            <p>Total Quantity:</p>
            <p>{cart.totalQuantity}</p>
          </div>
          <div className="flex justify-between items-center text-lg font-bold">
            <p>Total Price:</p>
            <p>{`$${cart.totalPrice.toFixed(2)}`}</p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Card Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">Expiration Date</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="MM/YY"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">CVV</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-400 hover:via-blue-300 hover:to-blue-200 transition"
            >
              Pay ${cart.totalPrice.toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
