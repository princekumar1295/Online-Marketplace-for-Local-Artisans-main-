import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  artisan: {
    id: string;
    name: string;
  };
  category: string;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      artisan: product.artisan.name
    });
  };

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <Link to={`/products/${product.id}`} className="block aspect-square">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Bestseller badge */}
        {product.isBestseller && (
          <div className="absolute top-2 left-2 bg-accent-300 text-neutral-800 text-xs font-medium py-1 px-2 rounded">
            Bestseller
          </div>
        )}
        
        {/* Wishlist button */}
        <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-neutral-600" />
        </button>
        
        {/* Quick add button */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-white/80 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="text-sm font-medium text-neutral-800 hover:text-primary-500 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-neutral-500 mb-1">{product.category}</div>
        
        {/* Product Name */}
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-lg leading-tight font-serif hover:text-primary-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Artisan Name */}
        <Link to={`/artisans/${product.artisan.id}`} className="text-sm text-neutral-600 hover:text-primary-500 transition-colors mt-1 block">
          By {product.artisan.name}
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating) 
                    ? 'text-accent-400 fill-accent-400' 
                    : i < product.rating 
                      ? 'text-accent-400 fill-accent-400 opacity-50'
                      : 'text-neutral-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-neutral-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <div className="mt-2 font-medium">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;