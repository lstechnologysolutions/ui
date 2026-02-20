import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "muted", "brand", "success", "warning", "info", "error", "destructive"],
    },
    radius: {
      control: "select",
      options: ["default", "sm", "lg", "none"],
    },
    dismissible: {
      control: "boolean",
    },
    showIcon: {
      control: "boolean",
    },
    title: {
      control: "text",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Heads up!",
    children: "You can add components to your app using the cli.",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    title: "Note",
    children: "This is a muted alert with less visual prominence.",
  },
};

export const Brand: Story = {
  args: {
    variant: "brand",
    title: "Welcome to LSTS!",
    children: "This is a brand-styled alert.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "Please review your settings before continuing.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Did you know?",
    children: "You can customize these alerts with your own content.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    children: "Something went wrong. Please try again later.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Destructive Action",
    children: "This action cannot be undone. Are you sure you want to continue?",
  },
};

export const Dismissible: Story = {
  args: {
    variant: "info",
    title: "Dismissible Alert",
    children: "Click the X to dismiss this alert.",
    dismissible: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: "No Icon",
    children: "This alert doesn't show the default icon.",
    showIcon: false,
  },
};

export const WithoutTitle: Story = {
  args: {
    children: "This alert has no title, only content.",
  },
};

export const RadiusVariations: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Alert variant="info" radius="none" title="None">
        No border radius
      </Alert>
      <Alert variant="info" radius="sm" title="Small">
        Small border radius
      </Alert>
      <Alert variant="info" radius="default" title="Default">
        Default border radius
      </Alert>
      <Alert variant="info" radius="lg" title="Large">
        Large border radius
      </Alert>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <Alert title="Default">
        Default alert style
      </Alert>
      <Alert variant="muted" title="Muted">
        Muted alert style
      </Alert>
      <Alert variant="brand" title="Brand">
        Brand alert style
      </Alert>
      <Alert variant="success" title="Success">
        Success alert style
      </Alert>
      <Alert variant="warning" title="Warning">
        Warning alert style
      </Alert>
      <Alert variant="info" title="Info">
        Info alert style
      </Alert>
      <Alert variant="error" title="Error">
        Error alert style
      </Alert>
      <Alert variant="destructive" title="Destructive">
        Destructive alert style
      </Alert>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    variant: "info",
    title: "Long Alert Title That Might Wrap",
    children: (
      <>
        <p className="mb-2">
          This alert contains longer content to demonstrate how the component handles
          multi-line text and larger amounts of information.
        </p>
        <ul className="list-disc list-inside text-sm">
          <li>First item in the list</li>
          <li>Second item with more detail</li>
          <li>Third item to show the pattern</li>
        </ul>
      </>
    ),
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "brand",
    title: "Custom Icon",
    children: "This alert uses a custom icon.",
    icon: <span className="text-xl">🚀</span>,
  },
};

export const WithComponents: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <Alert>
        <AlertTitle>Using Alert Components</AlertTitle>
        <AlertDescription>
          You can compose alerts using AlertTitle and AlertDescription components for more control.
        </AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <CheckCircleIcon className="h-4 w-4" />
        <AlertTitle>Manual Icon</AlertTitle>
        <AlertDescription>
          You can also manually add icons and other elements.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Helper icon component for the example
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
