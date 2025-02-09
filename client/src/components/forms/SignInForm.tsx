// src/components/forms/SignInForm.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Simulated API call – replace with your real sign‑in API
      await fakeSignInAPI(email, password);
      // On successful sign in, navigate to a protected page (e.g. dashboard)
      navigate('/dashboard');
    } catch (err) {
      setError('Sign in failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-green-500">
          Sign In
        </h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>


        {/* "Don't have an account?" link */}
        <div className="mb-4 text-center">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Sign up here
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

// Simulated sign in API function
const fakeSignInAPI = (email: string, password: string) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      // For testing, only accept a fixed email/password combination.
      if (email === 'test@example.com' && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
