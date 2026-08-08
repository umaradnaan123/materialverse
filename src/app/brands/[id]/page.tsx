import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import { brandsData } from '../../../data/brandsData';
import BrandClientWrapper from './BrandClientWrapper';
import Breadcrumbs from '../../../components/Breadcrumbs';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return brandsData.map((b) => ({
    id: b.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const brand = brandsData.find((b) => b.id === id);
  if (!brand) {
    return {
      title: "Manufacturer Not Found | Materialpedia",
    };
  }

  const title = `${brand.name} | Verified Specifications & Certifications`;
  const description = `Examine ${brand.name} details: headquarters in ${brand.headquarters}, Origin: ${brand.origin}, established in ${brand.established}. Certifications: ${brand.certifications.join(', ')}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/brands/${id}`,
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${SITE_URL}/brands/${id}`,
      siteName: 'Materialpedia',
      images: brand.logo ? [{ url: brand.logo, alt: brand.name }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: brand.logo ? [brand.logo] : undefined,
    }
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const brand = brandsData.find((b) => b.id === id);

  if (!brand) {
    return (
      <div className="py-12 text-center text-red-400 font-bold">
        Brand profile not found!
      </div>
    );
  }

  // Brand structured JSON-LD schema
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": brand.name,
    "logo": brand.logo,
    "description": brand.description,
    "slogan": brand.overview,
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": brand.headquarters,
        "addressCountry": brand.origin
      }
    },
    "foundingDate": brand.established.toString(),
    "offers": brand.products.map((p) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": p
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Brands",
        "item": `${SITE_URL}/brands`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": brand.name,
        "item": `${SITE_URL}/brands/${id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <Breadcrumbs items={[{ label: "Brands", path: "/brands" }, { label: brand.name }]} />
      </div>
      <BrandClientWrapper id={id} />
    </>
  );
}
