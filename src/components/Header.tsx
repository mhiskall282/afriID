import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
              AfriID
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
            <a href="/register" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Register</a>
            <a href="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Dashboard</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Connect Wallet
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="/" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
            <a href="/register" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">Register</a>
            <a href="/dashboard" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500">Dashboard</a>
          </div>
        )}
      </nav>
    </header>
  );
};