import React, { useState } from 'react';
import { Shield, Key, Wallet } from 'lucide-react';

export const AdminLogin = () => {
  const [loginMethod, setLoginMethod] = useState<'credentials' | 'wallet'>('credentials');
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleCredentialsLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with credentials:', credentials);
  };

  const handleWalletConnect = () => {
    console.log('Connecting wallet...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Shield className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Admin Access Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Secure authentication required for administrative access
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setLoginMethod('credentials')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                loginMethod === 'credentials'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              <Key className="w-4 h-4" />
              Credentials
            </button>
            <button
              onClick={() => setLoginMethod('wallet')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                loginMethod === 'wallet'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              <Wallet className="w-4 h-4" />
              Wallet
            </button>
          </div>

          {loginMethod === 'credentials' ? (
            <form className="mt-8 space-y-6" onSubmit={handleCredentialsLogin}>
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border dark:bg-gray-800 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border dark:bg-gray-800 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({ ...credentials, password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Connect your wallet to authenticate as an admin
                </p>
                <button
                  onClick={handleWalletConnect}
                  className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};