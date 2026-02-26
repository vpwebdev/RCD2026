import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Reflecting Christ Daily. Learn how we handle your information and protect your privacy.',
  openGraph: {
    title: 'Privacy Policy — Reflecting Christ Daily',
    description:
      'Privacy Policy for Reflecting Christ Daily. Learn how we handle your information and protect your privacy.',
    url: `${siteConfig.url}/privacy`,
  },
  twitter: {
    title: 'Privacy Policy — Reflecting Christ Daily',
    description:
      'Privacy Policy for Reflecting Christ Daily. Learn how we handle your information and protect your privacy.',
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy — Reflecting Christ Daily',
    description:
      'Privacy Policy for Reflecting Christ Daily. Learn how we handle your information and protect your privacy.',
    url: `${siteConfig.url}/privacy`,
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
          <h1>Privacy Policy</h1>
          <p className="subtitle">
            Your privacy matters to us. This policy explains how we handle your information.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container container--narrow">
          <div className="article-body">
            <p><strong>Effective Date:</strong> February 25, 2026</p>

            <p>
              Reflecting Christ Daily (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
              the website at {siteConfig.url}. This Privacy Policy describes how we collect, use,
              and protect your information when you visit our site.
            </p>

            <h2>Information We Collect</h2>

            <p>
              We collect information you voluntarily provide to us, such as your name and email
              address when you subscribe to our newsletter or use our contact form. We do not
              require you to create an account to read our content.
            </p>

            <p>
              We may also collect basic usage data automatically, including your browser type,
              device information, pages visited, and the date and time of your visit. This
              information helps us understand how readers use our site so we can improve it.
            </p>

            <h2>Cookies</h2>

            <p>
              Our site may use cookies — small text files stored on your device — to improve
              your browsing experience. These may include essential cookies required for the site
              to function and analytics cookies that help us understand traffic patterns. You can
              control cookie settings through your browser preferences.
            </p>

            <h2>How We Use Your Information</h2>

            <p>We use the information we collect to:</p>
            <ul>
              <li>Send you our newsletter if you have subscribed</li>
              <li>Respond to messages submitted through our contact form</li>
              <li>Understand how visitors use our site and improve our content</li>
              <li>Maintain the security and performance of our website</li>
            </ul>

            <p>
              We do not sell, trade, or rent your personal information to third parties. We will
              never use your email for anything other than what you signed up for.
            </p>

            <h2>Third-Party Services</h2>

            <p>
              We may use third-party services for analytics, email delivery, or hosting. These
              services may collect data on our behalf and are governed by their own privacy
              policies. We choose services that respect user privacy and handle data responsibly.
            </p>

            <h2>Data Security</h2>

            <p>
              We take reasonable measures to protect your information from unauthorized access,
              alteration, or destruction. However, no method of transmission over the internet
              is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>Children&apos;s Privacy</h2>

            <p>
              Our site is not directed at children under 13. We do not knowingly collect personal
              information from children. If you believe a child has provided us with personal
              information, please contact us and we will remove it promptly.
            </p>

            <h2>Your Rights</h2>

            <p>
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting us. If you are subscribed to our newsletter, you can
              unsubscribe using the link included in every email.
            </p>

            <h2>Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated effective date. We encourage you to review this page
              periodically.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you have questions about this Privacy Policy, please reach out through
              our <a href="/contact">contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
