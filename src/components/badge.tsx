"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-hover",
        muted:
          "border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
        outline:
          "text-foreground border-border hover:bg-muted",
        ghost:
          "border-transparent hover:bg-muted",
        brand:
          "border-transparent bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-dark",
        "brand-secondary":
          "border-transparent bg-brand-secondary text-brand-secondary-foreground hover:opacity-90",
        success:
          "border-transparent bg-success text-success-foreground",
        warning:
          "border-transparent bg-warning text-warning-foreground",
        info:
          "border-transparent bg-info text-info-foreground",
        error:
          "border-transparent bg-error text-error-foreground",
      },
      size: {
        default: "px-2 py-0.5 text-xs",
        sm: "px-1.5 py-0 text-[10px]",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base",
      },
      radius: {
        default: "rounded-full",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ className, variant, size, radius, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, radius, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
