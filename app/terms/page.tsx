import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Reflecting Christ Daily. Please review these terms before using our website.',
  openGraph: {
    title: 'Terms of Service — Reflecting Christ Daily',
    description:
      'Terms of Service for Reflecting Christ Daily. Please review these terms before using our website.',
    url: `${siteConfig.url}/terms`,
  },
  twitter: {
    title: 'Terms of Service — Reflecting Christ Daily',
    description:
      'Terms of Service for Reflecting Christ Daily. Please review these terms before using our website.',
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service — Reflecting Christ Daily',
    description:
      'Terms of Service for Reflecting Christ Daily. Please review these terms before using our website.',
    url: `${siteConfig.url}/terms`,
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
          <h1>Terms of Service</h1>
          <p className="subtitle">
            Please review these terms before using our website.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container container--narrow">
          <div className="article-body">
            <p><strong>Effective Date:</strong> February 25, 2026</p>

            <p>
              Welcome to Reflecting Christ Daily. By accessing or using our website
              at {siteConfig.url}, you agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our site.
            </p>

            <h2>Acceptance of Terms</h2>

            <p>
              By visiting, browsing, or otherwise using this website, you acknowledge that you
              have read, understood, and agree to these Terms of Service and
              our <a href="/privacy">Privacy Policy</a>. We reserve the right to update these
              terms at any time, and your continued use of the site constitutes acceptance of
              any changes.
            </p>

            <h2>Intellectual Property</h2>

            <p>
              All content on this site — including articles, devotional reflections, graphics,
              and design — is the property of Reflecting Christ Daily unless otherwise noted.
              Scripture quotations are used under the terms of their respective translations.
            </p>

            <p>
              You may share brief excerpts of our content for personal, non-commercial purposes
              with proper attribution and a link back to the original post. Reproducing entire
              articles or using our content for commercial purposes without written permission
              is prohibited.
            </p>

            <h2>User Conduct</h2>

            <p>When using our site, you agree not to:</p>
            <ul>
              <li>Use the site for any unlawful purpose or in violation of any applicable laws</li>
              <li>Submit false, misleading, or spam content through our contact form or newsletter signup</li>
              <li>Attempt to interfere with the site&apos;s functionality or security</li>
              <li>Scrape, copy, or reproduce our content in bulk without permission</li>
            </ul>

            <h2>Newsletter</h2>

            <p>
              If you subscribe to our newsletter, you consent to receiving periodic emails from
              us. You may unsubscribe at any time using the link in any email. We will never
              share your email address with third parties for marketing purposes.
            </p>

            <h2>Disclaimers</h2>

            <p>
              The content on Reflecting Christ Daily is provided for inspirational and
              educational purposes. Our devotional reflections represent personal meditations
              on Scripture and are not a substitute for pastoral counsel, professional advice,
              or personal Bible study.
            </p>

            <p>
              This site is provided &quot;as is&quot; without warranties of any kind, either
              express or implied. We do not guarantee that the site will be available at all
              times or free from errors.
            </p>

            <h2>Limitation of Liability</h2>

            <p>
              To the fullest extent permitted by law, Reflecting Christ Daily shall not be
              liable for any indirect, incidental, special, or consequential damages arising
              from your use of or inability to use this website. This includes but is not
              limited to damages for loss of data or other intangible losses.
            </p>

            <h2>External Links</h2>

            <p>
              Our site may contain links to external websites. We are not responsible for the
              content, accuracy, or practices of any third-party sites. Inclusion of a link
              does not imply endorsement.
            </p>

            <h2>Governing Law</h2>

            <p>
              These Terms of Service are governed by and construed in accordance with the laws
              of the United States. Any disputes arising from these terms or your use of the
              site shall be resolved in accordance with applicable law.
            </p>

            <h2>Changes to These Terms</h2>

            <p>
              We may revise these Terms of Service at any time by posting updated terms on this
              page. The effective date at the top of this page indicates when the terms were
              last updated. We encourage you to review these terms periodically.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you have questions about these Terms of Service, please reach out through
              our <a href="/contact">contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
