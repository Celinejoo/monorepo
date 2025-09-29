import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["solid", "outline", "gray", "grayOutline", "textButton"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    full: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = { args: { children: "Solid", variant: "solid" } };

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const Gray: Story = {
  args: { children: "Gray", variant: "gray" },
};

export const GrayOutline: Story = {
  args: { children: "GrayOutline", variant: "grayOutline" },
};

export const textButton: Story = {
  args: { children: "textbutton", variant: "textButton" },
};
export const Disabled: Story = {
  args: { children: "Outline", variant: "outline", disabled: true },
};
