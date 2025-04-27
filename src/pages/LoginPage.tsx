import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setFormError('Please fill in all fields');
      return;
    }
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled by the auth context
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl font-medium text-neutral-900">Welcome Back</h1>
          <p className="mt-2 text-neutral-600">Log in to your ArtisanMarket account</p>
        </div>
        
        {(error || formError) && (
          <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
            {error || formError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="label">Password</label>
              <div className="text-sm">
                <Link to="/forgot-password" className="text-primary-500 hover:text-primary-600">
                  Forgot password?
                </Link>
              </div>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </div>
          
          <div>
            <Button 
              type="submit" 
              fullWidth 
              size="lg"
              isLoading={loading}
            >
              Log in
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-neutral-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-500 hover:text-primary-600 font-medium">
              Register
            </Link>
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <p className="text-xs text-center text-neutral-500">
            For demo purposes, use:
          </p>
          <div className="mt-2 text-xs text-center space-y-1">
            <p>Artisan: artisan@example.com / password</p>
            <p>Buyer: buyer@example.com / password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;