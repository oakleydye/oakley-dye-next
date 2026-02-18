import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: string;
  ogImage?: string;
  featured?: boolean;
  readingTime: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function ensureContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }
}

export function getAllPosts(): BlogPost[] {
  ensureContentDir();

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date ? String(data.date) : new Date().toISOString(),
      tags: data.tags || [],
      author: data.author || "Oakley Dye",
      ogImage: data.ogImage,
      featured: data.featured || false,
      readingTime: rt.text,
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureContentDir();

  const extensions = [".mdx", ".md"];
  for (const ext of extensions) {
    const filePath = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        excerpt: data.excerpt || "",
        date: data.date ? String(data.date) : new Date().toISOString(),
        tags: data.tags || [],
        author: data.author || "Oakley Dye",
        ogImage: data.ogImage,
        featured: data.featured || false,
        readingTime: rt.text,
        content,
      };
    }
  }
  return null;
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const scored = all.map((post) => ({
    post,
    score: post.tags.filter((t) => tags.includes(t)).length,
  }));
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
