'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  const navLinks = [
    { href: '/', label: 'Journal' },
    { href: '/archive', label: 'Archive' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <button
        className={`nav-toggle${isOpen ? ' active' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`site-nav${isOpen ? ' open' : ''}`} role="navigation">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? 'active' : ''}
            onClick={close}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
