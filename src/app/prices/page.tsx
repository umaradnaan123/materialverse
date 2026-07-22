'use client';

import React from 'react';
import { useApp } from '../../context/AppContext';
import PriceIntelligence from '../../components/PriceIntelligence';

export default function Page() {
  const { lang } = useApp();

  return <PriceIntelligence lang={lang} />;
}
