import type { Meta, StoryObj } from "@storybook/react";
import { Border } from "./Border";

const meta: Meta<typeof Border> = {
  title: "Components/Border",
  tags: ["autodocs"],
  component: Border,
};
export default meta;

type Story = StoryObj<typeof Border>;

export const Defalut: Story = {
  render: () => (
    <>
      <Border />
      <div style={{ marginTop: "16px" }}></div>
      <Border height="16" />
    </>
  ),
};
