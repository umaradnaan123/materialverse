'use client';

import React from 'react';
import { useApp } from '../../context/AppContext';
import CalculatorsHub from '../../components/CalculatorsHub';

export default function CalculatorsClient() {
  const { lang } = useApp();

  return <CalculatorsHub lang={lang} />;
}
