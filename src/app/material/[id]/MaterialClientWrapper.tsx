'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../../context/AppContext';
import MaterialDetail from '../../../components/MaterialDetail';

export default function MaterialClientWrapper({ id }: { id: string }) {
  const router = useRouter();
  const { lang, toggleBookmark, bookmarks, addToCompare } = useApp();

  return (
    <MaterialDetail
      materialId={id}
      lang={lang}
      onBack={() => router.push('/')}
      onAddToCompare={addToCompare}
      onToggleBookmark={toggleBookmark}
      bookmarks={bookmarks}
      onSelectMaterial={(newId) => router.push(`/material/${newId}`)}
    />
  );
}
