'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import BrandDirectory from '../../../components/BrandDirectory';

export default function BrandClientWrapper({ id }: { id: string }) {
  const router = useRouter();

  return (
    <BrandDirectory
      selectedBrandId={id}
      onSelectBrand={(brandId) => {
        if (brandId) {
          router.push(`/brands/${brandId}`);
        } else {
          router.push('/brands');
        }
      }}
      onBackToHome={() => router.push('/')}
    />
  );
}
