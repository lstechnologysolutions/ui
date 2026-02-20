import * as React from "react"

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={
      "relative flex h-10 w-10 shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 transition-colors hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
    }
    {...props}
  />
))
Avatar.displayName = "Avatar"

interface AvatarImageProps {
  src?: string | null;
  alt?: string;
  className?: string;
}

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  AvatarImageProps
>(({ src, alt, className, ...props }, ref) => (
  <img
    ref={ref}
    src={src || undefined}
    alt={alt || ''}
    className={`aspect-square h-full w-full rounded-full object-cover ${className}`}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={
      "flex h-full w-full items-center justify-center rounded-full bg-muted"
    }
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarFallback, AvatarImage }
