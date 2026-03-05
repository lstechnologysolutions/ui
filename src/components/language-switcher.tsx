"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Globe, Check, ChevronDown } from "lucide-react";

/* ─── Types ─── */

export interface LocaleOption {
    /** Locale code, e.g. "en", "es" */
    value: string;
    /** Display label, e.g. "English", "Español" */
    label: string;
    /** Optional flag emoji or icon */
    flag?: string;
}

export interface LanguageSwitcherProps {
    /** Available locales */
    locales: LocaleOption[];
    /** Currently active locale code */
    currentLocale: string;
    /** Callback when a locale is selected */
    onLocaleChange: (locale: string) => void;
    /** Visual variant */
    variant?: "segmented" | "dropdown" | "pills" | "inline";
    /** Size */
    size?: "sm" | "md" | "lg";
    /** Show the globe icon */
    showIcon?: boolean;
    /** Show flag emoji/icon */
    showFlag?: boolean;
    /** Additional class names */
    className?: string;
}

/* ─── Component ─── */

export function LanguageSwitcher({
    locales,
    currentLocale,
    onLocaleChange,
    variant = "dropdown",
    size = "md",
    showIcon = true,
    showFlag = true,
    className,
}: LanguageSwitcherProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const currentOption = locales.find((l) => l.value === currentLocale);

    // Close on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const sizeClasses = {
        sm: { button: "h-7 px-2 text-xs gap-1", item: "px-2 py-1 text-xs" },
        md: { button: "h-9 px-3 text-sm gap-2", item: "px-3 py-2 text-sm" },
        lg: { button: "h-10 px-4 text-base gap-2", item: "px-4 py-2.5 text-base" },
    };

    const sc = sizeClasses[size];

    /* ── Segmented variant ── */
    if (variant === "segmented") {
        return (
            <div
                className={cn(
                    "inline-flex items-center rounded-lg border bg-muted p-1",
                    className
                )}
            >
                {locales.map((locale) => {
                    const isActive = currentLocale === locale.value;
                    return (
                        <button
                            key={locale.value}
                            onClick={() => onLocaleChange(locale.value)}
                            className={cn(
                                "relative flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-fast",
                                "hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                isActive
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground hover:bg-muted"
                            )}
                        >
                            {showFlag && locale.flag && <span>{locale.flag}</span>}
                            <span>{locale.label}</span>
                        </button>
                    );
                })}
            </div>
        );
    }

    /* ── Pills variant ── */
    if (variant === "pills") {
        return (
            <div className={cn("flex items-center gap-1.5", className)}>
                {locales.map((locale) => {
                    const isActive = currentLocale === locale.value;
                    return (
                        <button
                            key={locale.value}
                            onClick={() => onLocaleChange(locale.value)}
                            className={cn(
                                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-all duration-fast",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                isActive
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-border text-muted-foreground hover:border-border-hover hover:text-foreground"
                            )}
                        >
                            {showFlag && locale.flag && <span>{locale.flag}</span>}
                            <span>{locale.label}</span>
                            {isActive && <Check className="h-3 w-3" />}
                        </button>
                    );
                })}
            </div>
        );
    }

    /* ── Inline variant (compact, good for footers) ── */
    if (variant === "inline") {
        return (
            <div className={cn("flex items-center gap-2", className)}>
                {showIcon && <Globe className="h-4 w-4 opacity-60 shrink-0" />}
                <div className="flex items-center gap-1">
                    {locales.map((locale, idx) => {
                        const isActive = currentLocale === locale.value;
                        return (
                            <React.Fragment key={locale.value}>
                                {idx > 0 && (
                                    <span className="text-muted-foreground opacity-40 select-none">/</span>
                                )}
                                <button
                                    onClick={() => onLocaleChange(locale.value)}
                                    className={cn(
                                        "text-sm transition-all duration-fast focus:outline-none",
                                        isActive
                                            ? "font-semibold text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {locale.flag && showFlag ? locale.flag : locale.value.toUpperCase()}
                                </button>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        );
    }

    /* ── Dropdown variant (default) ── */
    return (
        <div ref={containerRef} className={cn("relative", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "inline-flex items-center justify-center rounded-md border border-input bg-background font-medium transition-all duration-fast",
                    "hover:bg-background-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    sc.button
                )}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                {showIcon && <Globe className="h-4 w-4 shrink-0" />}
                {showFlag && currentOption?.flag && (
                    <span className="shrink-0">{currentOption.flag}</span>
                )}
                <span>{currentOption?.label ?? currentLocale}</span>
                <ChevronDown
                    className={cn(
                        "h-3.5 w-3.5 opacity-50 transition-transform duration-fast",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            {isOpen && (
                <div
                    className={cn(
                        "absolute z-50 mt-1.5 min-w-[140px] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg",
                        "animate-scale-in origin-top"
                    )}
                    role="listbox"
                >
                    {locales.map((locale) => {
                        const isActive = currentLocale === locale.value;
                        return (
                            <button
                                key={locale.value}
                                role="option"
                                aria-selected={isActive}
                                onClick={() => {
                                    onLocaleChange(locale.value);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "flex w-full items-center gap-2 transition-colors duration-fast",
                                    "hover:bg-muted focus:outline-none focus:bg-muted",
                                    isActive && "bg-muted/60 font-medium",
                                    sc.item
                                )}
                            >
                                {showFlag && locale.flag && (
                                    <span className="shrink-0">{locale.flag}</span>
                                )}
                                <span className="flex-1 text-left">{locale.label}</span>
                                {isActive && (
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
