// components/Sidebar.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, MenuIcon, X } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { name: 'Accueil', path: '/dashboard' },
    { name: 'Ajouter un événement', path: '/dashboard/add-event' },
    { name: 'Voir les événements', path: '/dashboard/events' },
    { name: 'Statistiques', path: '/dashboard/stats' },
  ];

  return (
    <div className={`bg-white border-r shadow-lg transition-all duration-300 ${open ? 'w-64' : 'w-16'} h-full`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className={`text-xl font-bold transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
          Événements
        </h1>
        <button type='button' onClick={() => setOpen(!open)} className="text-blue-600">
          {open ? <X size={20} /> : <MenuIcon size={100} />}
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path} legacyBehavior>
            <a
              className={`block px-4 py-2 rounded transition-all duration-200 mx-2 mb-2 text-sm font-medium 
              ${router.pathname === item.path ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}>
              {open ? item.name : item.name.charAt(0)}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;