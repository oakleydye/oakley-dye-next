"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/lib/blog";

interface BlogListProps {
  posts: BlogPost[];
  tags: string[];
}

export function BlogList({ posts, tags }: BlogListProps) {
  const [search, setSearch] = React.useState("");

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || filtered.length === 1);

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full bg-white/5 border border-glass-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 font-terminal"
        />
      </div>

      {/* Tag filter tabs */}
      <Tabs defaultValue="all">
        <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="glass rounded-lg px-4 py-2 text-sm data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20"
          >
            All Posts
          </TabsTrigger>
          {tags.map((tag) => (
            <TabsTrigger
              key={tag}
              value={tag}
              className="glass rounded-lg px-4 py-2 text-sm data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20"
            >
              {tag}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-8 space-y-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12 font-terminal">
              No posts found matching &ldquo;{search}&rdquo;
            </p>
          ) : (
            <>
              {featured && (
                <div className="grid md:grid-cols-3">
                  <BlogCard post={featured} featured index={0} />
                </div>
              )}
              <div className="grid gap-6 md:grid-cols-3">
                {rest.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            </>
          )}
        </TabsContent>

        {tags.map((tag) => {
          const tagPosts = filtered.filter((p) => p.tags.includes(tag));
          return (
            <TabsContent key={tag} value={tag} className="mt-8">
              {tagPosts.length === 0 ? (
                <p className="text-center text-muted-foreground py-12 font-terminal">
                  No posts tagged &ldquo;{tag}&rdquo;
                </p>
              ) : (
                <div className="grid gap-6 md:grid-cols-3">
                  {tagPosts.map((post, i) => (
                    <BlogCard key={post.slug} post={post} index={i} />
                  ))}
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
