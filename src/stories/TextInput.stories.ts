import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../components/TextInput";

const meta = {
  title: "Example/TextInput",
  component: TextInput,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
    controls: { sort: "requiredFirst" },
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
      control: "file",
      accept: ".png",
      description: "The icon to display as a prefix in the input field.",
    },
    suffixIcon: {
      control: "file",
      accept: ".png",
      description: "The icon to display as a suffix in the input field.",
    },
    validationState: {
      control: "select",
      options: ["error", "success", null],
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
  },
};

export const DisabledState: Story = {
  args: {
    ...Default.args,
    value: "Disabled state",
    isDisabled: true,
  },
};

export const PasswordInput: Story = {
  args: {
    ...Default.args,
    isPassword: true,
  },
};

export const ErrorState: Story = {
  args: {
    ...Default.args,
    value: "Bad text",
    validationState: "error",
  },
};

export const SuccessState: Story = {
  args: {
    ...Default.args,
    value: "Good text",
    validationState: "success",
  },
};

export const WithPrefixIcon: Story = {
  args: {
    ...Default.args,
    prefixIcon: "icon.png",
  },
};

export const WithSuffixIcon: Story = {
  args: {
    ...Default.args,
    suffixIcon: "icon.png",
  },
};
