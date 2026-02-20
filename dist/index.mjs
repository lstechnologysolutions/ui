"use client"

// src/components/alert.tsx
import * as React from "react";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

// src/components/alert.tsx
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
var alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        muted: "bg-muted text-muted-foreground border-muted",
        brand: "bg-brand-primary/10 text-brand-primary border-brand-primary/20 [&>svg]:text-brand-primary",
        success: "bg-success/10 text-success border-success/20 [&>svg]:text-success",
        warning: "bg-warning/10 text-warning border-warning/20 [&>svg]:text-warning",
        info: "bg-info/10 text-info border-info/20 [&>svg]:text-info",
        error: "bg-error/10 text-error border-error/20 [&>svg]:text-error",
        destructive: "bg-destructive/10 text-destructive border-destructive/20 [&>svg]:text-destructive"
      },
      radius: {
        default: "rounded-lg",
        sm: "rounded-md",
        lg: "rounded-xl",
        none: "rounded-none"
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "default"
    }
  }
);
var alertIconMap = {
  default: Info,
  muted: Info,
  brand: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info,
  error: AlertCircle,
  destructive: AlertCircle
};
var Alert = React.forwardRef(
  ({
    className,
    variant = "default",
    radius,
    title,
    children,
    dismissible,
    onDismiss,
    icon,
    showIcon = true,
    ...props
  }, ref) => {
    const IconComponent = variant ? alertIconMap[variant] : Info;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        role: "alert",
        className: cn(alertVariants({ variant, radius, className })),
        ...props,
        children: [
          showIcon && (icon || /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4" })),
          dismissible && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: onDismiss,
              className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              children: [
                /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Dismiss" })
              ]
            }
          ),
          title && /* @__PURE__ */ jsx(AlertTitle, { children: title }),
          children && /* @__PURE__ */ jsx(AlertDescription, { children })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

// src/components/avatar.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Avatar = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: "relative flex h-10 w-10 shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 transition-colors hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
    ...props
  }
));
Avatar.displayName = "Avatar";
var AvatarImage = React2.forwardRef(({ src, alt, className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "img",
  {
    ref,
    src: src || void 0,
    alt: alt || "",
    className: `aspect-square h-full w-full rounded-full object-cover ${className}`,
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx2(
  "div",
  {
    ref,
    className: "flex h-full w-full items-center justify-center rounded-full bg-muted",
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";

// src/components/badge.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var badgeVariants = cva2(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive-hover",
        muted: "border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
        outline: "text-foreground border-border hover:bg-muted",
        ghost: "border-transparent hover:bg-muted",
        brand: "border-transparent bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-dark",
        "brand-secondary": "border-transparent bg-brand-secondary text-brand-secondary-foreground hover:opacity-90",
        success: "border-transparent bg-success text-success-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground",
        error: "border-transparent bg-error text-error-foreground"
      },
      size: {
        default: "px-2 py-0.5 text-xs",
        sm: "px-1.5 py-0 text-[10px]",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base"
      },
      radius: {
        default: "rounded-full",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default"
    }
  }
);
function Badge({ className, variant, size, radius, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: cn(badgeVariants({ variant, size, radius, className })),
      ...props
    }
  );
}

// src/providers/brand-provider.tsx
import * as React3 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var BrandContext = React3.createContext(
  void 0
);
function BrandProvider({
  children,
  defaultBrand = "lsts",
  brands = ["lsts", "tlao"],
  storageKey = "ui-brand"
}) {
  const [brand, setBrandState] = React3.useState(defaultBrand);
  React3.useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored && brands.includes(stored)) {
      setBrandState(stored);
    }
  }, [storageKey]);
  const setBrand = React3.useCallback(
    (newBrand) => {
      setBrandState(newBrand);
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newBrand);
        document.documentElement.setAttribute("data-brand", newBrand);
      }
    },
    [storageKey]
  );
  React3.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-brand", brand);
    }
  }, [brand]);
  const value = React3.useMemo(
    () => ({ brand, setBrand, brands }),
    [brand, setBrand, brands]
  );
  return /* @__PURE__ */ jsx4(BrandContext.Provider, { value, children });
}
function useBrand() {
  const context = React3.useContext(BrandContext);
  if (context === void 0) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
}

// src/components/button.tsx
import * as React4 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { Fragment, jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var buttonVariants = cva3(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-hover shadow-sm",
        outline: "border border-input bg-background hover:bg-background-hover hover:text-accent-foreground shadow-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-sm",
        ghost: "hover:bg-background-hover hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        brand: "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-dark shadow-sm",
        "brand-secondary": "bg-brand-secondary text-brand-secondary-foreground hover:opacity-90 shadow-sm",
        "brand-ghost": "hover:bg-brand-primary/10 text-brand-primary hover:text-brand-primary"
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        xl: "h-12 px-8 text-base",
        "2xl": "h-14 px-10 text-base",
        icon: "h-9 w-9 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-10 w-10 p-0"
      },
      radius: {
        default: "rounded-md",
        none: "rounded-none",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default"
    }
  }
);
var Button = React4.forwardRef(
  ({
    className,
    variant,
    size,
    radius,
    asChild = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const content = loading ? /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx5(Loader2, { className: "animate-spin" }),
      children
    ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
      leftIcon,
      children,
      rightIcon
    ] });
    return /* @__PURE__ */ jsx5(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, radius, className })),
        ref,
        disabled: disabled || loading,
        ...props,
        children: content
      }
    );
  }
);
Button.displayName = "Button";

// src/components/brand-switcher.tsx
import { Check, Building2, Landmark } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var defaultBrandOptions = [
  {
    value: "lsts",
    label: "LSTS",
    description: "LSTech Solutions",
    icon: /* @__PURE__ */ jsx6(Building2, { className: "h-4 w-4" })
  },
  {
    value: "tlao",
    label: "TL\xC1O",
    description: "TL\xC1O Project",
    icon: /* @__PURE__ */ jsx6(Landmark, { className: "h-4 w-4" })
  }
];
function BrandSwitcher({
  options = defaultBrandOptions,
  variant = "buttons",
  size = "md",
  className,
  showIcons = true,
  showDescription = false
}) {
  const { brand, setBrand } = useBrand();
  const sizeClasses = {
    sm: "h-7 px-2 text-xs",
    md: "h-9 px-3 text-sm",
    lg: "h-10 px-4 text-base"
  };
  if (variant === "buttons") {
    return /* @__PURE__ */ jsx6("div", { className: cn("flex items-center gap-1", className), children: options.map((option) => {
      const isActive = brand === option.value;
      return /* @__PURE__ */ jsxs3(
        Button,
        {
          variant: isActive ? "brand" : "ghost",
          size: "sm",
          onClick: () => setBrand(option.value),
          className: cn(
            "gap-2",
            sizeClasses[size],
            isActive && "ring-2 ring-ring ring-offset-2"
          ),
          children: [
            showIcons && option.icon,
            /* @__PURE__ */ jsx6("span", { children: option.label }),
            isActive && /* @__PURE__ */ jsx6(Check, { className: "h-3 w-3 ml-1" })
          ]
        },
        option.value
      );
    }) });
  }
  if (variant === "cards") {
    return /* @__PURE__ */ jsx6("div", { className: cn("grid gap-3", className), children: options.map((option) => {
      const isActive = brand === option.value;
      return /* @__PURE__ */ jsxs3(
        "button",
        {
          onClick: () => setBrand(option.value),
          className: cn(
            "flex items-start gap-3 rounded-lg border p-4 text-left transition-all duration-fast",
            "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring",
            isActive && "border-brand-primary bg-brand-primary/5"
          ),
          children: [
            showIcons && /* @__PURE__ */ jsx6(
              "div",
              {
                className: cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
                  isActive ? "bg-brand-primary text-brand-primary-foreground" : "bg-muted text-muted-foreground"
                ),
                children: option.icon
              }
            ),
            /* @__PURE__ */ jsxs3("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx6("div", { className: "font-medium", children: option.label }),
              showDescription && option.description && /* @__PURE__ */ jsx6("p", { className: "text-sm text-muted-foreground", children: option.description })
            ] }),
            isActive && /* @__PURE__ */ jsx6(Check, { className: "h-5 w-5 text-brand-primary shrink-0" })
          ]
        },
        option.value
      );
    }) });
  }
  return /* @__PURE__ */ jsx6(
    "select",
    {
      value: brand,
      onChange: (e) => setBrand(e.target.value),
      className: cn(
        "flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
        "focus:outline-none focus:ring-1 focus:ring-ring",
        className
      ),
      children: options.map((option) => /* @__PURE__ */ jsx6("option", { value: option.value, children: option.label }, option.value))
    }
  );
}

// src/components/card.tsx
import * as React5 from "react";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var cardVariants = cva4(
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-fast",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-elevation-2 hover:shadow-elevation-3",
        outline: "shadow-none",
        ghost: "border-transparent bg-transparent shadow-none",
        brand: "border-brand-primary/20 bg-brand-primary/5"
      },
      radius: {
        default: "rounded-lg",
        sm: "rounded-md",
        lg: "rounded-xl",
        xl: "rounded-2xl",
        none: "rounded-none"
      },
      padding: {
        default: "",
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "default",
      padding: "default"
    }
  }
);
var Card = React5.forwardRef(
  ({ className, variant, radius, padding, ...props }, ref) => {
    return /* @__PURE__ */ jsx7(
      "div",
      {
        ref,
        className: cn(cardVariants({ variant, radius, padding, className })),
        ...props
      }
    );
  }
);
Card.displayName = "Card";
var CardHeader = React5.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx7(
    "div",
    {
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className),
      ...props
    }
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React5.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx7(
    "h3",
    {
      ref,
      className: cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      ),
      ...props
    }
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React5.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx7(
    "p",
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React5.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx7("div", { ref, className: cn("p-6 pt-0", className), ...props });
});
CardContent.displayName = "CardContent";
var CardFooter = React5.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx7(
    "div",
    {
      ref,
      className: cn("flex items-center p-6 pt-0", className),
      ...props
    }
  );
});
CardFooter.displayName = "CardFooter";

// src/components/input.tsx
import * as React6 from "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var inputVariants = cva5(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-fast",
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-muted border-transparent",
        ghost: "border-transparent bg-transparent",
        brand: "focus-visible:ring-brand-primary/50"
      },
      size: {
        default: "h-9 px-3 py-2",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-10 px-4 py-2",
        xl: "h-12 px-4 py-3 text-base"
      },
      radius: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full px-4",
        none: "rounded-none"
      },
      state: {
        default: "",
        error: "border-error focus-visible:ring-error/50",
        success: "border-success focus-visible:ring-success/50",
        warning: "border-warning focus-visible:ring-warning/50"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
      state: "default"
    }
  }
);
var Input = React6.forwardRef(
  ({
    className,
    variant,
    size: inputSize,
    radius,
    state,
    leftIcon,
    rightIcon,
    type,
    ...props
  }, ref) => {
    const input = /* @__PURE__ */ jsx8(
      "input",
      {
        type,
        className: cn(inputVariants({ variant, size: inputSize, radius, state, className })),
        ref,
        ...props
      }
    );
    if (leftIcon || rightIcon) {
      return /* @__PURE__ */ jsxs4("div", { className: "relative flex items-center", children: [
        leftIcon && /* @__PURE__ */ jsx8("div", { className: "absolute left-3 text-muted-foreground pointer-events-none", children: leftIcon }),
        /* @__PURE__ */ jsx8(
          "input",
          {
            type,
            className: cn(
              inputVariants({ variant, size: inputSize, radius, state, className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10"
            ),
            ref,
            ...props
          }
        ),
        rightIcon && /* @__PURE__ */ jsx8("div", { className: "absolute right-3 text-muted-foreground pointer-events-none", children: rightIcon })
      ] });
    }
    return input;
  }
);
Input.displayName = "Input";

// src/components/separator.tsx
import * as React7 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var Separator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
  "hr",
  {
    ref,
    className: cn("shrink-0 bg-border", className),
    ...props
  }
));
Separator.displayName = "Separator";

// src/components/tabs.tsx
import * as React8 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Tabs = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  "div",
  {
    ref,
    className: cn("inline-flex flex-col", className),
    ...props
  }
));
Tabs.displayName = "Tabs";
var TabsList = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  "div",
  {
    ref,
    role: "tablist",
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = "TabsList";
var TabsTrigger = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  "button",
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  "div",
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = "TabsContent";

// src/providers/theme-provider.tsx
import * as React9 from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var ThemeContext = React9.createContext(
  void 0
);
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  enableSystem = true,
  disableTransitionOnChange = false
}) {
  const [theme, setThemeState] = React9.useState(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React9.useState("light");
  React9.useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setThemeState(stored);
    }
  }, [storageKey]);
  const setTheme = React9.useCallback(
    (newTheme) => {
      setThemeState(newTheme);
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
      }
    },
    [storageKey]
  );
  React9.useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      let resolved;
      if (theme === "system" && enableSystem) {
        resolved = mediaQuery.matches ? "dark" : "light";
      } else {
        resolved = theme === "dark" ? "dark" : "light";
      }
      setResolvedTheme(resolved);
      if (disableTransitionOnChange) {
        const css = document.createElement("style");
        css.appendChild(
          document.createTextNode(
            "* { transition: none !important; }"
          )
        );
        document.head.appendChild(css);
        requestAnimationFrame(() => {
          document.head.removeChild(css);
        });
      }
      root.setAttribute("data-theme", resolved);
      if (resolved === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };
    applyTheme();
    if (enableSystem && theme === "system") {
      mediaQuery.addEventListener("change", applyTheme);
      return () => mediaQuery.removeEventListener("change", applyTheme);
    }
  }, [theme, enableSystem, disableTransitionOnChange]);
  const value = React9.useMemo(
    () => ({ theme, setTheme, resolvedTheme }),
    [theme, setTheme, resolvedTheme]
  );
  return /* @__PURE__ */ jsx11(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = React9.useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// src/components/theme-switcher.tsx
import { Sun, Moon, Monitor, Check as Check2 } from "lucide-react";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var themeOptions = [
  {
    value: "light",
    label: "Light",
    description: "Always use light mode",
    icon: /* @__PURE__ */ jsx12(Sun, { className: "h-4 w-4" })
  },
  {
    value: "dark",
    label: "Dark",
    description: "Always use dark mode",
    icon: /* @__PURE__ */ jsx12(Moon, { className: "h-4 w-4" })
  },
  {
    value: "system",
    label: "System",
    description: "Follow system preference",
    icon: /* @__PURE__ */ jsx12(Monitor, { className: "h-4 w-4" })
  }
];
function ThemeSwitcher({
  variant = "segmented",
  size = "md",
  className,
  showLabel = true,
  showIcons = true
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const sizeClasses = {
    sm: "h-7 px-2",
    md: "h-9 px-3",
    lg: "h-10 px-4"
  };
  if (variant === "buttons") {
    return /* @__PURE__ */ jsx12("div", { className: cn("flex items-center gap-1", className), children: themeOptions.map((option) => {
      const isActive = theme === option.value;
      return /* @__PURE__ */ jsxs5(
        Button,
        {
          variant: isActive ? "secondary" : "ghost",
          size: "sm",
          onClick: () => setTheme(option.value),
          className: cn(
            "gap-2",
            sizeClasses[size],
            isActive && "ring-2 ring-ring ring-offset-2"
          ),
          children: [
            showIcons && option.icon,
            showLabel && /* @__PURE__ */ jsx12("span", { children: option.label })
          ]
        },
        option.value
      );
    }) });
  }
  if (variant === "segmented") {
    return /* @__PURE__ */ jsx12(
      "div",
      {
        className: cn(
          "inline-flex items-center rounded-lg border bg-muted p-1",
          className
        ),
        children: themeOptions.map((option) => {
          const isActive = theme === option.value;
          return /* @__PURE__ */ jsxs5(
            "button",
            {
              onClick: () => setTheme(option.value),
              className: cn(
                "relative flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-fast",
                "hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"
              ),
              children: [
                showIcons && option.icon,
                showLabel && /* @__PURE__ */ jsx12("span", { children: option.label })
              ]
            },
            option.value
          );
        })
      }
    );
  }
  if (variant === "cards") {
    return /* @__PURE__ */ jsx12("div", { className: cn("grid gap-3", className), children: themeOptions.map((option) => {
      const isActive = theme === option.value;
      const isResolved = resolvedTheme === (option.value === "system" ? void 0 : option.value);
      return /* @__PURE__ */ jsxs5(
        "button",
        {
          onClick: () => setTheme(option.value),
          className: cn(
            "flex items-start gap-3 rounded-lg border p-4 text-left transition-all duration-fast",
            "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-ring",
            isActive && "border-primary bg-primary/5"
          ),
          children: [
            showIcons && /* @__PURE__ */ jsx12(
              "div",
              {
                className: cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
                  isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                ),
                children: option.icon
              }
            ),
            /* @__PURE__ */ jsxs5("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs5("div", { className: "font-medium flex items-center gap-2", children: [
                option.label,
                option.value === "system" && /* @__PURE__ */ jsxs5("span", { className: "text-xs text-muted-foreground", children: [
                  "(",
                  resolvedTheme,
                  ")"
                ] })
              ] }),
              option.description && /* @__PURE__ */ jsx12("p", { className: "text-sm text-muted-foreground", children: option.description })
            ] }),
            isActive && /* @__PURE__ */ jsx12(Check2, { className: "h-5 w-5 text-primary shrink-0" })
          ]
        },
        option.value
      );
    }) });
  }
  return /* @__PURE__ */ jsx12(
    "select",
    {
      value: theme,
      onChange: (e) => setTheme(e.target.value),
      className: cn(
        "flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
        "focus:outline-none focus:ring-1 focus:ring-ring",
        className
      ),
      children: themeOptions.map((option) => /* @__PURE__ */ jsx12("option", { value: option.value, children: option.label }, option.value))
    }
  );
}
export {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  BrandProvider,
  BrandSwitcher,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeProvider,
  ThemeSwitcher,
  alertVariants,
  badgeVariants,
  buttonVariants,
  cardVariants,
  cn,
  defaultBrandOptions,
  formatCurrency,
  formatDate,
  inputVariants,
  themeOptions,
  useBrand,
  useTheme
};
//# sourceMappingURL=index.mjs.map