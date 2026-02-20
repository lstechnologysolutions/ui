"use client";

import * as React from "react";
import { useTheme, type Theme } from "@/providers/theme-provider";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { Sun, Moon, Monitor, Check } from "lucide-react";

interface ThemeOption {
  value: Theme;
  label: string;
  description?: string;
  icon: React.ReactNode;
}

interface ThemeSwitcherProps {
  variant?: "buttons" | "cards" | "segmented" | "select" | "dropdown";
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
  showIcons?: boolean;
}

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    description: "Always use light mode",
    icon: <Sun className="h-4 w-4" />,
  },
  {
    value: "dark",
    label: "Dark",
    description: "Always use dark mode",
    icon: <Moon className="h-4 w-4" />,
  },
  {
    value: "system",
    label: "System",
    description: "Follow system preference",
    icon: <Monitor className="h-4 w-4" />,
  },
];

export function ThemeSwitcher({
  variant = "segmented",
  size = "md",
  className,
  showLabel = true,
  showIcons = true,
}: ThemeSwitcherProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const sizeClasses = {
    sm: "h-7 px-2",
    md: "h-9 px-3",
    lg: "h-10 px-4",
  };

  if (variant === "buttons") {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        {themeOptions.map((option) => {
          const isActive = theme === option.value;
          return (
            <Button
              key={option.value}
              variant={isActive ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setTheme(option.value)}
              className={cn(
                "gap-2",
                sizeClasses[size],
                isActive && "ring-2 ring-ring ring-offset-2"
              )}
            >
              {showIcons && option.icon}
              {showLabel && <span>{option.label}</span>}
            </Button>
          );
        })}
      </div>
    );
  }

  if (variant === "segmented") {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-lg border bg-muted p-1",
          className
        )}
      >
        {themeOptions.map((option) => {
          const isActive = theme === option.value;
          return (
            <button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={cn(
                "relative flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-fast",
                "hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {showIcons && option.icon}
              {showLabel && <span>{option.label}</span>}
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={cn("grid gap-3", className)}>
        {themeOptions.map((option) => {
          const isActive = theme === option.value;
          const isResolved = resolvedTheme === (option.value === "system" ? undefined : option.value);
          
          return (
            <button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-4 text-left transition-all duration-fast",
                "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring",
                isActive && "border-primary bg-primary/5"
              )}
            >
              {showIcons && (
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {option.icon}
                </div>
              )}
              <div className="flex-1">
                <div className="font-medium flex items-center gap-2">
                  {option.label}
                  {option.value === "system" && (
                    <span className="text-xs text-muted-foreground">
                      ({resolvedTheme})
                    </span>
                  )}
                </div>
                {option.description && (
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                )}
              </div>
              {isActive && <Check className="h-5 w-5 text-primary shrink-0" />}
            </button>
          );
        })}
      </div>
    );
  }

  // Simple select variant
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
      className={cn(
        "flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
        "focus:outline-none focus:ring-1 focus:ring-ring",
        className
      )}
    >
      {themeOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export { type ThemeOption, type ThemeSwitcherProps, themeOptions };
