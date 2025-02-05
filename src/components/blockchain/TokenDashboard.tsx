import React, { useState } from 'react';
import { Coins, TrendingUp, BarChart2, PieChart } from 'lucide-react';

export const TokenDashboard = () => {
  const [timeframe, setTimeframe] = useState('24h');

  const tokenStats = {
    price: 2.45,
    change: 5.67,
    marketCap: '24.5M',
    volume: '1.2M',
    holders: 15234,
    staked: '12.5M',
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Coins className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">AfriID Token</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Governance and utility token powering the AfriID ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Price</h3>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold mb-2">${tokenStats.price}</p>
            <p className="text-sm text-green-500">+{tokenStats.change}%</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Market Cap</h3>
              <BarChart2 className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold mb-2">${tokenStats.marketCap}</p>
            <p className="text-sm text-gray-500">Volume: ${tokenStats.volume}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Total Staked</h3>
              <PieChart className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold mb-2">${tokenStats.staked}</p>
            <p className="text-sm text-gray-500">{tokenStats.holders} holders</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Token Utility</h3>
            <div className="flex gap-2">
              {['24h', '7d', '30d', 'All'].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimeframe(period)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    timeframe === period
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium mb-4">Governance Rights</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Voting on protocol upgrades</li>
                <li>• Parameter adjustments</li>
                <li>• Treasury management</li>
                <li>• Feature proposals</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h4 className="font-medium mb-4">Staking Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Earn protocol fees</li>
                <li>• Enhanced voting power</li>
                <li>• Access to premium features</li>
                <li>• Network security rewards</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Token Distribution</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Community</p>
                <p className="font-medium">40%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Team</p>
                <p className="font-medium">20%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Treasury</p>
                <p className="font-medium">25%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ecosystem</p>
                <p className="font-medium">15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
