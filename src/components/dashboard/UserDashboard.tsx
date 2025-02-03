import React from 'react';
import { QrCode, Shield, Clock, Bell, Settings, Download } from 'lucide-react';

export const UserDashboard = () => {
  const user = {
    name: 'John Doe',
    id: 'AFR-2024-123456',
    status: 'verified',
    lastVerified: '2024-03-15T10:30:00Z',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AFR-2024-123456'
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">ID: {user.id}</p>
              </div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200">
                <Shield className="w-4 h-4" />
                Verified
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Clock className="w-6 h-6 mb-2 text-blue-500" />
                <h3 className="font-medium mb-1">Last Verified</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(user.lastVerified).toLocaleString()}
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Bell className="w-6 h-6 mb-2 text-yellow-500" />
                <h3 className="font-medium mb-1">Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 new verification requests
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <Shield className="w-8 h-8 text-green-500 mt-1" />
                  <div>
                    <p className="font-medium">Identity Verified</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Verified by National Bank • {i} day{i !== 1 ? 's' : ''} ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center mb-6">
              <QrCode className="w-32 h-32 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Your Digital ID</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use this QR code for quick verification
              </p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              <Download className="w-4 h-4" />
              Download QR Code
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="font-bold mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                <Settings className="w-5 h-5 text-gray-400" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                <Shield className="w-5 h-5 text-gray-400" />
                <span>Privacy Controls</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                <Download className="w-5 h-5 text-gray-400" />
                <span>Export Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};