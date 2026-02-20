import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Search, Mail, Lock, Eye, EyeOff } from "lucide-react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "filled", "ghost", "brand"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl"],
    },
    state: {
      control: "select",
      options: ["default", "error", "success", "warning"],
    },
    radius: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "full", "none"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <label className="text-sm font-medium">Email Address</label>
      <Input type="email" placeholder="email@example.com" />
      <p className="text-xs text-muted-foreground">
        We&apos;ll never share your email with anyone else.
      </p>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Search className="h-4 w-4" />,
    placeholder: "Search...",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <Eye className="h-4 w-4" />,
    type: "password",
    placeholder: "Enter password",
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: <Mail className="h-4 w-4" />,
    rightIcon: <Lock className="h-4 w-4" />,
    type: "email",
    placeholder: "Enter email",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled variant",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    placeholder: "Ghost variant",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
    placeholder: "Brand variant",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    placeholder: "Error state",
    defaultValue: "invalid-email",
  },
};

export const Success: Story = {
  args: {
    state: "success",
    placeholder: "Success state",
    defaultValue: "valid-email@example.com",
  },
};

export const Warning: Story = {
  args: {
    state: "warning",
    placeholder: "Warning state",
    defaultValue: "check-input",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Small</label>
        <Input size="sm" placeholder="Small input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Input placeholder="Default input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Large</label>
        <Input size="lg" placeholder="Large input" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Extra Large</label>
        <Input size="xl" placeholder="Extra large input" />
      </div>
    </div>
  ),
};

export const RadiusVariations: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Input radius="none" placeholder="No radius" />
      <Input radius="sm" placeholder="Small radius" />
      <Input radius="default" placeholder="Default radius" />
      <Input radius="lg" placeholder="Large radius" />
      <Input radius="xl" placeholder="Extra large radius" />
      <Input radius="full" placeholder="Full radius (pill)" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    defaultValue: "Cannot edit this",
  },
};

export const SearchInput: Story = {
  render: () => (
    <div className="w-[400px]">
      <Input
        leftIcon={<Search className="h-4 w-4" />}
        placeholder="Search products, categories..."
        className="w-full"
      />
    </div>
  ),
};

export const PasswordInput: Story = {
  render: function PasswordInputStory() {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="w-[300px]">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          leftIcon={<Lock className="h-4 w-4" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-foreground focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          }
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Default</label>
        <Input placeholder="Default state" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-error">Error</label>
        <Input state="error" placeholder="Error state" defaultValue="invalid" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-success">Success</label>
        <Input state="success" placeholder="Success state" defaultValue="valid@email.com" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-warning">Warning</label>
        <Input state="warning" placeholder="Warning state" />
      </div>
    </div>
  ),
};
