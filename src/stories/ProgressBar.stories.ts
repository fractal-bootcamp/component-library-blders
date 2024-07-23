// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "../components/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Linear: Story = {
  args: {
    value: 0,
    max: 100,
  },
};
