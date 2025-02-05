import React, { useState } from 'react';
import { Vote, Users, FileText, CheckCircle, Clock } from 'lucide-react';

export const GovernancePortal = () => {
  const [activeTab, setActiveTab] = useState('active');

  const proposals = [
    {
      id: 1,
      title: 'Upgrade Identity Verification Protocol',
      description: 'Implement enhanced biometric verification system',
      status: 'active',
      votes: { for: 65, against: 35 },
      endTime: '2024-04-01',
    },
    {
      id: 2,
      title: 'Add Support for New African Regions',
      description: 'Expand coverage to 5 new countries',
      status: 'active',
      votes: { for: 78, against: 22 },
      endTime: '2024-03-28',
    },
    {
      id: 3,
      title: 'Increase Validator Rewards',
      description: 'Adjust reward distribution mechanism',
      status: 'completed',
      votes: { for: 92, against: 8 },
      endTime: '2024-03-15',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Vote className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h2 className="text-3xl font-bold mb-4">Governance Portal</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Shape the future of digital identity in Africa
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('active')}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'active'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Active Proposals
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'completed'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Completed
                </button>
              </div>
              <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  Create Proposal
                </button>
              </div>
            </div>

            {/* Proposals List */}
            <div className="space-y-6">
              {proposals
                .filter((proposal) =>
                  activeTab === 'active'
                    ? proposal.status === 'active'
                    : proposal.status === 'completed'
                )
                .map((proposal) => (
                  <div
                    key={proposal.id}
                    className="border dark:border-gray-700 rounded-lg p-6"
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {proposal.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {proposal.description}
                        </p>
                      </div>
                      <span
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm mt-4 sm:mt-0 ${
                          proposal.status === 'active'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200'
                        }`}
                      >
                        {proposal.status === 'active' ? (
                          <Clock className="w-4 h-4" />
                        ) : (
                          <CheckCircle className="w-4 h-4" />
                        )}
                        {proposal.status.charAt(0).toUpperCase() +
                          proposal.status.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Voting Progress */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>For: {proposal.votes.for}%</span>
                          <span>Against: {proposal.votes.against}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500"
                            style={{ width: `${proposal.votes.for}%` }}
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>End Date: {proposal.endTime}</span>
                        <div className="flex gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
                          <button className="w-full sm:w-auto px-4 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200 rounded-full">
                            Vote For
                          </button>
                          <button className="w-full sm:w-auto px-4 py-1 bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200 rounded-full">
                            Vote Against
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold mb-2">Total Voters</h3>
              <p className="text-2xl font-bold">15,234</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Vote className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold mb-2">Proposals Passed</h3>
              <p className="text-2xl font-bold">45</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <FileText className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-bold mb-2">Active Proposals</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernancePortal;
