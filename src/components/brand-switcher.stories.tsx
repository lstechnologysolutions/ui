import type { Meta, StoryObj } from "@storybook/react";
import { BrandSwitcher } from "./brand-switcher";

const meta = {
  title: "Components/BrandSwitcher",
  component: BrandSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["buttons", "cards", "select"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    showIcons: {
      control: "boolean",
    },
    showDescription: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BrandSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "buttons",
  },
};

export const ButtonsSmall: Story = {
  args: {
    variant: "buttons",
    size: "sm",
  },
};

export const ButtonsLarge: Story = {
  args: {
    variant: "buttons",
    size: "lg",
  },
};

export const Cards: Story = {
  args: {
    variant: "cards",
  },
};

export const CardsWithDescription: Story = {
  args: {
    variant: "cards",
    showDescription: true,
  },
};

export const Select: Story = {
  args: {
    variant: "select",
  },
};

export const WithoutIcons: Story = {
  args: {
    variant: "buttons",
    showIcons: false,
  },
};
