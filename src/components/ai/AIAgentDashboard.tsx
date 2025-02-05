import React, { useState } from 'react';
import { Bot, Brain, MessageSquare, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export const AIAgentDashboard = () => {
  const [activeAgent, setActiveAgent] = useState('identity');
  const [agentStatus, setAgentStatus] = useState<'idle' | 'processing' | 'complete'>('idle');
  
  const agents = [
    {
      id: 'identity',
      name: 'Identity Verification Agent',
      description: 'Advanced AI for document and biometric verification',
      status: 'active',
      accuracy: 99.8,
    },
    {
      id: 'fraud',
      name: 'Fraud Detection Agent',
      description: 'Real-time fraud pattern detection and prevention',
      status: 'active',
      accuracy: 99.5,
    },
    {
      id: 'kyc',
      name: 'KYC Compliance Agent',
      description: 'Automated KYC process management and verification',
      status: 'active',
      accuracy: 99.3,
    },
  ];

  const simulateAgentProcess = () => {
    setAgentStatus('processing');
    setTimeout(() => {
      setAgentStatus('complete');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Bot className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">AI Agent Network</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Decentralized AI agents working together to secure and verify digital identities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setActiveAgent(agent.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                activeAgent === agent.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Brain className={`w-8 h-8 mb-4 ${
                activeAgent === agent.id ? 'text-white' : 'text-blue-500'
              }`} />
              <h3 className="font-bold mb-2">{agent.name}</h3>
              <p className={`text-sm ${
                activeAgent === agent.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {agent.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className={`text-sm ${
                  activeAgent === agent.id ? 'text-white/90' : 'text-gray-500'
                }`}>
                  Accuracy: {agent.accuracy}%
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Active
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Agent Activity</h3>
            <button
              onClick={simulateAgentProcess}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Run Analysis
            </button>
          </div>

          <div className="space-y-6">
            {agentStatus === 'processing' && (
              <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Clock className="w-6 h-6 text-blue-500 animate-spin" />
                <div>
                  <p className="font-medium">Processing</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    AI agents are analyzing the data...
                  </p>
                </div>
              </div>
            )}

            {agentStatus === 'complete' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">Analysis Complete</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      All security checks passed successfully
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h4 className="font-medium mb-2">Verification Score</h4>
                    <p className="text-2xl font-bold text-green-500">98.7%</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h4 className="font-medium mb-2">Risk Assessment</h4>
                    <p className="text-2xl font-bold text-green-500">Low</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-medium mb-2">Recent Agent Logs</h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Document Verification</span>
                    <span className="text-gray-500">2 mins ago</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Successfully verified passport authenticity
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Biometric Analysis</span>
                    <span className="text-gray-500">5 mins ago</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Facial recognition match confirmed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};