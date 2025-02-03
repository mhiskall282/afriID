import React, { useState } from 'react';
import { Users, Search, Filter, CheckCircle, XCircle, Clock } from 'lucide-react';

export const AdminDashboard = () => {
  const [applications] = useState([
    {
      id: '1',
      name: 'John Doe',
      dateSubmitted: '2024-03-15',
      status: 'pending',
      region: 'East Africa',
      documentType: 'National ID'
    },
    {
      id: '2',
      name: 'Jane Smith',
      dateSubmitted: '2024-03-14',
      status: 'approved',
      region: 'West Africa',
      documentType: 'Passport'
    }
  ]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">ID Applications</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Manage and review digital ID applications
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Users className="w-4 h-4" />
              Bulk Actions
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="text-left py-4 px-4">Applicant</th>
                <th className="text-left py-4 px-4">Date</th>
                <th className="text-left py-4 px-4">Region</th>
                <th className="text-left py-4 px-4">Document</th>
                <th className="text-left py-4 px-4">Status</th>
                <th className="text-left py-4 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id} className="border-b dark:border-gray-700">
                  <td className="py-4 px-4">{app.name}</td>
                  <td className="py-4 px-4">{app.dateSubmitted}</td>
                  <td className="py-4 px-4">{app.region}</td>
                  <td className="py-4 px-4">{app.documentType}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm
                      ${app.status === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200' :
                        app.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200'
                      }`}>
                      {app.status === 'approved' && <CheckCircle className="w-4 h-4" />}
                      {app.status === 'pending' && <Clock className="w-4 h-4" />}
                      {app.status === 'rejected' && <XCircle className="w-4 h-4" />}
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-green-500 hover:bg-green-50 rounded-lg dark:hover:bg-green-900/20">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg dark:hover:bg-red-900/20">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};