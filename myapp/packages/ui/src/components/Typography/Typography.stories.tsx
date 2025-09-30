import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
        "text",
        "textSubtle",
      ],
    },
    display: {
      control: { type: "radio" },
      options: ["block", "inline-block", "inline"],
    },
    textAlign: {
      control: { type: "radio" },
      options: ["right", "left", "center"],
    },
    fontWeight: {
      control: { type: "radio" },
      options: ["300", "400", "500", "700"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const headingXL: Story = {
  args: {
    children: "headingXL",
    typography: "headingXL",
  },
};

export const headingL: Story = {
  args: {
    children: "headingL",
    typography: "headingL",
  },
};

export const headingM: Story = {
  args: {
    children: "headingM",
    typography: "headingM",
  },
};

export const headingS: Story = {
  args: {
    children: "headingS",
    typography: "headingS",
  },
};

export const bodyL: Story = {
  args: {
    children: "bodyL",
    typography: "bodyL",
  },
};

export const body: Story = {
  args: {
    children: "body",
    typography: "body",
  },
};

export const bodyS: Story = {
  args: {
    children: "bodyS",
    typography: "bodyS",
  },
};

export const caption: Story = {
  args: {
    children: "caption",
    typography: "caption",
  },
};
