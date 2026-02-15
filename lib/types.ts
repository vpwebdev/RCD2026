export interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  keywords: string[];
  tags: string[];
}

export interface Post extends PostFrontmatter {
  content: string;
}
