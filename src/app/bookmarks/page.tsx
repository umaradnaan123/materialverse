import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import BookmarksClient from './BookmarksClient';

export const metadata: Metadata = {
  title: "Bookmarked Materials | Materialpedia",
  description: "Your saved material profiles, specifications, pricing matrices, and guides.",
  alternates: {
    canonical: `${SITE_URL}/bookmarks`,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Bookmarked Materials | Materialpedia",
    description: "Your saved material profiles, specifications, pricing matrices, and guides.",
    url: `${SITE_URL}/bookmarks`,
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bookmarked Materials",
    "url": `${SITE_URL}/bookmarks`,
    "description": "User custom bookmarked materials watchlist on Materialpedia."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="sr-only">
        <h1>Bookmarked Materials | Materialpedia</h1>
        <p>Your saved material profiles, specifications, pricing matrices, and guides.</p>
      </div>
      <BookmarksClient />
    </>
  );
}
