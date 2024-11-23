import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetchProducts } from './hooks/useFetchProducts'; // Custom hook to fetch product data
import { useDispatch } from 'react-redux'; // Redux hook to dispatch actions
import { addItem } from './utiles/cartSlice'; // Redux action to add an item to the cart
import { toast, ToastContainer } from 'react-toastify'; // Toast notifications for user feedback
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS for styling notifications
import Loading from './Loading'; // Loading component for a better user experience during data fetch

function ProductItem() {
  // Get the product ID from the URL parameters
  const { productId } = useParams();

  // Fetch products data using custom hook
  const { data, loading, error } = useFetchProducts('https://dummyjson.com/products');

  // Find the specific product by ID
  const product = data.find((item) => item.id == productId);

  // Redux dispatch function to add an item to the cart
  const dispatch = useDispatch();

  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    // Create the cart item object
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
    };
    // Dispatch the action to add the item to the cart
    dispatch(addItem(cartItem));

    // Display a success notification
    toast.success('Item added to cart!');
  };

  // Show a loading indicator while fetching data
  if (loading) {
    return <Loading />;
  }

  // Handle API errors
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white">
        {/* Error message with an icon */}
        <img 
          src="https://cdn-icons-png.flaticon.com/512/10387/10387712.png" 
          alt="Error" 
          className="w-24 h-24 mb-4"
        />
        <p className="text-2xl font-bold text-red-500">Oops! Something went wrong.</p>
        <p className="mt-2 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 p-6">
      <div className="container mx-auto">
        {/* Product display section */}
        <div className="bg-gradient-to-t from-white to-gray-300 rounded-lg shadow-lg overflow-hidden">
          {/* Product image */}
          <div className="flex justify-center items-center bg-gradient-to-t from-gray-400 to-white p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="bg-gray-200 w-64 h-64 object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product details */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-4 text-gray-800 font-semibold">{`Category: ${product.category}`}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-4">${product.price}</p>
            <p className="text-lg text-green-600">{`Rating: ${product.rating} ⭐️`}</p>
            <p className="text-gray-600">{`Stock: ${product.stock} Available`}</p>

            {/* Buttons for Add to Cart and View Details */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-gray-600 hover:to-gray-500 transition"
              >
                Add to Cart
              </button>
              <Link to={`/products/details/${productId}`}>
                <button className="bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-2 rounded-lg shadow-md hover:from-gray-500 hover:to-gray-300 transition">
                  View Details
                </button>
              </Link>
            </div>

            {/* Button to return to the product list */}
            <div className="mt-8">
              <Link to="/">
                <button className="bg-gradient-to-r from-gray-600 to-gray-400 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-gray-500 hover:to-gray-300 transition">
                  Return to Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
}

export default ProductItem;
