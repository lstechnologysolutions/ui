import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Loader2, Mail, ArrowRight, Plus, Trash2 } from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "link",
        "destructive",
        "brand",
        "brand-secondary",
        "brand-ghost",
      ],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "xl", "2xl", "icon", "icon-sm", "icon-lg"],
    },
    radius: {
      control: "select",
      options: ["default", "none", "sm", "lg", "xl", "2xl", "full"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    asChild: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
    children: "Brand Primary",
  },
};

export const BrandSecondary: Story = {
  args: {
    variant: "brand-secondary",
    children: "Brand Secondary",
  },
};

export const BrandGhost: Story = {
  args: {
    variant: "brand-ghost",
    children: "Brand Ghost",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Mail className="h-4 w-4" />,
    children: "Send Email",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ArrowRight className="h-4 w-4" />,
    children: "Next",
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: <Mail className="h-4 w-4" />,
    rightIcon: <ArrowRight className="h-4 w-4" />,
    children: "Send",
  },
};

export const IconButton: Story = {
  args: {
    size: "icon",
    variant: "outline",
    children: <Plus className="h-4 w-4" />,
  },
};

export const DestructiveIconButton: Story = {
  args: {
    size: "icon",
    variant: "destructive",
    children: <Trash2 className="h-4 w-4" />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button size="2xl">2X Large</Button>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button radius="none">None</Button>
      <Button radius="sm">Small</Button>
      <Button radius="default">Default</Button>
      <Button radius="lg">Large</Button>
      <Button radius="xl">Extra Large</Button>
      <Button radius="2xl">2X Large</Button>
      <Button radius="full">Full</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="brand">Brand</Button>
        <Button variant="brand-secondary">Brand Secondary</Button>
        <Button variant="brand-ghost">Brand Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="https://example.com">Link as Button</a>,
  },
};
