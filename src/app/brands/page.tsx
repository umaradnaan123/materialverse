'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BrandDirectory from '../../components/BrandDirectory';

function BrandsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  return (
    <BrandDirectory
      selectedBrandId={null}
      initialCategory={initialCategory}
      onSelectBrand={(id) => {
        if (id) {
          router.push(`/brand/${id}`);
        }
      }}
      onBackToHome={() => router.push('/')}
    />
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-12 text-gray-400">Loading Brand Directory...</div>}>
      <BrandsContent />
    </Suspense>
  );
}
