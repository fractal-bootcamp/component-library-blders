import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FirstButton as Button, ButtonProps } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Library/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    textContent: { control: "text" },
    icon: { control: "select", options: ["rocket", "smile", "game"] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    textContent: "Primary Button",
    disabled: false,
    loading: false,
    icon: "game",
    iconPosition: "left",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    textContent: "Secondary Button",
    disabled: false,
    loading: false,
    icon: "game",
    iconPosition: "left",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    textContent: "Tertiary Button",
    disabled: false,
    loading: false,
    icon: "game",
    iconPosition: "left",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    textContent: "Large Button",
    disabled: false,
    loading: false,
    icon: "game",
    iconPosition: "left",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    textContent: "Small Button",
    disabled: false,
    loading: false,
    icon: "game",
    iconPosition: "left",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    size: "medium",
    textContent: "Loading Button",
    disabled: false,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    textContent: "Disabled Button",
    disabled: true,
    loading: false,
  },
};
