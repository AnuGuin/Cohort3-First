import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  BookOpenIcon
} from '@heroicons/react/24/solid';

const CollapsibleSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', icon: <HomeIcon className="h-5 w-5 text-white" /> },
    { name: 'Profile', icon: <UserIcon className="h-5 w-5  text-white" /> },
    { name: 'Settings', icon: <Cog6ToothIcon className="h-5 w-5  text-white" /> },
    { name: 'CourseApp', icon: < BookOpenIcon className= "h-5 w-5 text-white" />}
  ];

  return (
    <div className="flex min-h-screen bg-blue-700">
      {/* Sidebar */}
      <div className={`bg-blue-600 border-r transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} flex flex-col`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className={`font-bold text-gray-200 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
            CourseApp
          </span>
          <button onClick={toggleSidebar} className="md:hidden">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-2">
          {navItems.map((item) => (
            <div key={item.name} className="flex items-center p-2 rounded hover:bg-blue-400 duration-500 cursor-pointer transition-colors">
              {item.icon}
              <span className={`ml-3 text-sm text-white font-medium transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 text-white text-shadow-2xs p-4">
        <button onClick={toggleSidebar} className="mb-4 hidden md:block">
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        <h1 className="text-xl font-bold">Welcome!</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
};

export default CollapsibleSidebar;
