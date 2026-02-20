// Components
export { Alert, AlertTitle, AlertDescription, alertVariants } from "./components/alert";
export { Avatar, AvatarFallback, AvatarImage } from "./components/avatar";
export { Badge, badgeVariants } from "./components/badge";
export { BrandSwitcher, defaultBrandOptions } from "./components/brand-switcher";
export { Button, buttonVariants } from "./components/button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants } from "./components/card";
export { Input, inputVariants } from "./components/input";
export { Separator } from "./components/separator";
export { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/tabs";
export { ThemeSwitcher, themeOptions } from "./components/theme-switcher";

// Providers
export {
  BrandProvider,
  useBrand,
  type Brand,
  type BrandProviderProps,
} from "./providers/brand-provider";
export {
  ThemeProvider,
  useTheme,
  type Theme,
  type ThemeProviderProps,
} from "./providers/theme-provider";

// Utilities
export { cn, formatCurrency, formatDate } from "./lib/utils";

// Styles
import "./styles/globals.css";

// Types
export type { AlertProps } from "./components/alert";
export type { BadgeProps } from "./components/badge";
export type { BrandOption, BrandSwitcherProps } from "./components/brand-switcher";
export type { ButtonProps } from "./components/button";
export type { CardProps } from "./components/card";
export type { InputProps } from "./components/input";
export type { ThemeOption, ThemeSwitcherProps } from "./components/theme-switcher";
