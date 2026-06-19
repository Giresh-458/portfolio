import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span className={cn("rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300", className)}>
      {children}
    </span>
  );
}
