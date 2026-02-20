import type { Preview } from "@storybook/react";
import React from "react";

import { BrandProvider } from "../src/providers/brand-provider";
import { ThemeProvider } from "../src/providers/theme-provider";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#0a0a0a",
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand || "lsts";
      const theme = context.globals.theme || "light";

      return (
        <BrandProvider defaultBrand={brand}>
          <ThemeProvider defaultTheme={theme}>
            <div className="p-4">
              <Story />
            </div>
          </ThemeProvider>
        </BrandProvider>
      );
    },
  ],
  globalTypes: {
    brand: {
      description: "Global brand for components",
      defaultValue: "lsts",
      toolbar: {
        title: "Brand",
        icon: "globe",
        items: [
          { value: "lsts", title: "LSTS" },
          { value: "tlao", title: "TLÁO" },
        ],
        showName: true,
      },
    },
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
