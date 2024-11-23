import React from 'react';

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 p-6 text-white">
      <div className="container mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 text-lg">
              We are ShoppyGlobe, your go-to online store for the latest products in every category. We provide an excellent shopping experience with easy navigation and a user-friendly interface.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-gray-100 transition">Home</a>
              </li>
              <li>
                <a href="/cart" className="text-gray-300 hover:text-gray-100 transition">Cart</a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-gray-100 transition">Products</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-gray-100 transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-lg mb-2">
              Email: <a href="mailto:support@shoppyglobe.com" className="hover:text-gray-100 transition">support@shoppyglobe.com</a>
            </p>
            <p className="text-gray-300 text-lg mb-2">
              Phone: <a href="tel:+123456789" className="hover:text-gray-100 transition">+1 (234) 567-89</a>
            </p>
            <p className="text-gray-300 text-lg">
              Address: 123 ShoppyGlobe Street, Shopping City, USA
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; 2024 ShoppyGlobe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
