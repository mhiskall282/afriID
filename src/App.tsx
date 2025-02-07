// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RegistrationForm } from './components/forms/RegistrationForm';
import { VerificationPage } from './components/verification/VerificationPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { AIAgentDashboard } from './components/ai/AIAgentDashboard';
import { SmartContractDashboard } from './components/blockchain/SmartContractDashboard';
import { TokenDashboard } from './components/blockchain/TokenDashboard';
import { GovernancePortal } from './components/governance/GovernancePortal';
import { Documentation } from './components/docs/Documentation';
import { SignInForm } from './components/forms/SignInForm';
import { SignUpForm } from './components/forms/SignUpForm';
import { Footer } from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Register for Digital ID
          </h2>
          <RegistrationForm />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Verify Identity
          </h2>
          <VerificationPage />
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI Agent Network
          </h2>
          <AIAgentDashboard />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Smart Contract Infrastructure
          </h2>
          <SmartContractDashboard />
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Token Economics
          </h2>
          <TokenDashboard />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Governance
          </h2>
          <GovernancePortal />
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            User Dashboard
          </h2>
          <UserDashboard />
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Admin Dashboard
          </h2>
          <AdminDashboard />
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/documentation"
              element={
                <section className="py-16 bg-white dark:bg-gray-800">
                  <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                      Documentation
                    </h2>
                    <Documentation />
                  </div>
                </section>
              }
            />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






// import React from 'react';
// import { Header } from './components/Header';
// import { Hero } from './components/Hero';
// import { RegistrationForm } from './components/forms/RegistrationForm';
// import { VerificationPage } from './components/verification/VerificationPage';
// import { AdminDashboard } from './components/admin/AdminDashboard';
// import { UserDashboard } from './components/dashboard/UserDashboard';
// import { AIAgentDashboard } from './components/ai/AIAgentDashboard';
// import { SmartContractDashboard } from './components/blockchain/SmartContractDashboard';
// import { TokenDashboard } from './components/blockchain/TokenDashboard';
// import { GovernancePortal } from './components/governance/GovernancePortal';
// import { Documentation } from './components/docs/Documentation';
// import { Footer } from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
//       <Header />
//       <main className="pt-20">
//         <Hero />
//         <section className="py-16 bg-white dark:bg-gray-800">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">Register for Digital ID</h2>
//             <RegistrationForm />
//           </div>
//         </section>
//         <section className="py-16">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">Verify Identity</h2>
//             <VerificationPage />
//           </div>
//         </section>
//         <section className="py-16 bg-white dark:bg-gray-800">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">AI Agent Network</h2>
//             <AIAgentDashboard />
//           </div>
//         </section>
//         <section className="py-16">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">Smart Contract Infrastructure</h2>
//             <SmartContractDashboard />
//           </div>
//         </section>
//         <section className="py-16 bg-white dark:bg-gray-800">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">Token Economics</h2>
//             <TokenDashboard />
//           </div>
//         </section>
//         <section className="py-16">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">Governance</h2>
//             <GovernancePortal />
//           </div>
//         </section>
//         <section className="py-16 bg-white dark:bg-gray-800">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">Documentation</h2>
//             <Documentation />
//           </div>
//         </section>
//         <section className="py-16">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">User Dashboard</h2>
//             <UserDashboard />
//           </div>
//         </section>
//         <section className="py-16 bg-white dark:bg-gray-800">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center mb-12">Admin Dashboard</h2>
//             <AdminDashboard />
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;




