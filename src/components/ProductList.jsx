import React, { useState } from 'react';
import { useFetchProducts } from './hooks/useFetchProducts';
import { categoryData } from './utiles/category';
import { Link } from 'react-router-dom';

function ProductList() {
  // Fetch products data using custom hook
  const { data, error, isLoading } = useFetchProducts('https://dummyjson.com/products');
  
  // State to manage the selected category
  const [categoryName, setCategoryName] = useState('All');
  
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Handle API errors
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white">
        {/* Display an error message with an icon */}
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

  // Show a loading indicator while data is being fetched
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white">
        <p className="text-2xl font-bold">Loading products...</p>
      </div>
    );
  }

  // Filter products based on the selected category and search term
  const filteredData = data
    ?.filter((item) =>
      categoryName === 'All' || item.category.toLowerCase() === categoryName.toLowerCase()
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 p-6">
      <div className="container mx-auto">
        {/* Header Section: Displays a welcome message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Store</h1>
          <p className="text-gray-300 text-lg">
            Browse through our exclusive collection of products. Filter by category and explore the best deals!
          </p>
        </div>

        {/* Search Section: Search bar to filter products by title */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
            className="w-full max-w-md py-2 px-4 rounded-lg shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category Filter Section: Buttons to filter products by category */}
        <div className="flex justify-center mb-6 flex-wrap gap-3">
          {categoryData.map((list, id) => (
            <button
              key={id}
              onClick={() => setCategoryName(list.title)}
              className={`py-2 px-6 rounded-full shadow-lg transition-transform duration-300 ${
                categoryName === list.title
                  ? 'bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white scale-105 shadow-blue-500/50'
                  : 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-gray-300 hover:scale-105 shadow-gray-700/50'
              } hover:from-blue-400 hover:via-blue-300 hover:to-blue-200 hover:text-white`}
            >
              {list.title}
            </button>
          ))}
        </div>

        {/* Product Grid Section: Display products in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData?.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <div className="bg-gradient-to-t from-gray-300 to-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
                {/* Product Thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-contain rounded-lg mb-4 bg-gray-200"
                />
                {/* Product Title */}
                <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                {/* Product Price */}
                <p className="text-gray-600">{`Price: $${item.price}`}</p>
                {/* Product Rating */}
                <p className="text-sm text-green-600">{`Rating: ${item.rating} ⭐️`}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message: Display if no products match the filter criteria */}
        {!isLoading && data.length > 0 && filteredData.length === 0 && (
          <div className="text-center text-white mt-8">
            <p className="text-xl font-bold">No products found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
