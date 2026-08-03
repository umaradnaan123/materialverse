'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../context/AppContext';
import ComparisonEngine from '../../components/ComparisonEngine';

export default function CompareClient() {
  const router = useRouter();
  const { lang, compareList, removeFromCompare, clearCompare } = useApp();

  return (
    <ComparisonEngine
      lang={lang}
      compareList={compareList}
      onRemoveFromCompare={removeFromCompare}
      onClearCompare={clearCompare}
      onSelectMaterial={(id) => router.push(`/materials/${id}`)}
    />
  );
}
