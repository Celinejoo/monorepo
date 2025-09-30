import type { Meta, StoryObj } from "@storybook/react";
import { FloatingButton } from "./FloatingButton";

const meta: Meta<typeof FloatingButton> = {
  title: "Components/FloatingButton",
  component: FloatingButton,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["solid", "outline", "error", "ErrorOutline"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof FloatingButton>;

export const Solid: Story = { args: { children: "Solid" } };
export const Error: Story = { args: { children: "Error", variant: "error" } };
export const ErrorOutline: Story = {
  args: { children: "ErrorOutline", variant: "errorOutline" },
};
