"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  href: string;
  variant?: "default" | "secondary" | "outline";
  className?: string;
  download?: boolean;
  ariaLabel?: string;
}

export function GlowButton({
  children,
  href,
  variant = "default",
  className,
  download,
  ariaLabel
}: GlowButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
      <Button asChild size="lg" variant={variant} className={cn("group", className)}>
        <a href={href} download={download} aria-label={ariaLabel}>
          {children}
        </a>
      </Button>
    </motion.div>
  );
}
