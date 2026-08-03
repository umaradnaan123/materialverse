'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="no-print mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-gray-400 font-light">
        <li className="flex items-center">
          <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-gray-655 shrink-0" />
              {isLast || !item.path ? (
                <span className="text-gray-200 font-medium truncate max-w-[180px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
