import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/posts';
import { siteConfig } from '@/lib/site';
import { mdxComponents } from '@/components/mdx';
import AuthorBio from '@/components/AuthorBio';
import PostCard from '@/components/PostCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/posts/${post.slug}`,
      siteName: siteConfig.name,
      locale: 'en_US',
      publishedTime: `${post.date}T06:00:00-05:00`,
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${siteConfig.url}/posts/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2);

  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: `${post.date}T06:00:00-05:00`,
    dateModified: `${post.date}T06:00:00-05:00`,
    url: `${siteConfig.url}/posts/${post.slug}`,
    inLanguage: 'en-US',
    articleSection: post.category,
    keywords: post.keywords,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/posts/${post.slug}`,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container">
        <header className="article-header">
          <span className="post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>{date}</span>
            <span className="separator"></span>
            <span>{post.readTime}</span>
            <span className="separator"></span>
            <span>by RCD</span>
          </div>
        </header>
      </div>

      <div className="container">
        <div className="article-body">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </div>

      <AuthorBio />

      {related.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Keep Reading</h2>
              <Link href="/archive" className="section-link">
                View All
              </Link>
            </div>
            <div className="posts-grid">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
