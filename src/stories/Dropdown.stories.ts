import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../components/Dropdown";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Library/Dropdown",
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {}
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleChildren: React.ReactNode = <ol><li>Item 1</li><li>Item 2</li></ol>;
export const Default: Story = {
  args: {
    children: "Child Text",
    tipContent: "Tooltip Text",
    position: "top"
  }
};
