"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "hover" | "glow";
  blur?: "sm" | "md" | "lg" | "xl";
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", blur = "lg", children, ...props }, ref) => {
    const blurLevels = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    };

    const variants = {
      default: "bg-white/5 border-white/10",
      hover: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#590907]/30 transition-all duration-300",
      glow: "bg-white/5 border-[#590907]/30 shadow-[0_0_30px_rgba(89,9,7,0.3)]",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-2xl border shadow-lg",
          blurLevels[blur],
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
