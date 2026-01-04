"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  className,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={cn("py-12", className)}
    >
      {children}
    </motion.section>
  );
}
