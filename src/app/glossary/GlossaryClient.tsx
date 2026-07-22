'use client';

import React from 'react';
import { useApp } from '../../context/AppContext';
import GlossaryAndBIS from '../../components/GlossaryAndBIS';

export default function GlossaryClient() {
  const { lang } = useApp();

  return <GlossaryAndBIS lang={lang} />;
}
