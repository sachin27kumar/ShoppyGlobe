import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetchProducts } from './hooks/useFetchProducts';
import Loading from './Loading';

function ProductDetails() {
  const { productId } = useParams();
  const { data, loading, error } = useFetchProducts('https://dummyjson.com/products');
  const product = data.find((item) => item.id == productId);

  if (loading) {
    return (
        <Loading/>
    )
    }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 p-6">
      <div className="container mx-auto">
        {/* Main Container */}
        <div className="bg-gradient-to-t to-gray-300 from-white rounded-lg shadow-lg overflow-hidden md:flex">
          {/* Image Section */}
          <div className="md:w-1/2 bg-gradient-to-t from-gray-400 to-white flex justify-center items-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="bg-gray-200 w-2/3 h-2/3 object-contain md:rounded-lg shadow-lg"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* Product Highlights */}
            <div className="mt-6">
              <p className="text-2xl font-semibold text-gray-800">${product.price}</p>
              <p className="text-lg text-green-600">{product.discountPercentage}% off</p>
              <p className="text-gray-600">{`Stock: ${product.stock} (${product.availabilityStatus})`}</p>
              <p className="mt-2 text-gray-600">{`Category: ${product.category}`}</p>
            </div>

            {/* Additional Information */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <p><span className="font-semibold">Brand:</span> {product.brand}</p>
              <p><span className="font-semibold">SKU:</span> {product.sku}</p>
              <p><span className="font-semibold">Weight:</span> {product.weight} g</p>
              <p><span className="font-semibold">Warranty:</span> {product.warrantyInformation}</p>
              <p><span className="font-semibold">Dimensions:</span> {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`}</p>
              <p><span className="font-semibold">Shipping:</span> {product.shippingInformation}</p>
            </div>

            {/* Reviews Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">Customer Reviews</h2>
              <div className="space-y-4 mt-4">
                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <p className="font-semibold text-gray-800">{review.reviewerName}</p>
                    <p className="text-gray-500 text-sm">{`Rating: ${review.rating} ⭐️`}</p>
                    <p className="mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* QR Code */}
            <div className="mt-6 flex items-center space-x-4">
              <img
                src={product.meta.qrCode}
                alt="QR Code"
                className="w-20 h-20 object-contain"
              />
              <p className="text-sm text-gray-500">{`Barcode: ${product.meta.barcode}`}</p>
            </div>

            {/* Button */}
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
    </div>
  );
}

export default ProductDetails;
