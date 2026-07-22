'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../context/AppContext';
import { Library, Compass, Calculator, Bookmark, FileText } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { bookmarks } = useApp();

  const navItems = [
    { id: 'library', path: '/', label: "Home", icon: Library },
    { id: 'selector', path: '/selector', label: "Finder", icon: Compass },
    { id: 'calculators', path: '/calculators', label: "Calcs", icon: Calculator },
    { id: 'bookmarks', path: '/bookmarks', label: "Saved", icon: Bookmark, badge: bookmarks.length },
    { id: 'guides', path: '/guides', label: "Guides", icon: FileText }
  ];

  const isLinkActive = (itemPath: string) => {
    if (itemPath === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(itemPath);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0b0f19]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-around md:hidden z-50 no-print">
      {navItems.map((tab) => {
        const Icon = tab.icon;
        const active = isLinkActive(tab.path);
        return (
          <Link
            key={tab.id}
            href={tab.path}
            className={`flex flex-col items-center justify-center relative flex-1 h-full py-1 text-[10px] font-medium transition-all ${
              active ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span>{tab.label}</span>
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className="absolute top-2 right-4 px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-[8px] font-extrabold scale-90">
                {tab.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
