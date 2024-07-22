import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../components/TextInput";

const meta = {
  title: "Example/TextInput",
  component: TextInput,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    value: {
      control: "text",
      description: "The current value of the input field.",
    },
    onChange: {
      action: "changed",
      description: "The function to handle changes in the input field.",
    },
    placeholderText: {
      control: "text",
      description: "The text to display as a placeholder in the input field.",
    },
    isPassword: {
      control: "boolean",
      description: "Indicates if the input field should be of type password.",
    },
    isDisabled: {
      control: "boolean",
      description: "Indicates if the input field should be disabled.",
    },
    prefixIcon: {
      control: "text",
      description: "The icon to display as a prefix in the input field.",
    },
    suffixIcon: {
      control: "text",
      description: "The icon to display as a suffix in the input field.",
    },
    validationState: {
      control: { type: "select", options: ["null", "error", "success"] },
      description: "The validation state of the input field.",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholderText: "Enter text...",
  },
};

export const DisabledState: Story = {
  args: {
    value: "Disabled state",
    onChange: () => {},
    isDisabled: true,
  },
};

export const PasswordInput: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholderText: "Enter password",
    isPassword: true,
  },
};

export const ErrorState: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholderText: "State = Error :(",
    validationState: "error",
  },
};

export const SuccessState: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholderText: "State = Success :)",
    validationState: "success",
  },
};

export const WithPrefixIcon: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholderText: "prefixIcon",
    prefixIcon: "sampleIcon",
  },
};

export const WithSuffixIcon: Story = {
  args: {
    value: "",
    onChange: () => {},
    placeholderText: "suffixIcon",
    suffixIcon: "sampleIcon",
  },
};
