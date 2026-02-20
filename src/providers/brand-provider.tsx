"use client";

import * as React from "react";

type Brand = "lsts" | "tlao";

interface BrandContextValue {
  brand: Brand;
  setBrand: (brand: Brand) => void;
  brands: Brand[];
}

const BrandContext = React.createContext<BrandContextValue | undefined>(
  undefined
);

interface BrandProviderProps {
  children: React.ReactNode;
  defaultBrand?: Brand;
  brands?: Brand[];
  storageKey?: string;
}

export function BrandProvider({
  children,
  defaultBrand = "lsts",
  brands = ["lsts", "tlao"],
  storageKey = "ui-brand",
}: BrandProviderProps) {
  // Initialize with the default on both server and client to avoid hydration mismatch.
  // localStorage is read in a useEffect after hydration.
  const [brand, setBrandState] = React.useState<Brand>(defaultBrand);

  // Sync stored brand preference after hydration (client-only)
  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Brand | null;
    if (stored && (brands as string[]).includes(stored)) {
      setBrandState(stored);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const setBrand = React.useCallback(
    (newBrand: Brand) => {
      setBrandState(newBrand);
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newBrand);
        document.documentElement.setAttribute("data-brand", newBrand);
      }
    },
    [storageKey]
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-brand", brand);
    }
  }, [brand]);

  const value = React.useMemo(
    () => ({ brand, setBrand, brands }),
    [brand, setBrand, brands]
  );

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
}

export function useBrand() {
  const context = React.useContext(BrandContext);
  if (context === undefined) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
}

export type { Brand, BrandProviderProps };
