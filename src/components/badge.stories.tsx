import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
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
        "destructive",
        "outline",
        "ghost",
        "muted",
        "brand",
        "brand-secondary",
        "success",
        "warning",
        "info",
        "error",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl"],
    },
    radius: {
      control: "select",
      options: ["default", "sm", "md", "lg", "full", "none"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
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

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
    children: "Brand",
  },
};

export const BrandSecondary: Story = {
  args: {
    variant: "brand-secondary",
    children: "Brand Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 max-w-[600px]">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="muted">Muted</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="brand-secondary">Brand Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const RadiusVariations: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge radius="none">None</Badge>
      <Badge radius="sm">Small</Badge>
      <Badge radius="default">Default</Badge>
      <Badge radius="md">Medium</Badge>
      <Badge radius="lg">Large</Badge>
      <Badge radius="full">Full</Badge>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="space-y-4 max-w-[400px]">
      <div className="flex items-center justify-between">
        <span className="text-sm">New Feature</span>
        <Badge variant="brand">New</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Deployment Status</span>
        <Badge variant="success">Active</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">System Health</span>
        <Badge variant="warning">Degraded</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Payment</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Beta Feature</span>
        <Badge variant="outline">Beta</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Users</span>
        <Badge variant="secondary" size="sm">1,234</Badge>
      </div>
    </div>
  ),
};
