import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Lock } from 'lucide-react';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
                Secure Digital Identity
              </span>
              <br />
              for Everyone in Africa
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Empowering individuals with blockchain-based digital identities. 
              Secure, portable, and universally accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
                onClick={() => navigate('/register')}
              >
                Get Your Digital ID
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800"
              alt="Digital Identity"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
