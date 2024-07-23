import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../components/Tooltip";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Library/Tooltip",
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {}
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const imageContent = () =>
  React.createElement("img", {
    src: "https://picsum.photos/200/200",
    alt: "placeholder"
  });
export const TextTip: Story = {
  args: {
    children: "Tooltip Wrapper Child Text",
    tipContent: "Tooltip Text",
    position: "top"
  }
};
export const ImageTip: Story = {
  args: {
    children: "Child Text",
    tipContent: imageContent(),
    position: "top"
  }
};
