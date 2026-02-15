import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import Scripture from '@/components/Scripture';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Reflecting Christ Daily — our mission to provide Scripture-grounded reflections that help believers encounter God in their everyday lives.',
  openGraph: {
    title: 'About — Reflecting Christ Daily',
    description:
      'Learn about Reflecting Christ Daily — our mission to provide Scripture-grounded reflections that help believers encounter God in their everyday lives.',
    url: `${siteConfig.url}/about`,
  },
  twitter: {
    title: 'About — Reflecting Christ Daily',
    description:
      'Learn about Reflecting Christ Daily — our mission to provide Scripture-grounded reflections that help believers encounter God in their everyday lives.',
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Reflecting Christ Daily',
    description:
      'Our mission to provide Scripture-grounded reflections that help believers encounter God in their everyday lives.',
    url: `${siteConfig.url}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      description:
        'Daily devotions, scripture reflections, and Christ-centered writings for believers.',
      foundingDate: '2024',
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
          <h1>About</h1>
          <p className="subtitle">
            Honest words for ordinary Christ-followers. No performance. Just reflection.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p>
              Reflecting Christ Daily began with a simple conviction: faith is not built in
              the spectacular moments. It is built in the quiet ones. The early morning prayers.
              The Scripture read at the kitchen table. The small act of obedience no one else sees.
            </p>

            <p>
              This space exists to serve Christ-followers who want to go deeper — not through
              complexity, but through consistency. Every reflection here is rooted in Scripture,
              written with honesty, and offered as a companion for the journey.
            </p>

            <p>
              We believe that the Christian life is not about performing for God but about being
              present with Him. It is not about having all the answers but about bringing all the
              questions to the One who does. And it is not about perfection — it is about faithfulness.
            </p>

            <h2>What We Believe</h2>

            <p>
              We believe the Bible is the living, authoritative Word of God. We believe that
              Jesus Christ is Lord — fully God and fully man — and that through His death and
              resurrection, we are made new. We believe in the power of the Holy Spirit to guide,
              convict, and transform. And we believe that the local church, for all its imperfections,
              is God&apos;s chosen instrument for His work in the world.
            </p>

            <p>
              Most of all, we believe that reflecting on Christ daily is not a burden. It is a gift.
              And it changes everything.
            </p>

            <h2>The Mission</h2>

            <p>
              To provide thoughtful, Scripture-grounded reflections that help believers encounter
              God in their everyday lives. No hype. No fluff. Just the Word, honest writing,
              and the quiet work of the Spirit.
            </p>
          </div>

          <aside className="about-sidebar">
            <h3>Core Values</h3>
            <ul>
              <li><strong>Scripture First</strong> — Everything is anchored in God&apos;s Word.</li>
              <li><strong>Honesty</strong> — We write from real life, not theory.</li>
              <li><strong>Simplicity</strong> — Clear truth over clever packaging.</li>
              <li><strong>Consistency</strong> — Faithfulness over intensity.</li>
              <li><strong>Community</strong> — We walk this road together.</li>
            </ul>

            <hr />

            <h3>Scripture</h3>
            <Scripture
              verse="But his delight is in the law of the Lord, and on his law he meditates day and night."
              reference="Psalm 1:2 (ESV)"
            />

            <hr />

            <h3>Connect</h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)', lineHeight: 'var(--leading-normal)' }}>
              Have a question, testimony, or just want to say hello?{' '}
              <Link href="/contact">Get in touch</Link>. We read every message.
            </p>
          </aside>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
