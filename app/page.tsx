import { getAllPosts } from '@/lib/posts';
import { siteConfig } from '@/lib/site';
import FeaturedPost from '@/components/FeaturedPost';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import Scripture from '@/components/Scripture';

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const recent = posts.slice(1, 7);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      description: post.excerpt,
      url: `${siteConfig.url}/posts/${post.slug}`,
      author: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {featured && <FeaturedPost post={featured} />}

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recent Reflections</h2>
            <a href="/archive" className="section-link">
              View All
            </a>
          </div>
          <div className="posts-grid">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      <section className="section">
        <div className="container container--narrow">
          <Scripture
            verse="Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth."
            reference="Psalm 46:10 (ESV)"
          />
        </div>
      </section>
    </>
  );
}
