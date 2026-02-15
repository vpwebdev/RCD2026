import Link from 'next/link';
import MobileNav from './MobileNav';
import ScrollShadow from './ScrollShadow';

export default function Header() {
  return (
    <ScrollShadow>
      <header className="site-header">
        <div className="container">
          <Link href="/" className="brand">
            Reflecting Christ Daily
            <span className="brand-sub">Faith. Reflection. Daily.</span>
          </Link>
          <MobileNav />
        </div>
      </header>
    </ScrollShadow>
  );
}
