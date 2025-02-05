import React, { useState } from 'react';
import { Brain, Scan, CheckCircle, AlertTriangle, Camera } from 'lucide-react';

export const AIVerification = () => {
  const [verificationStep, setVerificationStep] = useState(1);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'failed'>('pending');

  const simulateVerification = () => {
    setVerificationStatus('pending');
    setTimeout(() => {
      setVerificationStep(2);
      setTimeout(() => {
        setVerificationStep(3);
        setVerificationStatus('success');
      }, 2000);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Brain className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">AI-Powered Verification</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Advanced biometric verification using machine learning and zero-knowledge proofs
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex-1 relative ${
                  step !== 3 ? 'after:content-[""] after:h-1 after:w-full after:absolute after:top-4 after:left-1/2 after:bg-gray-200 dark:after:bg-gray-700' : ''
                }`}
              >
                <div
                  className={`relative z-10 w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                    verificationStep >= step
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                <p
                  className={`mt-2 text-xs text-center ${
                    verificationStep >= step
                      ? 'text-blue-500'
                      : 'text-gray-500'
                  }`}
                >
                  {step === 1 && 'Capture'}
                  {step === 2 && 'Process'}
                  {step === 3 && 'Verify'}
                </p>
              </div>
            ))}
          </div>

          {verificationStep === 1 && (
            <div className="text-center p-8 border-2 border-dashed rounded-lg mb-8">
              <Camera className="w-24 h-24 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Position your face in the frame for AI verification
              </p>
              <button
                onClick={simulateVerification}
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                Start Scan
              </button>
            </div>
          )}

          {verificationStep === 2 && (
            <div className="text-center p-8">
              <Scan className="w-24 h-24 mx-auto mb-4 text-blue-500 animate-pulse" />
              <p className="text-lg font-medium mb-2">Processing</p>
              <p className="text-gray-600 dark:text-gray-400">
                Analyzing biometric data with AI...
              </p>
            </div>
          )}

          {verificationStep === 3 && (
            <div className="text-center p-8">
              {verificationStatus === 'success' ? (
                <>
                  <CheckCircle className="w-24 h-24 mx-auto mb-4 text-green-500" />
                  <p className="text-lg font-medium text-green-500 mb-2">
                    Verification Successful
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Identity confirmed with 99.9% confidence
                  </p>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-24 h-24 mx-auto mb-4 text-red-500" />
                  <p className="text-lg font-medium text-red-500 mb-2">
                    Verification Failed
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Please try again or contact support
                  </p>
                </>
              )}
            </div>
          )}

          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="font-medium mb-2">Security Features</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-blue-500" />
                Advanced facial recognition AI
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Zero-knowledge proof verification
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-yellow-500" />
                Encrypted biometric data
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};