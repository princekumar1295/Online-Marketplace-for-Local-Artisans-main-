import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState<'buyer' | 'artisan'>('buyer');
  const [formError, setFormError] = useState('');
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !password || !passwordConfirm) {
      setFormError('Please fill in all fields');
      return;
    }
    
    if (password !== passwordConfirm) {
      setFormError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setFormError('Password must be at least 6 characters');
      return;
    }
    
    try {
      await register(name, email, password, role);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled by the auth context
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl font-medium text-neutral-900">Create an Account</h1>
          <p className="mt-2 text-neutral-600">Join our community of artisans and buyers</p>
        </div>
        
        {(error || formError) && (
          <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
            {error || formError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <input
                id="role-buyer"
                name="role"
                type="radio"
                checked={role === 'buyer'}
                onChange={() => setRole('buyer')}
                className="h-4 w-4 text-primary-500 focus:ring-primary-400"
              />
              <label htmlFor="role-buyer" className="ml-2 block text-neutral-700">
                I want to buy
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="role-artisan"
                name="role"
                type="radio"
                checked={role === 'artisan'}
                onChange={() => setRole('artisan')}
                className="h-4 w-4 text-primary-500 focus:ring-primary-400"
              />
              <label htmlFor="role-artisan" className="ml-2 block text-neutral-700">
                I want to sell
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="name" className="label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Jane Smith"
            />
          </div>
          
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
            <label htmlFor="password" className="label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="••••••••"
            />
          </div>
          
          <div>
            <label htmlFor="password-confirm" className="label">Confirm Password</label>
            <input
              id="password-confirm"
              name="password-confirm"
              type="password"
              autoComplete="new-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="input"
              placeholder="••••••••"
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-500 focus:ring-primary-400"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-neutral-700">
              I agree to the{' '}
              <Link to="/terms-of-service" className="text-primary-500 hover:text-primary-600">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link to="/privacy-policy" className="text-primary-500 hover:text-primary-600">
                Privacy Policy
              </Link>
            </label>
          </div>
          
          <div>
            <Button 
              type="submit" 
              fullWidth 
              size="lg"
              isLoading={loading}
            >
              Create Account
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-neutral-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-500 hover:text-primary-600 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;