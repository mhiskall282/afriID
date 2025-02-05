import React from 'react';
import { BarChart, PieChart, Activity, Users, TrendingUp, Map } from 'lucide-react';

export const AdminAnalytics = () => {
  const stats = {
    totalUsers: 15234,
    activeVerifications: 892,
    successRate: 98.5,
    avgProcessingTime: '2.3 days'
  };

  const regions = [
    { name: 'East Africa', users: 5230, color: 'bg-blue-500' },
    { name: 'West Africa', users: 4120, color: 'bg-green-500' },
    { name: 'North Africa', users: 3450, color: 'bg-yellow-500' },
    { name: 'South Africa', users: 2434, color: 'bg-purple-500' }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-time insights and analytics for digital identity management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-blue-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Total Users</span>
          </div>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</h3>
            <span className="text-green-500 text-sm">+12.5%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Activity className="w-8 h-8 text-green-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Active Verifications</span>
          </div>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-bold">{stats.activeVerifications}</h3>
            <span className="text-green-500 text-sm">+5.2%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <PieChart className="w-8 h-8 text-yellow-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Success Rate</span>
          </div>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-bold">{stats.successRate}%</h3>
            <span className="text-green-500 text-sm">+0.8%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-purple-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Avg. Processing Time</span>
          </div>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-bold">{stats.avgProcessingTime}</h3>
            <span className="text-green-500 text-sm">-0.3 days</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Regional Distribution</h3>
            <Map className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {regions.map((region) => (
              <div key={region.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{region.name}</span>
                  <span className="text-sm font-medium">{region.users.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`${region.color} h-2 rounded-full`}
                    style={{ width: `${(region.users / stats.totalUsers) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">AI/ML Insights</h3>
            <BarChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Fraud Detection Accuracy</h4>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.2%' }}></div>
                </div>
                <span className="ml-4 text-sm font-medium">99.2%</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Document Verification Speed</h4>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94.5%' }}></div>
                </div>
                <span className="ml-4 text-sm font-medium">94.5%</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Biometric Match Rate</h4>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '97.8%' }}></div>
                </div>
                <span className="ml-4 text-sm font-medium">97.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};