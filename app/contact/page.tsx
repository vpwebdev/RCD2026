import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import ContactForm from '@/components/ContactForm';
import Scripture from '@/components/Scripture';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Reflecting Christ Daily. Share a testimony, submit a prayer request, or send us a message. We read every one.',
  openGraph: {
    title: 'Contact — Reflecting Christ Daily',
    description:
      'Get in touch with Reflecting Christ Daily. Share a testimony, submit a prayer request, or send us a message.',
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
    title: 'Contact — Reflecting Christ Daily',
    description:
      'Get in touch with Reflecting Christ Daily. Share a testimony, submit a prayer request, or send us a message.',
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact — Reflecting Christ Daily',
    description:
      'Get in touch with Reflecting Christ Daily. Share a testimony, submit a prayer request, or send us a message.',
    url: `${siteConfig.url}/contact`,
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
          <h1>Contact</h1>
          <p className="subtitle">
            We would love to hear from you. Share a testimony, ask a question, or simply say hello.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container container--narrow">
          <ContactForm />

          <div style={{ marginTop: 'var(--space-4xl)' }}>
            <Scripture
              verse="Carry each other's burdens, and in this way you will fulfill the law of Christ."
              reference="Galatians 6:2 (NIV)"
            />
          </div>
        </div>
      </section>
    </>
  );
}
