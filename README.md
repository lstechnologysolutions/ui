# @lsts_tech/ui - Internal UI Kit for LSTS

This is the internal, white-label, brand-agnostic UI component library built for **LSTS Solutions** and its associated brands. 

While it is primarily designed for our internal products, it is built to be **enterprise-ready** and **brand-agnostic**, making it suitable for use in other enterprise applications that require a robust, composable, and themeable design system.

> **Note:** The source code for this library is mirrored to a public repository for transparency and community access. You can find the public repository at [https://github.com/lstechnologysolutions/ui](https://github.com/lstechnologysolutions/ui). The package is published to npm for consumption and distribution.

## Features

- **Brand-Agnostic Architecture**: Switch between brands (LSTS, TLÁO) with a single prop
- **Full Theming Support**: Light/dark mode with CSS custom properties
- **Design Tokens**: HSL-based color system for easy customization
- **Accessible**: WCAG compliant with proper focus states and ARIA attributes
- **Type-Safe**: Full TypeScript support with proper type exports
- **Composable**: Built with Radix UI primitives for flexibility

## Installation

```bash
pnpm add @lsts_tech/ui
```

## Setup

### 1. Wrap your app with providers

```tsx
import { BrandProvider, ThemeProvider } from "@lsts_tech/ui";

function App({ children }) {
  return (
    <BrandProvider defaultBrand="lsts">
      <ThemeProvider defaultTheme="system">
        {children}
      </ThemeProvider>
    </BrandProvider>
  );
}
```

### 2. Import the global styles

```tsx
import "@lsts_tech/ui/styles.css";
// or in your layout.tsx
import "@lsts_tech/ui";
```

### 3. Configure Tailwind

In your `tailwind.config.ts`:

```ts
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default {
  darkMode: ["class", "data-theme='dark'"],
  content: [
    // ... your content
    "./node_modules/@lsts_tech/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // The UI library provides all theme tokens
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

## Brand System

### Supported Brands

- **LSTS** (default): LSTech Solutions - Blue/purple theme
- **TLÁO**: Warm earth tones - Orange/green theme

### Switching Brands

```tsx
import { useBrand, BrandSwitcher } from "@lsts_tech/ui";

// Programmatic switching
function MyComponent() {
  const { brand, setBrand } = useBrand();
  
  return (
    <button onClick={() => setBrand("tlao")}>
      Switch to TLÁO
    </button>
  );
}

// UI Component
function Settings() {
  return <BrandSwitcher variant="cards" showDescription />;
}
```

### Adding a New Brand

To add a new brand (e.g., "acme"):

1. Define brand colors in your global CSS:

```css
[data-brand="acme"] {
  --brand-primary-hue: 200;
  --brand-primary-sat: 80%;
  --brand-primary-light: 50%;
  
  --brand-secondary-hue: 280;
  --brand-secondary-sat: 60%;
  --brand-secondary-light: 40%;
  
  --brand-accent-hue: 45;
  --brand-accent-sat: 90%;
  --brand-accent-light: 60%;
}
```

2. Extend the Brand type in your app:

```ts
type Brand = "lsts" | "tlao" | "acme";
```

3. Add brand option to the switcher:

```tsx
const brandOptions = [
  { value: "lsts", label: "LSTS", icon: <Building2 /> },
  { value: "tlao", label: "TLÁO", icon: <Landmark /> },
  { value: "acme", label: "Acme", icon: <Rocket /> },
];

<BrandSwitcher options={brandOptions} />
```

## Theme System

### Light/Dark Mode

```tsx
import { useTheme, ThemeSwitcher } from "@lsts_tech/ui";

function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  return (
    <div>
      <span>Current: {resolvedTheme}</span>
      <ThemeSwitcher variant="segmented" />
    </div>
  );
}
```

### Design Tokens

The UI system uses CSS custom properties for all design tokens:

```css
/* Colors */
--primary: hsl(var(--primary));
--primary-foreground: hsl(var(--primary-foreground));
--secondary: hsl(var(--secondary));
--background: hsl(var(--background));
--foreground: hsl(var(--foreground));

/* Brand Colors */
--brand-primary: hsl(var(--brand-primary-hue) var(--brand-primary-sat) var(--brand-primary-light));
--brand-secondary: var(--brand-secondary);
--brand-accent: var(--brand-accent);
--brand-gradient: linear-gradient(...);

/* Elevation */
--shadow-elevation-1: ...;
--shadow-elevation-2: ...;
--shadow-elevation-3: ...;
--shadow-elevation-4: ...;

/* Radius */
--radius: 0.5rem;
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);

/* Spacing */
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
/* ... */
```

## Components

### Button

```tsx
import { Button } from "@lsts_tech/ui";

// Variants
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Brand variants
<Button variant="brand">Brand Primary</Button>
<Button variant="brand-secondary">Brand Secondary</Button>
<Button variant="brand-ghost">Brand Ghost</Button>

// Sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="2xl">2X Large</Button>

// Icon buttons
<Button size="icon" variant="outline">
  <Settings className="h-4 w-4" />
</Button>

// Loading state
<Button loading>Loading...</Button>

// With icons
<Button leftIcon={<Mail />} leftIcon={<ArrowRight />}>
  Send Email
</Button>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@lsts_tech/ui";

<Card variant="elevated" radius="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description here</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

```tsx
import { Input } from "@lsts_tech/ui";

// Basic
<Input placeholder="Enter text..." />

// With icons
<Input 
  leftIcon={<Search />} 
  rightIcon={<Keyboard />}
  placeholder="Search..." 
/>

// States
<Input state="error" placeholder="Error state" />
<Input state="success" placeholder="Success state" />

// Variants
<Input variant="filled" placeholder="Filled variant" />
<Input variant="ghost" placeholder="Ghost variant" />
<Input variant="brand" placeholder="Brand variant" />
```

### Badge

```tsx
import { Badge } from "@lsts_tech/ui";

// Variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="brand">Brand</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>
<Badge size="xl">Extra Large</Badge>
```

### Alert

```tsx
import { Alert } from "@lsts_tech/ui";

// Variants
<Alert title="Success!" variant="success">
  Your changes have been saved.
</Alert>

<Alert title="Warning" variant="warning">
  Please review your settings.
</Alert>

<Alert title="Error" variant="error">
  Something went wrong.
</Alert>

// Dismissible
<Alert 
  title="Info" 
  variant="info" 
  dismissible 
  onDismiss={() => console.log("Dismissed")}
>
  This alert can be dismissed.
</Alert>

// Brand variant
<Alert title="Welcome" variant="brand">
  Welcome to LSTS!
</Alert>
```

### Brand Switcher

```tsx
import { BrandSwitcher } from "@lsts_tech/ui";

// Button variant
<BrandSwitcher variant="buttons" size="md" />

// Card variant
<BrandSwitcher variant="cards" showDescription />

// Select variant
<BrandSwitcher variant="select" />

// Custom options
<BrandSwitcher
  options={[
    { value: "lsts", label: "LSTS", icon: <Building2 />, description: "LSTech Solutions" },
    { value: "tlao", label: "TLÁO", icon: <Landmark />, description: "TLÁO Project" },
  ]}
/>
```

### Theme Switcher

```tsx
import { ThemeSwitcher } from "@lsts_tech/ui";

// Segmented control (default)
<ThemeSwitcher variant="segmented" />

// Button variant
<ThemeSwitcher variant="buttons" />

// Card variant
<ThemeSwitcher variant="cards" showLabel />

// Select variant
<ThemeSwitcher variant="select" />
```

## Customization

### Customizing Design Tokens

Override CSS variables in your global CSS:

```css
:root {
  /* Override radius */
  --radius: 0.75rem;
  
  /* Override shadows */
  --shadow-elevation-1: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  /* Override spacing */
  --space-4: 1.25rem;
}

[data-theme="dark"] {
  /* Dark mode overrides */
  --shadow-elevation-1: 0 2px 4px rgba(0, 0, 0, 0.3);
}
```

### Using Class Variance Authority (CVA)

All components support CVA variants for advanced customization:

```tsx
import { buttonVariants } from "@lsts_tech/ui";

// Use variants without the component
<button className={buttonVariants({ variant: "brand", size: "lg" })}>
  Custom Button
</button>
```

## API Reference

### Providers

#### BrandProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultBrand` | `Brand` | `"lsts"` | Initial brand value |
| `brands` | `Brand[]` | `["lsts", "tlao"]` | Available brands |
| `storageKey` | `string` | `"ui-brand"` | localStorage key |

#### ThemeProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `Theme` | `"system"` | Initial theme value |
| `storageKey` | `string` | `"ui-theme"` | localStorage key |
| `enableSystem` | `boolean` | `true` | Enable system preference |
| `disableTransitionOnChange` | `boolean` | `false` | Disable transitions on change |

### Hooks

#### useBrand

```ts
const { brand, setBrand, brands } = useBrand();
```

#### useTheme

```ts
const { theme, setTheme, resolvedTheme } = useTheme();
```

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## License

MIT © LSTech Solutions
