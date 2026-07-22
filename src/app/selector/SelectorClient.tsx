'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../../context/AppContext';
import RecommendationEngine from '../../components/RecommendationEngine';

export default function SelectorClient() {
  const router = useRouter();
  const { lang } = useApp();

  return (
    <RecommendationEngine
      lang={lang}
      onSelectMaterial={(id) => router.push(`/material/${id}`)}
    />
  );
}
