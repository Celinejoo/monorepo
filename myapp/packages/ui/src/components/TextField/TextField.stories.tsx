import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Defalut: Story = {
  render: () => (
    <TextField
      label="비밀번호"
      type="password"
      placeholder="8자 이상"
      error={false}
    />
  ),
};
