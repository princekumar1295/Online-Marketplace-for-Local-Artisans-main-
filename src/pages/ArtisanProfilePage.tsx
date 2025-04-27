import React from 'react';
import { useParams } from 'react-router-dom';

const ArtisanProfilePage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-48"></div>
          <div className="relative px-6 py-8">
            <div className="absolute -top-16 left-6">
              <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-4xl text-gray-400">🎨</span>
              </div>
            </div>
            
            <div className="mt-16">
              <h1 className="text-3xl font-bold text-gray-900">Artisan #{id}</h1>
              <p className="mt-2 text-gray-600">Master Craftsperson</p>
              
              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">About</h2>
                  <p className="mt-2 text-gray-600">
                    Dedicated artisan specializing in handcrafted pieces that blend traditional techniques with contemporary design.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Featured Works</h2>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="h-48 bg-gray-100 rounded-lg"></div>
                    <div className="h-48 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
                  <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Message Artisan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfilePage;