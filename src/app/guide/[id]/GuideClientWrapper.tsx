'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import EducationalGuides from '../../../components/EducationalGuides';

export default function GuideClientWrapper({ id }: { id: string }) {
  const router = useRouter();

  return (
    <EducationalGuides
      selectedArticleId={id}
      onSelectArticle={(articleId) => {
        if (articleId) {
          router.push(`/guide/${articleId}`);
        } else {
          router.push('/guides');
        }
      }}
      onBackToHome={() => router.push('/')}
    />
  );
}
