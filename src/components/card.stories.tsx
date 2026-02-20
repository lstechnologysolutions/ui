import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
import { Button } from "./button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "outline", "ghost", "brand"],
    },
    radius: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "none"],
    },
    padding: {
      control: "select",
      options: ["default", "none", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Your project will be deployed to our infrastructure and accessible via a unique URL.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
  },
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>With enhanced shadow on hover.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This card has a more prominent shadow and elevates on hover.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  ),
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>Without shadow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Clean look with just a border, no elevation.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Ghost Card</CardTitle>
        <CardDescription>Transparent background.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Blends into the background with no border.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Brand: Story = {
  args: {
    variant: "brand",
  },
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Brand Card</CardTitle>
        <CardDescription>With brand accent styling.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Highlights the brand with subtle brand coloring.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="brand" className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  ),
};

export const RadiusVariations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card className="w-[200px]" radius="none">
        <CardHeader>
          <CardTitle className="text-base">None</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">No border radius</p>
        </CardContent>
      </Card>
      <Card className="w-[200px]" radius="sm">
        <CardHeader>
          <CardTitle className="text-base">Small</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Small border radius</p>
        </CardContent>
      </Card>
      <Card className="w-[200px]" radius="default">
        <CardHeader>
          <CardTitle className="text-base">Default</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Default border radius</p>
        </CardContent>
      </Card>
      <Card className="w-[200px]" radius="lg">
        <CardHeader>
          <CardTitle className="text-base">Large</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Large border radius</p>
        </CardContent>
      </Card>
      <Card className="w-[200px]" radius="xl">
        <CardHeader>
          <CardTitle className="text-base">Extra Large</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">Extra large border radius</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent className="pt-6">
        <p>Simple card with just content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

export const OnlyHeader: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to continue.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  ),
};
