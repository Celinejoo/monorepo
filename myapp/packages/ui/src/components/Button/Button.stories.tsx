import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = { args: { children: "Solid", variant: "solid" } };
export const Ghost: Story = { args: { children: "Ghost", variant: "ghost" } };
