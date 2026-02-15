import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <Link href="/" className="brand">
              Reflecting Christ Daily
              <span className="brand-sub">Faith. Reflection. Daily.</span>
            </Link>
          </div>
          <nav>
            <ul className="tag-list">
              <li><Link href="/">Journal</Link></li>
              <li><Link href="/archive">Archive</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Reflecting Christ Daily. All rights reserved.</span>
          <span>Soli Deo Gloria</span>
        </div>
      </div>
    </footer>
  );
}
