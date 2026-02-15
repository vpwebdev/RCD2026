'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post } from '@/lib/types';

interface MonthGroup {
  label: string;
  posts: Post[];
}

export default function CategoryFilter({
  groups,
  categories,
}: {
  groups: MonthGroup[];
  categories: string[];
}) {
  const [active, setActive] = useState('All');

  const filteredGroups = groups
    .map((group) => ({
      ...group,
      posts:
        active === 'All'
          ? group.posts
          : group.posts.filter((p) => p.category === active),
    }))
    .filter((group) => group.posts.length > 0);

  return (
    <>
      {/* Filter Tags */}
      <div className="container">
        <ul className="tag-list" style={{ marginBottom: 'var(--space-2xl)' }}>
          <li>
            <a
              href="#"
              className={active === 'All' ? 'active' : ''}
              style={
                active === 'All'
                  ? {
                      background: 'var(--color-black)',
                      color: 'var(--color-white)',
                      borderColor: 'var(--color-black)',
                    }
                  : undefined
              }
              onClick={(e) => {
                e.preventDefault();
                setActive('All');
              }}
            >
              All
            </a>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href="#"
                className={active === cat ? 'active' : ''}
                style={
                  active === cat
                    ? {
                        background: 'var(--color-black)',
                        color: 'var(--color-white)',
                        borderColor: 'var(--color-black)',
                      }
                    : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActive(cat);
                }}
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Archive List */}
      <section className="section">
        <div className="container">
          {filteredGroups.map((group, i) => (
            <div key={group.label}>
              <div
                className="section-header"
                style={i > 0 ? { marginTop: 'var(--space-3xl)' } : undefined}
              >
                <h2 className="section-title">{group.label}</h2>
              </div>

              <ul className="archive-list">
                {group.posts.map((post) => {
                  const date = new Date(post.date);
                  const shortDate = date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  });

                  return (
                    <li key={post.slug} className="archive-item">
                      <span className="archive-date">{shortDate}</span>
                      <span className="archive-title">
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                      </span>
                      <span className="archive-category">{post.category}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
