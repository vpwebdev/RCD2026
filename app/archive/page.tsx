import type { Metadata } from 'next';
import { getPostsGroupedByMonth, getCategories } from '@/lib/posts';
import { siteConfig } from '@/lib/site';
import CategoryFilter from '@/components/CategoryFilter';

export const metadata: Metadata = {
  title: 'Archive',
  description:
    'Browse every devotion and reflection from Reflecting Christ Daily, organized by date. Scripture-grounded writings on faith, prayer, and Christian living.',
  openGraph: {
    title: 'Archive — Reflecting Christ Daily',
    description:
      'Browse every devotion and reflection from Reflecting Christ Daily, organized by date.',
    url: `${siteConfig.url}/archive`,
  },
  twitter: {
    title: 'Archive — Reflecting Christ Daily',
    description:
      'Browse every devotion and reflection from Reflecting Christ Daily, organized by date.',
  },
  alternates: {
    canonical: `${siteConfig.url}/archive`,
  },
};

export default function ArchivePage() {
  const groups = getPostsGroupedByMonth();
  const categories = getCategories();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Archive — Reflecting Christ Daily',
    description:
      'Browse every devotion and reflection from Reflecting Christ Daily, organized by date.',
    url: `${siteConfig.url}/archive`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <div className="page-header">
          <h1>Archive</h1>
          <p className="subtitle">
            Every reflection, organized by date. Scroll back as far as you need.
          </p>
        </div>
      </div>

      <CategoryFilter groups={groups} categories={categories} />
    </>
  );
}
