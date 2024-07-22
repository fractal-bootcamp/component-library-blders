import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FirstButton as Button, ButtonProps } from "../components/Button";
import { ReactElement } from "react";

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
    text: { control: "text" },
    icon: { control: "select", options: ["rocket", "smiley", "game"] },
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
    text: "Primary Button",
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
    text: "Secondary Button",
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
    text: "Tertiary Button",
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
    text: "Large Button",
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
    text: "Small Button",
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
    text: "Loading Button",
    disabled: false,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    text: "Disabled Button",
    disabled: true,
    loading: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "primary",
    size: "medium",
    text: "With Left Icon",
    disabled: false,
    loading: false,
    icon: "game",
    iconPosition: "left",
  },
};
