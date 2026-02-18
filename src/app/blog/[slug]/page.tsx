import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";
import { generateSEOMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { BlogCard } from "../components/blog-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    canonicalUrl: `https://oakleydye.com/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.tags);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen pt-28">
      {/* Reading progress bar placeholder */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-[100] origin-left" style={{ transform: "scaleX(0)" }} />

      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-terminal text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-terminal text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>

        {/* Meta */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground font-terminal mb-12 pb-8 border-b border-glass-border">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime}</span>
          </div>
          <span>by {post.author}</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-foreground
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:font-terminal prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:glass prose-pre:border prose-pre:border-glass-border
          prose-strong:text-foreground
          mb-16">
          {post.content.split('\n').map((line, i) => {
            // Basic markdown rendering
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-3xl font-bold mt-10 mb-4">{line.slice(3)}</h2>;
            }
            if (line.startsWith('# ')) {
              return <h1 key={i} className="text-4xl font-bold mt-12 mb-6">{line.slice(2)}</h1>;
            }
            if (line.startsWith('```')) {
              return null; // handled below
            }
            if (line.trim() === '') {
              return <br key={i} />;
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{line}</p>;
          })}
        </div>

        {/* Author card */}
        <div className="glass rounded-2xl p-6 mb-16 flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
            OD
          </div>
          <div>
            <div className="font-bold text-foreground">Oakley Dye</div>
            <div className="text-sm text-muted-foreground">Full-stack developer, designer, and consultant based in Hyrum, UT.</div>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">
              Related <span className="gradient-text-red">Posts</span>
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
