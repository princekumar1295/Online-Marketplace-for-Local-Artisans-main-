import React from 'react';
import ProductCard from '../components/ui/ProductCard';

function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Product cards will be populated here once we have data */}
        <div className="col-span-full text-center text-gray-600">
          Loading products...
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;