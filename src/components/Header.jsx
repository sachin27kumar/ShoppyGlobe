import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <Link to="/">ShoppyGlobe</Link>
        </div>
        <div className="text-white text-2xl">
          <ul className="flex gap-6">
            <li className="cursor-pointer hover:text-gray-300 transition">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className="relative cursor-pointer hover:text-gray-300 transition">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
