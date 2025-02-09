import React, { useState } from 'react';
import { Code, Shield, Activity, ArrowRight, CheckCircle } from 'lucide-react';

export const SmartContractDashboard = () => {
  const [selectedContract, setSelectedContract] = useState('identity');

  const contracts = [
    {
      id: 'identity',
      name: 'Identity Registry',
      address: '0x1234...5678',
      status: 'active',
      transactions: 15234,
    },
    {
      id: 'verification',
      name: 'Verification Protocol',
      address: '0x8765...4321',
      status: 'active',
      transactions: 8921,
    },
    {
      id: 'governance',
      name: 'DAO Governance',
      address: '0x9876...1234',
      status: 'active',
      transactions: 3456,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Code className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">Smart Contract Network</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Decentralized infrastructure powering secure digital identities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contracts.map((contract) => (
            <button
              key={contract.id}
              onClick={() => setSelectedContract(contract.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedContract === contract.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Shield className={`w-8 h-8 mb-4 ${
                selectedContract === contract.id ? 'text-white' : 'text-blue-500'
              }`} />
              <h3 className="font-bold mb-2">{contract.name}</h3>
              <p className={`text-sm font-mono mb-4 ${
                selectedContract === contract.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {contract.address}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${
                  selectedContract === contract.id ? 'text-white/90' : 'text-gray-500'
                }`}>
                  {contract.transactions.toLocaleString()} txns
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <Activity className="w-4 h-4" />
                  Active
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contract Interactions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Total Value Locked</h4>
                <p className="text-2xl font-bold">$1.2M</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Daily Active Users</h4>
                <p className="text-2xl font-bold">2,345</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Gas Optimization</h4>
                <p className="text-2xl font-bold">99.5%</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-medium mb-4">Recent Transactions</h4>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-medium">Identity Verification</span>
                    </div>
                    <span className="text-sm text-gray-500">{i}m ago</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-mono">0x1234...5678</span>
                    <ArrowRight className="w-4 h-4" />
                    <span className="font-mono">0x8765...4321</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Network Status</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Block Height</p>
                <p className="font-mono font-medium">18,234,567</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gas Price</p>
                <p className="font-mono font-medium">12 Gwei</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Network Load</p>
                <p className="font-mono font-medium">65%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Validators</p>
                <p className="font-mono font-medium">100/100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};