import React, { useState } from 'react';
import { Lock, Shield, CheckCircle, RefreshCw } from 'lucide-react';

export const ZKProofVerification = () => {
  const [proofStatus, setProofStatus] = useState<'generating' | 'verifying' | 'complete'>('generating');
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    if (proofStatus === 'generating') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setProofStatus('verifying');
            return 0;
          }
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(interval);
    } else if (proofStatus === 'verifying') {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setProofStatus('complete');
            return 100;
          }
          return prev + 20;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [proofStatus]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Lock className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-2xl font-bold mb-2">Zero-Knowledge Proof Generation</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Securely verify your identity without revealing sensitive information
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">
                {proofStatus === 'generating' && 'Generating Proof'}
                {proofStatus === 'verifying' && 'Verifying Proof'}
                {proofStatus === 'complete' && 'Proof Complete'}
              </span>
              <span className="text-sm text-gray-500">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium">Privacy Score</span>
              </div>
              <p className="text-2xl font-bold text-green-500">100%</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Proof Size</span>
              </div>
              <p className="text-2xl font-bold text-blue-500">256 bytes</p>
            </div>
          </div>

          {proofStatus === 'complete' && (
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-medium text-green-800 dark:text-green-200">
                  Proof Successfully Generated
                </span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                Your zero-knowledge proof has been generated and verified on the blockchain
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <p className="font-mono text-xs text-gray-600 dark:text-gray-400 break-all">
                  0x7f9c1e3d5b8a2f4c6e9d0b8a7c4f1e3d5b8a2f4c6e9d0b8a7c4f1e3d5b8a2f4c
                </p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="font-medium mb-2">Proof Details</h3>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <p>• Using Groth16 proving system</p>
              <p>• 256-bit security level</p>
              <p>• Verification time: &lt;1s</p>
              <p>• Zero knowledge guarantee: Perfect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
