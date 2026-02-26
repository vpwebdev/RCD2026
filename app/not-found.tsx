import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>404</h1>
        <p className="subtitle">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>

      <div className="container container--narrow" style={{ textAlign: 'center' }}>
        <p>
          You might want to head back to the <Link href="/">journal</Link>, browse
          the <Link href="/archive">archive</Link>, or learn more <Link href="/about">about us</Link>.
        </p>
      </div>
    </div>
  );
}
