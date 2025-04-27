import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import ProductCard, { Product } from '../components/ui/ProductCard';
import CategoryCard from '../components/ui/CategoryCard';
import ArtisanCard from '../components/ui/ArtisanCard';
import BlogCard from '../components/ui/BlogCard';
import Button from '../components/ui/Button';

// Sample data - would come from API in a real app
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Handcrafted Ceramic Mug',
    price: 32.00,
    images: ['https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=800'],
    artisan: { id: '1', name: 'Sarah Pottery' },
    category: 'Ceramics',
    rating: 4.8,
    reviewCount: 32,
    isBestseller: true
  },
  {
    id: '2',
    name: 'Wooden Cutting Board',
    price: 56.00,
    images: ['https://images.pexels.com/photos/4226732/pexels-photo-4226732.jpeg?auto=compress&cs=tinysrgb&w=800'],
    artisan: { id: '2', name: 'Thomas Woodworks' },
    category: 'Woodworking',
    rating: 4.5,
    reviewCount: 18
  },
  {
    id: '3',
    name: 'Handwoven Wool Scarf',
    price: 48.50,
    images: ['https://images.pexels.com/photos/5414354/pexels-photo-5414354.jpeg?auto=compress&cs=tinysrgb&w=800'],
    artisan: { id: '3', name: 'Elena Textile Arts' },
    category: 'Textiles',
    rating: 4.7,
    reviewCount: 24
  },
  {
    id: '4',
    name: 'Silver Leaf Earrings',
    price: 78.00,
    images: ['https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800'],
    artisan: { id: '4', name: 'Michael Silverman' },
    category: 'Jewelry',
    rating: 5.0,
    reviewCount: 42,
    isBestseller: true
  }
];

const categories = [
  {
    id: 'ceramics',
    name: 'Ceramics',
    image: 'https://images.pexels.com/photos/4992450/pexels-photo-4992450.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 76
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    image: 'https://images.pexels.com/photos/10018318/pexels-photo-10018318.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 93
  },
  {
    id: 'textiles',
    name: 'Textiles',
    image: 'https://images.pexels.com/photos/4992444/pexels-photo-4992444.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 57
  },
  {
    id: 'woodworking',
    name: 'Woodworking',
    image: 'https://images.pexels.com/photos/6044246/pexels-photo-6044246.jpeg?auto=compress&cs=tinysrgb&w=800',
    productCount: 45
  }
];

const featuredArtisans = [
  {
    id: '1',
    name: 'Sarah Pottery',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    coverImage: 'https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Portland, OR',
    specialty: 'Ceramics & Pottery',
    productCount: 24
  },
  {
    id: '2',
    name: 'Thomas Woodworks',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    coverImage: 'https://images.pexels.com/photos/6692132/pexels-photo-6692132.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Seattle, WA',
    specialty: 'Woodworking',
    productCount: 18
  },
  {
    id: '3',
    name: 'Elena Textile Arts',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    coverImage: 'https://images.pexels.com/photos/4946396/pexels-photo-4946396.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Santa Fe, NM',
    specialty: 'Textile & Fiber Arts',
    productCount: 31
  }
];

const blogPosts = [
  {
    id: '1',
    title: 'The Revival of Traditional Pottery Techniques',
    excerpt: 'Exploring how modern artisans are breathing new life into ancient pottery methods and creating contemporary masterpieces.',
    coverImage: 'https://images.pexels.com/photos/4992467/pexels-photo-4992467.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      id: '1',
      name: 'Sarah Pottery',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    publishedAt: '2023-06-15T12:00:00Z',
    readTime: 8,
    category: 'Techniques'
  },
  {
    id: '2',
    title: 'Sustainable Materials in Modern Craftsmanship',
    excerpt: 'How today\'s artisans are incorporating eco-friendly materials and sustainable practices into their craft.',
    coverImage: 'https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: {
      id: '2',
      name: 'Thomas Woodworks',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    publishedAt: '2023-06-02T12:00:00Z',
    readTime: 6,
    category: 'Sustainability'
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/7005552/pexels-photo-7005552.jpeg?auto=compress&cs=tinysrgb&w=1280" 
            alt="Artisan crafting" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Handcrafted Treasures from Local Artisans
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-200">
              Each piece tells a story. Each creation carries the passion of its maker. 
              Explore unique handmade products crafted by talented artisans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary">
                Shop Collection
              </Link>
              <Link to="/artisans" className="btn btn-outline border-white text-white hover:bg-white/10">
                Meet the Artisans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="font-serif text-3xl font-medium">Featured Products</h2>
              <p className="text-neutral-600 mt-2">Handpicked treasures from our collection</p>
            </div>
            <Link 
              to="/products" 
              className="mt-4 md:mt-0 inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              View all products
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-medium">Shop by Category</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
              Explore our curated collection of handcrafted treasures by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Artisans */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="font-serif text-3xl font-medium">Featured Artisans</h2>
              <p className="text-neutral-600 mt-2">The talented creators behind our products</p>
            </div>
            <Link 
              to="/artisans" 
              className="mt-4 md:mt-0 inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              View all artisans
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtisans.map(artisan => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial/Values Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium mb-6">Handcrafted with Love and Purpose</h2>
              <p className="text-neutral-700 mb-8">
                Every item in our marketplace is created with intention, skill, and care. 
                We believe in the value of handmade goods and the stories they tell.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary-400 rounded-full p-2 text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M7.5 12L10.5 15L16.5 9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Supporting Local Artisans</h3>
                    <p className="text-neutral-600 mt-1">
                      We connect creators with customers who value authentic craftsmanship.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-400 rounded-full p-2 text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M7.5 12L10.5 15L16.5 9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Sustainable Practices</h3>
                    <p className="text-neutral-600 mt-1">
                      Our artisans use eco-friendly materials and sustainable production methods.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-400 rounded-full p-2 text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M7.5 12L10.5 15L16.5 9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Unique, One-of-a-Kind Pieces</h3>
                    <p className="text-neutral-600 mt-1">
                      Every item tells a story and carries the unique touch of its creator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4992470/pexels-photo-4992470.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Artisan at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog/Stories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="font-serif text-3xl font-medium">Artisan Stories</h2>
              <p className="text-neutral-600 mt-2">Get inspired by the stories behind the crafts</p>
            </div>
            <Link 
              to="/blog" 
              className="mt-4 md:mt-0 inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              Read all stories
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">Stay Connected</h2>
            <p className="text-neutral-600 mb-8">
              Subscribe to our newsletter for new product announcements, artisan stories, and special offers.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input flex-grow"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </div>
              <p className="text-xs text-neutral-500 mt-3">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;