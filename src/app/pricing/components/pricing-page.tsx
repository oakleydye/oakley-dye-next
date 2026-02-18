"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { pricingTiers, faqItems } from "@/lib/pricing_data";
import { PricingTierCard } from "./pricing-tier";

export function PricingPage() {
  const [billing, setBilling] = React.useState<"project" | "monthly">("project");

  return (
    <div className="space-y-24">
      {/* Billing toggle */}
      <div className="flex justify-center">
        <Tabs
          value={billing}
          onValueChange={(v) => setBilling(v as "project" | "monthly")}
        >
          <TabsList className="glass border border-glass-border p-1 h-auto rounded-xl">
            <TabsTrigger
              value="project"
              className="rounded-lg px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-terminal text-sm transition-all"
            >
              Per Project
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="rounded-lg px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-terminal text-sm transition-all"
            >
              Monthly Retainer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="project" />
          <TabsContent value="monthly" />
        </Tabs>
      </div>

      {/* Pricing tiers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={billing}
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {pricingTiers.map((tier, i) => (
            <PricingTierCard key={tier.id} tier={tier} billing={billing} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Comparison note */}
      <motion.div
        className="glass rounded-2xl p-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground font-terminal text-sm">
          <span className="text-primary">// </span>
          All projects include discovery call, wireframes, and post-launch support.
          Prices may vary based on scope.
        </p>
      </motion.div>

      {/* FAQ */}
      <div>
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked <span className="gradient-text-red">Questions</span>
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="glass rounded-xl border-0 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
