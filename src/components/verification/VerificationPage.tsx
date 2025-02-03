import React, { useState } from 'react';
import { QrCode, Shield, Clock, CheckCircle } from 'lucide-react';

export const VerificationPage = () => {
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'failed'>('pending');
  const [logs] = useState([
    {
      id: '1',
      organization: 'National Bank',
      timestamp: '2024-03-15T10:30:00Z',
      action: 'verify',
      status: 'success'
    },
    {
      id: '2',
      organization: 'Healthcare Provider',
      timestamp: '2024-03-14T15:45:00Z',
      action: 'verify',
      status: 'success'
    }
  ]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Identity Verification</h2>
          <div className="text-center p-8 border-2 border-dashed rounded-lg mb-6">
            <QrCode className="w-32 h-32 mx-auto mb-4" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Scan this QR code to verify identity
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Verify Now
            </button>
            <button className="border-2 border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              Download QR
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Verification Status</h2>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 mb-6">
            {verificationStatus === 'pending' && <Clock className="text-blue-500" />}
            {verificationStatus === 'success' && <CheckCircle className="text-green-500" />}
            {verificationStatus === 'failed' && <Shield className="text-red-500" />}
            <div>
              <p className="font-medium">
                {verificationStatus === 'pending' && 'Verification in Progress'}
                {verificationStatus === 'success' && 'Verification Successful'}
                {verificationStatus === 'failed' && 'Verification Failed'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: Just now
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Recent Verifications</h3>
            <div className="space-y-4">
              {logs.map(log => (
                <div
                  key={log.id}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">{log.organization}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(log.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Verification successful
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};