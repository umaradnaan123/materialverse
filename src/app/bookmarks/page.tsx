'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../context/AppContext';
import { materialsData } from '../../data/materialsData';
import { translations } from '../../data/translations';
import Dashboard from '../../components/Dashboard';
import { Bookmark } from 'lucide-react';

export default function BookmarksPage() {
  const router = useRouter();
  const { lang, bookmarks, toggleBookmark, addToCompare } = useApp();
  const t = translations[lang];

  const bookmarkedMats = materialsData.filter((m) => bookmarks.includes(m.id));

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-white text-center flex items-center justify-center gap-2">
        <Bookmark className="w-8 h-8 text-amber-500 fill-amber-500" />
        <span>{t.bookmarksTab} ({bookmarks.length})</span>
      </h2>
      {bookmarkedMats.length > 0 ? (
        <Dashboard
          lang={lang}
          onToggleBookmark={toggleBookmark}
          bookmarks={bookmarks}
          onAddToCompare={addToCompare}
          materials={bookmarkedMats}
        />
      ) : (
        <p className="text-center py-12 text-gray-400">Your bookmarks list is empty.</p>
      )}
    </div>
  );
}
