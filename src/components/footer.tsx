"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ─── Footer Root ─── */
const footerVariants = cva(
    "w-full transition-all duration-normal",
    {
        variants: {
            variant: {
                default: "bg-card text-card-foreground border-t border-border",
                dark: "bg-[hsl(222.2,84%,4.9%)] text-[hsl(210,40%,98%)]",
                brand: "bg-gradient-brand text-brand-primary-foreground",
                ghost: "bg-transparent text-foreground",
            },
            padding: {
                default: "pt-16 pb-8",
                compact: "pt-8 pb-4",
                none: "",
            },
        },
        defaultVariants: {
            variant: "dark",
            padding: "default",
        },
    }
);

export interface FooterProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> { }

const Footer = React.forwardRef<HTMLElement, FooterProps>(
    ({ className, variant, padding, children, ...props }, ref) => (
        <footer
            ref={ref}
            className={cn(footerVariants({ variant, padding, className }))}
            {...props}
        >
            {children}
        </footer>
    )
);
Footer.displayName = "Footer";

/* ─── Footer Container ─── */
const FooterContainer = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}
        {...props}
    />
));
FooterContainer.displayName = "FooterContainer";

/* ─── Footer Grid (top area for columns) ─── */
const FooterGrid = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12",
            className
        )}
        {...props}
    />
));
FooterGrid.displayName = "FooterGrid";

/* ─── Footer Brand ─── */
export interface FooterBrandProps
    extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    description?: string;
}

const FooterBrand = React.forwardRef<HTMLDivElement, FooterBrandProps>(
    ({ className, name, description, children, ...props }, ref) => (
        <div ref={ref} className={cn("col-span-1 lg:col-span-4", className)} {...props}>
            {name && (
                <h3 className="text-2xl font-bold tracking-tight mb-2">{name}</h3>
            )}
            {description && (
                <p className="text-sm opacity-70 max-w-xs mb-6 leading-relaxed">
                    {description}
                </p>
            )}
            {children}
        </div>
    )
);
FooterBrand.displayName = "FooterBrand";

/* ─── Footer Section (link column) ─── */
export interface FooterSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    span?: number;
}

const FooterSection = React.forwardRef<HTMLDivElement, FooterSectionProps>(
    ({ className, title, span = 2, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(`col-span-1 lg:col-span-${span}`, className)}
            {...props}
        >
            {title && (
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
                    {title}
                </h4>
            )}
            <ul className="space-y-3">{children}</ul>
        </div>
    )
);
FooterSection.displayName = "FooterSection";

/* ─── Footer Link ─── */
export type FooterLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const FooterLink = React.forwardRef<HTMLAnchorElement, FooterLinkProps>(
    ({ className, children, ...props }, ref) => (
        <li className="list-none">
            <a
                ref={ref}
                className={cn(
                    "text-sm opacity-60 hover:opacity-100 transition-opacity duration-fast cursor-pointer inline-flex items-center gap-1.5",
                    className
                )}
                {...props}
            >
                {children}
            </a>
        </li>
    )
);
FooterLink.displayName = "FooterLink";

/* ─── Footer Social Links ─── */
const FooterSocials = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-3", className)} {...props}>
        {children}
    </div>
));
FooterSocials.displayName = "FooterSocials";

/* ─── Footer Social Link Icon ─── */
export interface FooterSocialLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
}

const FooterSocialLink = React.forwardRef<
    HTMLAnchorElement,
    FooterSocialLinkProps
>(({ className, label, children, ...props }, ref) => (
    <a
        ref={ref}
        aria-label={label}
        className={cn(
            "inline-flex items-center justify-center w-9 h-9 rounded-full",
            "bg-white/10 hover:bg-white/20 transition-all duration-fast",
            "hover:scale-110 active:scale-95",
            className
        )}
        {...props}
    >
        {children}
    </a>
));
FooterSocialLink.displayName = "FooterSocialLink";

/* ─── Footer Separator ─── */
const FooterSeparator = React.forwardRef<
    HTMLHRElement,
    React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
    <hr
        ref={ref}
        className={cn("border-t border-white/10 my-8", className)}
        {...props}
    />
));
FooterSeparator.displayName = "FooterSeparator";

/* ─── Footer Bottom ─── */
export interface FooterBottomProps
    extends React.HTMLAttributes<HTMLDivElement> {
    version?: string;
}

const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
    ({ className, version, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex flex-col sm:flex-row items-center justify-between gap-4 pt-6",
                className
            )}
            {...props}
        >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm opacity-60">
                {children}
            </div>
            {version && (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono opacity-40 select-none">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    v{version}
                </span>
            )}
        </div>
    )
);
FooterBottom.displayName = "FooterBottom";

export {
    Footer,
    FooterContainer,
    FooterGrid,
    FooterBrand,
    FooterSection,
    FooterLink,
    FooterSocials,
    FooterSocialLink,
    FooterSeparator,
    FooterBottom,
    footerVariants,
};
