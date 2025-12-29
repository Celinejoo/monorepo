import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./SelectBox";

const meta: Meta<typeof SelectBox> = {
  title: "Components/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
  args: {
    label: "과일",
    options: [
      { label: "사과", value: "apple" },
      { label: "바나나", value: "banana" },
      { label: "딸기", value: "strawberry" },
    ],
    defaultValue: "apple",
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
