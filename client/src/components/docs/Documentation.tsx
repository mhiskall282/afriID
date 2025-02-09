import React from 'react';
import { Book, Code, Terminal, FileText } from 'lucide-react';

export const Documentation = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Book className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about AfriID's blockchain identity system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Terminal className="w-8 h-8 text-blue-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Quick Start</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get up and running with AfriID in minutes
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read Quick Start Guide →
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Code className="w-8 h-8 text-green-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">API Reference</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Complete API documentation and examples
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              View API Docs →
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Documentation</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      Introduction to AfriID
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      System Architecture
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      Security Model
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4">Core Concepts</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      Digital Identity Basics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      Zero-Knowledge Proofs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      Blockchain Integration
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4">Advanced Topics</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      Smart Contract Architecture
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      AI Agent Network
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                      <FileText className="w-4 h-4" />
                      Governance Model
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
