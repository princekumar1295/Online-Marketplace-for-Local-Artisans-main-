import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  LogOut,
  PenTool
} from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsProfileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenus}>
            <PenTool className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-serif font-bold">ArtisanMarket</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-primary-500 transition-colors">Shop</Link>
            <Link to="/artisans" className="hover:text-primary-500 transition-colors">Artisans</Link>
            <Link to="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
          </div>

          {/* Search, Cart, and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-neutral-600 hover:text-primary-500 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <Link to="/cart" className="text-neutral-600 hover:text-primary-500 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <div className="relative">
              <button 
                onClick={toggleProfileMenu}
                className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors"
              >
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <User className="h-5 w-5" />
                )}
              </button>
              
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-2 text-sm text-neutral-700">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-xs text-neutral-500">{user?.email}</p>
                      </div>
                      <hr className="my-1" />
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                        onClick={closeMenus}
                      >
                        Dashboard
                      </Link>
                      <button 
                        onClick={() => {
                          logout();
                          closeMenus();
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        <div className="flex items-center">
                          <LogOut className="h-4 w-4 mr-2" />
                          Log out
                        </div>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                        onClick={closeMenus}
                      >
                        Log in
                      </Link>
                      <Link 
                        to="/register" 
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                        onClick={closeMenus}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="text-neutral-600 relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button onClick={toggleMenu} className="text-neutral-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/products" 
              className="py-2 hover:text-primary-500 transition-colors"
              onClick={closeMenus}
            >
              Shop
            </Link>
            <Link 
              to="/artisans" 
              className="py-2 hover:text-primary-500 transition-colors"
              onClick={closeMenus}
            >
              Artisans
            </Link>
            <Link 
              to="/blog" 
              className="py-2 hover:text-primary-500 transition-colors"
              onClick={closeMenus}
            >
              Blog
            </Link>
            
            <div className="py-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="input pr-10"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-neutral-400" />
                </button>
              </div>
            </div>
            
            <hr className="my-2" />
            
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-3 py-2">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                  <div>
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-xs text-neutral-500">{user?.email}</p>
                  </div>
                </div>
                <Link 
                  to="/dashboard" 
                  className="py-2 hover:text-primary-500 transition-colors"
                  onClick={closeMenus}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    closeMenus();
                  }}
                  className="py-2 text-left flex items-center space-x-2 hover:text-primary-500 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="btn btn-primary w-full"
                  onClick={closeMenus}
                >
                  Log in
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-outline w-full"
                  onClick={closeMenus}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;