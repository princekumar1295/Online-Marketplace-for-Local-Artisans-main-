import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
    productCount: number;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/products?category=${category.id}`}
      className="relative overflow-hidden rounded-lg shadow-md group"
    >
      <div className="aspect-square">
        <img 
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-serif text-xl mb-1">{category.name}</h3>
          <p className="text-neutral-200 text-sm">{category.productCount} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;