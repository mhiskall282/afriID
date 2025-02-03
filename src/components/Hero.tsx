import React from 'react';
import { Shield, Users, Lock } from 'lucide-react';

export const Hero = () => {
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
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
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

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <Shield className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Blockchain Security</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your identity is secured by advanced blockchain technology, ensuring 
              maximum protection against fraud.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Universal Access</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access financial services, healthcare, and more with your digital identity.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <Lock className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Privacy First</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You control your data. Share only what you want, when you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};