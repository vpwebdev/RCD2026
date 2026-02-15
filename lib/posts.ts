import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostFrontmatter } from './types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        ...(data as PostFrontmatter),
        content,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

export function getPostsGroupedByMonth(): {
  label: string;
  posts: Post[];
}[] {
  const posts = getAllPosts();
  const grouped = new Map<string, Post[]>();

  for (const post of posts) {
    const date = new Date(post.date);
    const label = date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
    const existing = grouped.get(label) || [];
    existing.push(post);
    grouped.set(label, existing);
  }

  return Array.from(grouped.entries()).map(([label, posts]) => ({
    label,
    posts,
  }));
}
