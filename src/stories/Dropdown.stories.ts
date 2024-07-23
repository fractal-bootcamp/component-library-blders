import type { Meta, StoryObj } from "@storybook/react";
import { sampleDropdownOptions } from "../sampleData/DropdownSample";
import DropdownParent, { DropdownParentProps } from "./DropdownParent";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Library/Dropdown",
  component: DropdownParent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    options: {
      control: "object",
      description: "List of options to display in the dropdown"
    },
    multiple: {
      control: "boolean",
      description: "Flag for multi/single selection"
    }
  }
} satisfies Meta<DropdownParentProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    options: sampleDropdownOptions,
    multiple: false,
    disabled: false
  }
};

export const Multi: Story = {
  args: {
    options: sampleDropdownOptions,
    multiple: true,
    disabled: false
  }
};
export const Disabled: Story = {
  args: {
    options: sampleDropdownOptions,
    multiple: true,
    disabled: true
  }
};
