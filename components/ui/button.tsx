import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-netflix disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-netflix text-white hover:bg-netflix-dark shadow-glow-sm",
        secondary: "bg-white text-black hover:bg-zinc-200",
        outline: "border border-white/15 bg-white/5 text-white hover:border-netflix/70 hover:bg-netflix/10",
        ghost: "text-zinc-300 hover:bg-white/10 hover:text-white"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3",
        lg: "h-13 px-7 text-base",
        icon: "size-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
