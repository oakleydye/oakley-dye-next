"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`glass rounded-2xl overflow-hidden group hover:-translate-y-1 hover:glow-red-sm transition-all duration-300 ${
        featured ? "md:col-span-3" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Colored top border */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

        <div className={`p-6 ${featured ? "md:p-8" : ""}`}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-terminal text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
            {post.featured && (
              <span className="font-terminal text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full px-2 py-0.5">
                Featured
              </span>
            )}
          </div>

          <h2
            className={`font-bold mb-3 group-hover:text-primary transition-colors leading-tight ${
              featured ? "text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>

          {/* Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-terminal">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
              Read <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
