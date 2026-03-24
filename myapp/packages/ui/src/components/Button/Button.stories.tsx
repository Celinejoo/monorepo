import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["fill", "weak"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large", "xlarge"],
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "danger", "light", "dark", "text"],
    },
    display: {
      control: { type: "radio" },
      options: ["block", "inline", "full"],
    },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const 버튼: Story = {
  args: {
    children: "버튼",
    variant: "fill",
    color: "primary",
    size: "medium",
    disabled: false,
    display: "inline",
  },
};

export const 텍스트버튼: Story = {
  args: {
    children: "텍스트버튼",
    variant: "fill",
    color: "text",
    size: "medium",
    disabled: false,
    display: "inline",
  },
};

export const Dark: Story = {
  args: {
    children: "접근성 관련 추가 ",
    variant: "fill",
    color: "text",
    size: "medium",
    disabled: false,
    display: "inline",
  },
};
