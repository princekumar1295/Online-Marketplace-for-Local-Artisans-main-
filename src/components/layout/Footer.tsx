import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PenTool, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail,
  PhoneCall,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <PenTool className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-serif font-bold">ArtisanMarket</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Connecting artisans with customers who appreciate handcrafted quality and stories behind each piece.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/artisans" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Blog & Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/category/ceramics" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Ceramics
                </Link>
              </li>
              <li>
                <Link to="/products/category/jewelry" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/products/category/textiles" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Textiles
                </Link>
              </li>
              <li>
                <Link to="/products/category/woodworking" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Woodworking
                </Link>
              </li>
              <li>
                <Link to="/products/category/home-decor" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  123 Artisan Street, Craftsville, CA 91234
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="h-5 w-5 text-primary-400 shrink-0" />
                <a href="tel:+15551234567" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 shrink-0" />
                <a href="mailto:info@artisanmarket.com" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  info@artisanmarket.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-800 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ArtisanMarket. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-neutral-500 text-sm hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-neutral-500 text-sm hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-policy" className="text-neutral-500 text-sm hover:text-primary-400 transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;