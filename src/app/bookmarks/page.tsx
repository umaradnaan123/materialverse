import React from 'react';
import { Metadata } from 'next';
import BookmarksClient from './BookmarksClient';

export const metadata: Metadata = {
  title: "Bookmarked Materials | Materialpedia",
  description: "Your saved material profiles, specifications, pricing matrices, and guides.",
  alternates: {
    canonical: "https://materialpedia.org/bookmarks",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Bookmarked Materials | Materialpedia",
    description: "Your saved material profiles, specifications, pricing matrices, and guides.",
    url: "https://materialpedia.org/bookmarks",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bookmarked Materials",
    "url": "https://materialpedia.org/bookmarks",
    "description": "User custom bookmarked materials watchlist on Materialpedia."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BookmarksClient />
    </>
  );
}
