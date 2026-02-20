"use client";

import * as React from "react";
import { useBrand, type Brand } from "@/providers/brand-provider";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { Check, Building2, Landmark } from "lucide-react";

interface BrandOption {
  value: Brand;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface BrandSwitcherProps {
  options?: BrandOption[];
  variant?: "buttons" | "cards" | "dropdown" | "select";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcons?: boolean;
  showDescription?: boolean;
}

const defaultBrandOptions: BrandOption[] = [
  {
    value: "lsts",
    label: "LSTS",
    description: "LSTech Solutions",
    icon: <Building2 className="h-4 w-4" />,
  },
  {
    value: "tlao",
    label: "TLÁO",
    description: "TLÁO Project",
    icon: <Landmark className="h-4 w-4" />,
  },
];

export function BrandSwitcher({
  options = defaultBrandOptions,
  variant = "buttons",
  size = "md",
  className,
  showIcons = true,
  showDescription = false,
}: BrandSwitcherProps) {
  const { brand, setBrand } = useBrand();

  const sizeClasses = {
    sm: "h-7 px-2 text-xs",
    md: "h-9 px-3 text-sm",
    lg: "h-10 px-4 text-base",
  };

  if (variant === "buttons") {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        {options.map((option) => {
          const isActive = brand === option.value;
          return (
            <Button
              key={option.value}
              variant={isActive ? "brand" : "ghost"}
              size="sm"
              onClick={() => setBrand(option.value)}
              className={cn(
                "gap-2",
                sizeClasses[size],
                isActive && "ring-2 ring-ring ring-offset-2"
              )}
            >
              {showIcons && option.icon}
              <span>{option.label}</span>
              {isActive && <Check className="h-3 w-3 ml-1" />}
            </Button>
          );
        })}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={cn("grid gap-3", className)}>
        {options.map((option) => {
          const isActive = brand === option.value;
          return (
            <button
              key={option.value}
              onClick={() => setBrand(option.value)}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-4 text-left transition-all duration-fast",
                "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring",
                isActive && "border-brand-primary bg-brand-primary/5"
              )}
            >
              {showIcons && (
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
                    isActive
                      ? "bg-brand-primary text-brand-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {option.icon}
                </div>
              )}
              <div className="flex-1">
                <div className="font-medium">{option.label}</div>
                {showDescription && option.description && (
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                )}
              </div>
              {isActive && (
                <Check className="h-5 w-5 text-brand-primary shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    );
  }

  // Simple select variant
  return (
    <select
      value={brand}
      onChange={(e) => setBrand(e.target.value as Brand)}
      className={cn(
        "flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
        "focus:outline-none focus:ring-1 focus:ring-ring",
        className
      )}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export { type BrandOption, type BrandSwitcherProps, defaultBrandOptions };
