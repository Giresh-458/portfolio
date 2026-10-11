import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: string;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span className={cn("tech-scroll-chip relative inline-flex items-center border border-[#D9B39B]/20 bg-[#08090F]/75 px-3 py-1 text-xs font-medium text-[#D6C9C7]", className)}>
      <span className="mr-2 inline-block size-1 bg-[#39D8F3]/80" />
      {children}
    </span>
  );
}
