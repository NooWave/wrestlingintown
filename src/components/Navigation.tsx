import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Rss, Bell, User } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-gray-400'}>
            <Home size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-gray-400'}>
            <Search size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/feed" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-gray-400'}>
            <Rss size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/alerts" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-gray-400'}>
            <Bell size={24} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-blue-400' : 'text-gray-400'}>
            <User size={24} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};