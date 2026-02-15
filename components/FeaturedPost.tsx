import Link from 'next/link';
import { Post } from '@/lib/types';

export default function FeaturedPost({ post }: { post: Post }) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section className="featured-post">
      <div className="container">
        <span className="post-category">{post.category}</span>
        <h1 className="post-title">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-meta">
          <span>{date}</span>
          <span className="separator"></span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </section>
  );
}
