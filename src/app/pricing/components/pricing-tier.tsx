"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import type { PricingTier } from "@/lib/pricing_data";
import CustomButton from "@/app/_components/custom_button";

interface PricingTierProps {
  tier: PricingTier;
  billing: "project" | "monthly";
  index: number;
}

export function PricingTierCard({ tier, billing, index }: PricingTierProps) {
  const price =
    tier.id === "enterprise"
      ? null
      : billing === "project"
      ? tier.projectPrice
      : tier.monthlyPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative rounded-2xl p-6 flex flex-col ${
        tier.featured
          ? "glass-strong border-2 border-primary glow-red"
          : "glass border border-glass-border"
      }`}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-bold font-terminal px-4 py-1 rounded-full">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
        <p className="text-sm text-muted-foreground">{tier.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        {tier.id === "enterprise" ? (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold gradient-text-red">Custom</span>
          </div>
        ) : price ? (
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">
              ${price.toLocaleString()}
            </span>
            <span className="text-muted-foreground text-sm">
              {billing === "project" ? "/ project" : "/ month"}
            </span>
          </div>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold gradient-text-dim">N/A</span>
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
        {tier.notIncluded.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground/40 line-through">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {tier.featured ? (
        <CustomButton asChild>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full">
            {tier.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </CustomButton>
      ) : (
        <CustomButton variant="outline-glow" asChild>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full">
            {tier.id === "enterprise" ? (
              <>
                <MessageSquare className="w-4 h-4" />
                {tier.cta}
              </>
            ) : (
              <>
                {tier.cta}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Link>
        </CustomButton>
      )}
    </motion.div>
  );
}
