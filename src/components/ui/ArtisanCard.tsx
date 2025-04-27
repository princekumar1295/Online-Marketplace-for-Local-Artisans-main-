import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface ArtisanCardProps {
  artisan: {
    id: string;
    name: string;
    avatar: string;
    coverImage: string;
    location: string;
    specialty: string;
    productCount: number;
  };
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      {/* Cover Image */}
      <div className="h-36 overflow-hidden">
        <img 
          src={artisan.coverImage}
          alt={`${artisan.name}'s workshop`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Avatar and Details */}
      <div className="px-4 pt-10 pb-4 relative">
        {/* Avatar */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="rounded-full border-4 border-white overflow-hidden h-16 w-16">
            <img 
              src={artisan.avatar}
              alt={artisan.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Details */}
        <div className="text-center">
          <Link to={`/artisans/${artisan.id}`}>
            <h3 className="font-serif text-lg font-medium hover:text-primary-500 transition-colors">
              {artisan.name}
            </h3>
          </Link>
          
          <p className="text-sm text-neutral-600 mt-1">{artisan.specialty}</p>
          
          <div className="flex items-center justify-center mt-2 text-xs text-neutral-500">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{artisan.location}</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-neutral-100">
            <p className="text-sm">{artisan.productCount} Products</p>
          </div>
          
          <Link 
            to={`/artisans/${artisan.id}`}
            className="mt-3 inline-block text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
          >
            Visit Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;