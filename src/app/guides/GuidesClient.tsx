'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import EducationalGuides from '../../components/EducationalGuides';

export default function GuidesClient() {
  const router = useRouter();

  return (
    <EducationalGuides
      selectedArticleId={null}
      onSelectArticle={(id) => {
        if (id) {
          router.push(`/guide/${id}`);
        }
      }}
      onBackToHome={() => router.push('/')}
    />
  );
}
