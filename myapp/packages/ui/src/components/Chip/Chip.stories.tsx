import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Chips: Story = {
  render: () => <Chip label="뱃지" />,
};
