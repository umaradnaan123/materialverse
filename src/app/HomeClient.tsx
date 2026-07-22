'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import Dashboard from '../components/Dashboard';

export default function HomeClient() {
  const { lang, toggleBookmark, bookmarks, addToCompare } = useApp();

  return (
    <Dashboard
      lang={lang}
      onToggleBookmark={toggleBookmark}
      bookmarks={bookmarks}
      onAddToCompare={addToCompare}
    />
  );
}
