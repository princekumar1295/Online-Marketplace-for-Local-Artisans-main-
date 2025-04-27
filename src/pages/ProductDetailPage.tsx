import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Details</h1>
          <p className="text-gray-600">Loading product {id}...</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;