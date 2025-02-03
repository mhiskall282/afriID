import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RegistrationForm } from './components/forms/RegistrationForm';
import { VerificationPage } from './components/verification/VerificationPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { UserDashboard } from './components/dashboard/UserDashboard';

function App() {
  // For demo purposes, showing all components
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Register for Digital ID</h2>
            <RegistrationForm />
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Verify Identity</h2>
            <VerificationPage />
          </div>
        </section>
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">User Dashboard</h2>
            <UserDashboard />
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Admin Dashboard</h2>
            <AdminDashboard />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;