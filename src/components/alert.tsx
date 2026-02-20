"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        muted: "bg-muted text-muted-foreground border-muted",
        brand: "bg-brand-primary/10 text-brand-primary border-brand-primary/20 [&>svg]:text-brand-primary",
        success:
          "bg-success/10 text-success border-success/20 [&>svg]:text-success",
        warning:
          "bg-warning/10 text-warning border-warning/20 [&>svg]:text-warning",
        info: "bg-info/10 text-info border-info/20 [&>svg]:text-info",
        error: "bg-error/10 text-error border-error/20 [&>svg]:text-error",
        destructive:
          "bg-destructive/10 text-destructive border-destructive/20 [&>svg]:text-destructive",
      },
      radius: {
        default: "rounded-lg",
        sm: "rounded-md",
        lg: "rounded-xl",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "default",
    },
  }
);

const alertIconMap = {
  default: Info,
  muted: Info,
  brand: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info,
  error: AlertCircle,
  destructive: AlertCircle,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
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
    },
    ref
  ) => {
    const IconComponent = variant ? alertIconMap[variant] : Info;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, radius, className }))}
        {...props}
      >
        {showIcon && (icon || <IconComponent className="h-4 w-4" />)}
        {dismissible && (
          <button
            onClick={onDismiss}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </button>
        )}
        {title && <AlertTitle>{title}</AlertTitle>}
        {children && <AlertDescription>{children}</AlertDescription>}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
