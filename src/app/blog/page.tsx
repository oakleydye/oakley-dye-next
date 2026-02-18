import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogList } from "./components/blog-list";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog — Insights on Software Development & Design",
  description: "Articles on web development, design systems, and building software that matters.",
  canonicalUrl: "https://oakleydye.com/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <main className="min-h-screen pt-28 section-padding">
      <div className="container mx-auto max-w-7xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="font-terminal text-sm text-primary mb-4 block">
            <span className="text-muted-foreground">$ cat </span>blog/index.md
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            The <span className="gradient-text-red">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on web development, design, and building software that matters.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <p className="font-terminal text-muted-foreground text-lg mb-2">
              <span className="text-primary">// </span>coming_soon
            </p>
            <p className="text-muted-foreground">Posts are being written. Check back soon!</p>
          </div>
        ) : (
          <BlogList posts={posts} tags={tags} />
        )}
      </div>
    </main>
  );
}
