import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

declare const alertVariants: (props?: ({
    variant?: "default" | "muted" | "brand" | "success" | "warning" | "info" | "error" | "destructive" | null | undefined;
    radius?: "default" | "sm" | "lg" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    title?: string;
    dismissible?: boolean;
    onDismiss?: () => void;
    icon?: React.ReactNode;
    showIcon?: boolean;
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

declare const Avatar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface AvatarImageProps {
    src?: string | null;
    alt?: string;
    className?: string;
}
declare const AvatarImage: React.ForwardRefExoticComponent<AvatarImageProps & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "muted" | "brand" | "success" | "warning" | "info" | "error" | "destructive" | "secondary" | "outline" | "ghost" | "brand-secondary" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
    radius?: "default" | "sm" | "lg" | "none" | "md" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    asChild?: boolean;
}
declare function Badge({ className, variant, size, radius, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

type Brand = "lsts" | "tlao";
interface BrandContextValue {
    brand: Brand;
    setBrand: (brand: Brand) => void;
    brands: Brand[];
}
interface BrandProviderProps {
    children: React.ReactNode;
    defaultBrand?: Brand;
    brands?: Brand[];
    storageKey?: string;
}
declare function BrandProvider({ children, defaultBrand, brands, storageKey, }: BrandProviderProps): react_jsx_runtime.JSX.Element;
declare function useBrand(): BrandContextValue;

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
declare const defaultBrandOptions: BrandOption[];
declare function BrandSwitcher({ options, variant, size, className, showIcons, showDescription, }: BrandSwitcherProps): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "brand" | "destructive" | "link" | "secondary" | "outline" | "ghost" | "brand-secondary" | "brand-ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "xl" | "xs" | "2xl" | "icon-sm" | "icon-lg" | null | undefined;
    radius?: "default" | "sm" | "lg" | "none" | "xl" | "full" | "2xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const cardVariants: (props?: ({
    variant?: "default" | "brand" | "outline" | "ghost" | "elevated" | null | undefined;
    radius?: "default" | "sm" | "lg" | "none" | "xl" | null | undefined;
    padding?: "default" | "sm" | "lg" | "none" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const inputVariants: (props?: ({
    variant?: "default" | "brand" | "ghost" | "filled" | null | undefined;
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
    radius?: "default" | "sm" | "lg" | "none" | "xl" | "full" | null | undefined;
    state?: "default" | "success" | "warning" | "error" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const Separator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHRElement> & React.RefAttributes<HTMLHRElement>>;

declare const Tabs: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

type Theme = "light" | "dark" | "system";
interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "light" | "dark";
}
interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}
declare function ThemeProvider({ children, defaultTheme, storageKey, enableSystem, disableTransitionOnChange, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;
declare function useTheme(): ThemeContextValue;

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
declare const themeOptions: ThemeOption[];
declare function ThemeSwitcher({ variant, size, className, showLabel, showIcons, }: ThemeSwitcherProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;
declare function formatDate(input: string | number): string;
declare function formatCurrency(amount: number): string;

export { Alert, AlertDescription, type AlertProps, AlertTitle, Avatar, AvatarFallback, AvatarImage, Badge, type BadgeProps, type Brand, type BrandOption, BrandProvider, type BrandProviderProps, BrandSwitcher, type BrandSwitcherProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, Input, type InputProps, Separator, Tabs, TabsContent, TabsList, TabsTrigger, type Theme, type ThemeOption, ThemeProvider, type ThemeProviderProps, ThemeSwitcher, type ThemeSwitcherProps, alertVariants, badgeVariants, buttonVariants, cardVariants, cn, defaultBrandOptions, formatCurrency, formatDate, inputVariants, themeOptions, useBrand, useTheme };
