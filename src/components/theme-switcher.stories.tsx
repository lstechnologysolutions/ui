import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./theme-switcher";

const meta = {
  title: "Components/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["buttons", "segmented", "cards", "select"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    showLabel: {
      control: "boolean",
    },
    showIcons: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "segmented",
  },
};

export const Segmented: Story = {
  args: {
    variant: "segmented",
  },
};

export const Buttons: Story = {
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

export const ButtonsWithoutLabels: Story = {
  args: {
    variant: "buttons",
    showLabel: false,
  },
};

export const Cards: Story = {
  args: {
    variant: "cards",
  },
};

export const Select: Story = {
  args: {
    variant: "select",
  },
};

export const WithoutIcons: Story = {
  args: {
    variant: "segmented",
    showIcons: false,
  },
};
