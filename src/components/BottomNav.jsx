import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Search, Calculator, Bookmark, MessageSquare } from 'lucide-react';
import './BottomNav.css';

function BottomNav() {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/handbook', icon: BookOpen, label: 'Handbook' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/calculator', icon: Calculator, label: 'Calculator' },
    { path: '/chat', icon: MessageSquare, label: 'AI Chat' },
    { path: '/bookmarks', icon: Bookmark, label: 'Bookmarks' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <item.icon size={22} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
