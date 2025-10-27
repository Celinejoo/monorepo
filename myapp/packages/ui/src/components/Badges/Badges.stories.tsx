import type { Meta, StoryObj } from "@storybook/react";
import { Badges } from "./Badges";

const meta: Meta<typeof Badges> = {
  title: "Components/Badges",
  component: Badges,
};
export default meta;

type Story = StoryObj<typeof Badges>;

export const 뱃지: Story = {
  render: () => <Badges label="뱃지" />,
};
