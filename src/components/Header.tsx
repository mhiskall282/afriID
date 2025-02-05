import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown, Shield, Users, Wallet, Book, Settings, HelpCircle, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const [notifications] = useState([
    { id: 1, text: 'New verification request', time: '2 min ago' },
    { id: 2, text: 'Governance proposal update', time: '1 hour ago' },
    { id: 3, text: 'Security alert', time: '3 hours ago' },
  ]);

  const menus = [
    {
      title: 'Products',
      items: [
        {
          name: 'Digital Identity',
          description: 'Secure blockchain identity solutions',
          icon: Shield,
        },
        {
          name: 'Verification',
          description: 'AI-powered identity verification',
          icon: Users,
        },
        {
          name: 'Enterprise',
          description: 'Solutions for businesses',
          icon: Wallet,
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          name: 'Documentation',
          description: 'Guides and references',
          icon: Book,
        },
        {
          name: 'API Reference',
          description: 'Technical documentation',
          icon: Settings,
        },
        {
          name: 'Support',
          description: '24/7 customer support',
          icon: HelpCircle,
        },
      ],
    },
  ];

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side: AfriID title as a link */}
          <div className="flex items-center">
            <Link to="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
                AfriID
              </span>
            </Link>
          </div>

          {/* Right side: Navigation links and buttons */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-8">
              {menus.map((menu) => (
                <div key={menu.title} className="relative">
                  <button
                    onMouseEnter={() => setActiveMenu(menu.title)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    {menu.title}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>

                  {activeMenu === menu.title && (
                    <div
                      onMouseEnter={() => setActiveMenu(menu.title)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2"
                    >
                      {menu.items.map((item) =>
                        item.name === 'Documentation' ? (
                          <Link
                            key={item.name}
                            to="/documentation"
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <item.icon className="w-6 h-6 text-blue-500 mt-1" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <a
                            key={item.name}
                            href="#"
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                          >
                            <item.icon className="w-6 h-6 text-blue-500 mt-1" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="/pricing"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                Pricing
              </a>

              <a
                href="/contact"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4 ml-8">
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === 'notifications' ? null : 'notifications'
                    )
                  }
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {activeMenu === 'notifications' && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2">
                    <div className="px-4 py-2 border-b dark:border-gray-700">
                      <h3 className="text-sm font-medium">Notifications</h3>
                    </div>
                    {notifications.map((notification) => (
                      <a
                        key={notification.id}
                        href="#"
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {notification.text}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {notification.time}
                          </p>
                        </div>
                      </a>
                    ))}
                    <div className="px-4 py-2 border-t dark:border-gray-700">
                      <a
                        href="#"
                        className="text-sm text-blue-500 hover:text-blue-600"
                      >
                        View all notifications
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* removed sign in link it is now empty  */}
              <a
                href="/login"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              >
               
              </a>

              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Sign In
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none ml-4"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menus.map((menu) => (
              <div key={menu.title} className="space-y-2">
                <button
                  onClick={() =>
                    setActiveMenu(activeMenu === menu.title ? null : menu.title)
                  }
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  {menu.title}
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      activeMenu === menu.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeMenu === menu.title && (
                  <div className="pl-4 space-y-2">
                    {menu.items.map((item) =>
                      item.name === 'Documentation' ? (
                        <Link
                          key={item.name}
                          to="/documentation"
                          className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.name}
                        </Link>
                      ) : (
                        <a
                          key={item.name}
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/pricing"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              Contact
            </a>
            <div className="pt-4 border-t dark:border-gray-700">
              <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};





// import React, { useState } from 'react';
// import { Menu, X, Sun, Moon, ChevronDown, Shield, Users, Wallet, Book, Settings, HelpCircle, Bell } from 'lucide-react';
// import { useTheme } from '../hooks/useTheme';

// export const Header = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const { theme, toggleTheme } = useTheme();
//   const [notifications] = useState([
//     { id: 1, text: 'New verification request', time: '2 min ago' },
//     { id: 2, text: 'Governance proposal update', time: '1 hour ago' },
//     { id: 3, text: 'Security alert', time: '3 hours ago' },
//   ]);

//   const menus = [
//     {
//       title: 'Products',
//       items: [
//         { name: 'Digital Identity', description: 'Secure blockchain identity solutions', icon: Shield },
//         { name: 'Verification', description: 'AI-powered identity verification', icon: Users },
//         { name: 'Enterprise', description: 'Solutions for businesses', icon: Wallet },
//       ]
//     },
//     {
//       title: 'Resources',
//       items: [
//         { name: 'Documentation', description: 'Guides and references', icon: Book },
//         { name: 'API Reference', description: 'Technical documentation', icon: Settings },
//         { name: 'Support', description: '24/7 customer support', icon: HelpCircle },
//       ]
//     }
//   ];

//   return (
//     <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
//               AfriID
//             </span>
            
//             <div className="hidden md:flex items-center ml-8 space-x-1">
//               {menus.map((menu) => (
//                 <div key={menu.title} className="relative">
//                   <button
//                     onMouseEnter={() => setActiveMenu(menu.title)}
//                     onMouseLeave={() => setActiveMenu(null)}
//                     className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
//                   >
//                     {menu.title}
//                     <ChevronDown className="w-4 h-4 ml-1" />
//                   </button>
                  
//                   {activeMenu === menu.title && (
//                     <div
//                       onMouseEnter={() => setActiveMenu(menu.title)}
//                       onMouseLeave={() => setActiveMenu(null)}
//                       className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2"
//                     >
//                       {menu.items.map((item) => (
//                         <a
//                           key={item.name}
//                           href="#"
//                           className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
//                         >
//                           <item.icon className="w-6 h-6 text-blue-500 mt-1" />
//                           <div className="ml-3">
//                             <p className="text-sm font-medium text-gray-900 dark:text-white">
//                               {item.name}
//                             </p>
//                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                               {item.description}
//                             </p>
//                           </div>
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
              
//               <a href="/pricing" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 Pricing
//               </a>
              
//               <a href="/contact" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//                 Contact
//               </a>
//             </div>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-4">
//             <div className="relative">
//               <button
//                 onClick={() => setActiveMenu(activeMenu === 'notifications' ? null : 'notifications')}
//                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
//               >
//                 <Bell size={20} />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
              
//               {activeMenu === 'notifications' && (
//                 <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2">
//                   <div className="px-4 py-2 border-b dark:border-gray-700">
//                     <h3 className="text-sm font-medium">Notifications</h3>
//                   </div>
//                   {notifications.map((notification) => (
//                     <a
//                       key={notification.id}
//                       href="#"
//                       className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
//                     >
//                       <div className="ml-3">
//                         <p className="text-sm font-medium text-gray-900 dark:text-white">
//                           {notification.text}
//                         </p>
//                         <p className="text-xs text-gray-500 dark:text-gray-400">
//                           {notification.time}
//                         </p>
//                       </div>
//                     </a>
//                   ))}
//                   <div className="px-4 py-2 border-t dark:border-gray-700">
//                     <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
//                       View all notifications
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
            
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
            
//             <a href="/login" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
//               Sign in
//             </a>
            
//             <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
//               Connect Wallet
//             </button>
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden focus:outline-none"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {isOpen && (
//           <div className="md:hidden mt-4 space-y-4">
//             {menus.map((menu) => (
//               <div key={menu.title} className="space-y-2">
//                 <button
//                   onClick={() => setActiveMenu(activeMenu === menu.title ? null : menu.title)}
//                   className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
//                 >
//                   {menu.title}
//                   <ChevronDown className={`w-4 h-4 transform transition-transform ${
//                     activeMenu === menu.title ? 'rotate-180' : ''
//                   }`} />
//                 </button>
                
//                 {activeMenu === menu.title && (
//                   <div className="pl-4 space-y-2">
//                     {menu.items.map((item) => (
//                       <a
//                         key={item.name}
//                         href="#"
//                         className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500"
//                       >
//                         <item.icon className="w-4 h-4 mr-2" />
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <a href="/pricing" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//               Pricing
//             </a>
//             <a href="/contact" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
//               Contact
//             </a>
//             <div className="pt-4 border-t dark:border-gray-700">
//               <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
//                 Connect Wallet
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };
